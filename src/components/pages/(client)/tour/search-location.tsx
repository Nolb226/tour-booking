'use client'
import React, { useCallback, useEffect, useMemo, useState } from 'react'
import {
   MapContainer,
   Popup,
   Marker,
   TileLayer,
   useMapEvent,
   useMapEvents,
} from 'react-leaflet'
import { MapPin, Share2 } from 'lucide-react'
import {
   Dialog,
   DialogContent,
   DialogDescription,
   DialogHeader,
   DialogTitle,
   DialogTrigger,
} from '@/components/ui/dialog'
import {
   Select,
   SelectContent,
   SelectItem,
   SelectTrigger,
   SelectValue,
} from '@/components/ui/select'

import CopyButton from '@/components/copy-button'
import { Input } from '@/components/ui/input'
import TourCard from '@/components/pages/(client)/tour/tour-card'
import dynamic from 'next/dynamic'
import { getLocationTours } from '@/service/location'
import { Itinerary, TourByLocation } from '@/model/tour'
import TourOverview from './tour-overview'
import { TLocationWithTours } from '@/model/location'
import { cn } from '@/lib/utils'
import { MarkerGen } from '@/components/marker-gen'
import { customIcon } from '@/components/map-utils'
import { LatLngExpression, LatLngLiteral } from 'leaflet'

const Map = dynamic(() => import('@/components/map'), { ssr: false })

interface SearchLocationProps {
   location?: TLocationWithTours
}

export default function SearchLocation({ location }: SearchLocationProps) {
   const [selectedTour, setSelectedTour] = useState<string>('')
   const [itineraries, setItineraries] = useState<Itinerary[]>([])
   const [latlng, setLatlng] = useState<LatLngLiteral | undefined>(undefined)

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
   const removeSelectedTour = () => {
      setSelectedTour('')
      setItineraries([])
   }
   const selectTimeline = (lat: number, lng: number) => {
      console.log(lat, lng)

      setLatlng({ lat, lng })
   }

   return (
      <div className="grid h-full grid-cols-12">
         {/* Main panel */}
         <div className="col-span-4 h-full overflow-y-scroll md:h-[calc(100vh_-_70px)]">
            <div className="relative">
               <div className="absolute top-[42px] flex w-full gap-1 border-light-color-scheme-gray-200 pr-4 md:top-6 md:gap-2 md:px-4">
                  <Select>
                     <SelectTrigger>
                        <SelectValue placeholder="Theme" />
                     </SelectTrigger>
                     <SelectContent>
                        <SelectItem value="light">Light</SelectItem>
                        <SelectItem value="dark">Dark</SelectItem>
                        <SelectItem value="system">System</SelectItem>
                     </SelectContent>
                  </Select>
               </div>
            </div>
            <div className="mt-[42px] p-4 pt-2 md:pt-4">
               <div className="flex flex-col gap-3 md:gap-4">
                  {/* Place detail */}
                  <div className="flex flex-col gap-3 rounded-lg bg-light-color-scheme-pink-100 p-4 md:gap-4">
                     <div className="flex flex-col gap-1">
                        <h2 className="text-lg font-semibold text-light-color-scheme-gray-700">
                           {location?.name}
                        </h2>
                        <div className="flex items-center gap-1">
                           <MapPin className="size-4 text-light-color-scheme-gray-700" />
                           <p className="text-light-color-scheme-gray-700">
                              Việt nam
                           </p>
                        </div>
                     </div>
                     <div className="flex flex-col gap-3">
                        <h4 className="text-sm font-semibold text-light-color-scheme-gray-800 md:text-base">
                           Tổng quan
                        </h4>
                        <div className="text-lg md:text-sm">
                           {location?.description}
                        </div>
                     </div>
                     <div className="">
                        {/* <button className='p-2'></button> */}
                        <Dialog>
                           <DialogTrigger asChild>
                              <button className="rounded-full bg-white p-2">
                                 <Share2 className="size-4 text-light-color-scheme-gray-600 md:size-5" />
                              </button>
                           </DialogTrigger>
                           <DialogContent className="z-[99999]">
                              <DialogHeader>
                                 <DialogTitle>Chia sẻ cho bạn bè</DialogTitle>
                                 <DialogDescription>
                                    Bấm copy để gửi link cho bạn bè
                                 </DialogDescription>
                                 <div className="flex">
                                    <Input
                                       className="rounded-r-none focus-visible:ring-0"
                                       readOnly
                                       value={'test'}
                                    />
                                    <CopyButton
                                       className="test rounded-l-none"
                                       value="test"
                                    />
                                 </div>
                              </DialogHeader>
                           </DialogContent>
                        </Dialog>
                     </div>
                  </div>
                  <div className="flex w-full flex-col gap-2 md:gap-3">
                     <div className="">
                        <span className="text-xl font-semibold text-light-color-scheme-gray-800">
                           Tour được đề xuất
                        </span>
                     </div>
                     <div className="">
                        <span className=""></span>
                        <div className="flex flex-col gap-2 md:gap-3">
                           {location?.tours.map((tour) => (
                              <TourCard
                                 className={cn({
                                    'rounded-lg bg-light-color-scheme-gray-100':
                                       selectedTour === tour.slug,
                                 })}
                                 onClick={() => setSelectedTour(tour.slug)}
                                 key={tour.id}
                                 {...tour}
                                 locationName={location.name}
                              />
                           ))}
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         {/* Map */}
         <div className="relative col-span-8">
            <div className="absolute z-[1] h-full w-full">
               <Map
                  center={[location?.latitude!, location?.longitude!]}
                  zoom={12}
               >
                  {selectedTour && (
                     <>
                        {itineraries.map((iti) =>
                           iti.placeVisits.map((place, index) => (
                              <Marker
                                 key={place.order_number}
                                 icon={customIcon(
                                    place.order_number,
                                    iti.day_no
                                 )}
                                 position={[
                                    place.place.latitude,
                                    place.place.longitude,
                                 ]}
                              >
                                 <Popup>{place.place.name}</Popup>
                              </Marker>
                           ))
                        )}
                        {renderFlightPath()}
                        {<SetViewOnClick latlng={latlng} />}
                     </>
                  )}
               </Map>
            </div>
            {selectedTour && (
               <div className="sticky top-0 z-[2] ml-2 flex h-full w-1/3 flex-col justify-center rounded-md">
                  <TourOverview
                     selectTimeline={selectTimeline}
                     onShow={setItineraries}
                     removeSelectedTour={removeSelectedTour}
                     tourSlug={selectedTour}
                  />
               </div>
            )}
         </div>
      </div>
   )
}

function SetViewOnClick({ latlng }: { latlng?: LatLngExpression }) {
   const map = useMapEvents({})
   useEffect(() => {
      if (!latlng) return
      map.flyTo(latlng, 15)
   }, [latlng, map])

   return null
}
