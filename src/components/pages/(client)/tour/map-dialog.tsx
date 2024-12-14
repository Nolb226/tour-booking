'use client'
import { customIcon } from '@/components/map-utils'
import { MarkerGen } from '@/components/marker-gen'
import Timeline from '@/components/Timeline'
import {
   Dialog,
   DialogContent,
   DialogTitle,
   DialogTrigger,
} from '@/components/ui/dialog'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Itinerary } from '@/model/tour'
import L from 'leaflet'
import 'leaflet-curve'
import { ChevronRight, PlayIcon } from 'lucide-react'
import dynamic from 'next/dynamic'
import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { Marker, Popup, useMap } from 'react-leaflet'
const Map = dynamic(() => import('@/components/map'), { ssr: false })

// #ff692e Ngày 1
// 66C61C Ngày 2
// FDB022 Ngày 3
export default function MapDialog({
   itineraries,
   centerPoint,
}: {
   centerPoint: [number, number]
   itineraries: Itinerary[]
}) {
   const allPlaceLatLog = useMemo(() => {
      return itineraries
         .map((iti) => {
            return [
               iti.placeVisits.map((place) => [
                  place.place.latitude,
                  place.place.longitude,
               ]),
            ]
         })
         .flat(2)
   }, [itineraries])

   const renderFlightPath = useCallback(() => {
      return allPlaceLatLog.map((point, index) => {
         if (index === allPlaceLatLog.length - 1) return null

         return (
            <MarkerGen
               key={`-${index}-{s}`}
               markerList={[point, allPlaceLatLog[index + 1]]}
            />
         )
      })
   }, [allPlaceLatLog])
   return (
      <Dialog>
         <DialogTrigger className="flex items-center gap-1 rounded-md bg-light-color-scheme-primary-100 px-2 py-1 text-sm font-semibold text-light-color-scheme-primary-700">
            Xem trước
            <PlayIcon fill="#175cd3" className="h-4 w-4" />
         </DialogTrigger>
         <DialogContent className="flex h-[81vh] w-[94vw] max-w-none flex-col gap-2">
            <DialogTitle>Hành trình</DialogTitle>
            <div className="flex h-full pb-4">
               <Tabs className="overflow-y-scroll md:w-[460px]">
                  <TabsList aria-orientation="vertical">
                     {itineraries
                        .sort((a, b) => a.day_no - b.day_no)
                        .map((itinerary, index) => (
                           <TabsTrigger key={index} value={index.toString()}>
                              Ngày {itinerary.day_no}
                           </TabsTrigger>
                        ))}
                  </TabsList>

                  {itineraries.map((itinerary, index) => (
                     <TabsContent key={index} value={index.toString()}>
                        <p className="mb-3 text-sm font-semibold text-light-color-scheme-gray-500">
                           {itinerary.title}
                        </p>
                        {itinerary.placeVisits
                           .sort((a, b) => a.order_number - b.order_number)
                           .map((visit, index) => (
                              <Timeline key={visit.place.id} place={visit} />
                           ))}
                     </TabsContent>
                  ))}
               </Tabs>

               <div className="flex-1">
                  <Map className="h-full w-full" center={centerPoint}>
                     {itineraries.map((iti) =>
                        iti.placeVisits.map((place, index) => (
                           <Marker
                              key={place.order_number}
                              icon={customIcon(place.order_number, iti.day_no)}
                              position={[
                                 place.place.latitude,
                                 place.place.longitude,
                              ]}
                           >
                              <Popup>Đây là vị trí của bạn</Popup>
                           </Marker>
                        ))
                     )}
                     {renderFlightPath()}
                  </Map>
               </div>
            </div>
         </DialogContent>
      </Dialog>
   )
}
