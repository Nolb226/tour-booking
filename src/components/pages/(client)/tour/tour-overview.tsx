'use client'
import useSWR from 'swr'
import { ScrollArea } from '@/components/ui/scroll-area'
import Link from 'next/link'
import { getTourDetails } from '@/service/tour'
import { formatCurrency } from '@/lib/utils'
import MapDialog from './map-dialog'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import Timeline from '@/components/Timeline'
import GalleryDialog from './gallery-dialog'
import { Skeleton } from '@/components/ui/skeleton'
import { Button } from '@/components/ui/button'
import { XIcon } from 'lucide-react'
import { Itinerary } from '@/model/tour'
import { useEffect } from 'react'

interface TourOverviewProps {
   tourSlug: string
   removeSelectedTour?: () => void
   onShow: (itineraries: Itinerary[]) => void
   selectTimeline: (lat: number, lng: number) => void
}

export default function TourOverview({
   removeSelectedTour,
   tourSlug,
   onShow,
   selectTimeline,
}: TourOverviewProps) {
   const { data: tour, isLoading } = useSWR(tourSlug, getTourDetails)

   useEffect(() => {
      if (!isLoading && tour) {
         onShow(tour.itineraries)
      }
   }, [isLoading, tour, onShow])

   if (isLoading)
      return (
         <ScrollArea className="rounded-md bg-white pb-2 shadow-sm shadow-light-color-scheme-primary-900 md:h-[calc(100vh_-_90px)]">
            <div className="flex flex-col gap-2 px-4 pt-4">
               <div className="flex w-full justify-between">
                  <div className="flex w-full flex-col gap-1">
                     <Skeleton className="h-[24px] w-3/4"></Skeleton>
                     <Skeleton className="h-[24px] w-2/3"></Skeleton>
                  </div>
                  <Button
                     variant={'ghost'}
                     onClick={removeSelectedTour}
                     size={'icon'}
                  >
                     <XIcon className="size-5" />
                  </Button>
               </div>
               <div className="aspect-[5/2] max-h-[60vh] cursor-pointer grid-cols-6 grid-rows-2 gap-0.5 overflow-hidden rounded-md md:grid">
                  <Skeleton className="col-span-3 row-span-2 overflow-hidden"></Skeleton>
                  <Skeleton className="overflow-hidden"></Skeleton>
                  <Skeleton className="overflow-hidden"></Skeleton>
                  <Skeleton className="overflow-hidden"></Skeleton>
                  <Skeleton className="overflow-hidden"></Skeleton>
                  <Skeleton className="overflow-hidden"></Skeleton>
                  <Skeleton className="overflow-hidden"></Skeleton>
                  <Skeleton className="overflow-hidden"></Skeleton>
               </div>
               <div className="-mx-4 mt-4 h-11 border-b border-light-color-scheme-gray-200 bg-light-color-scheme-gray-100 p-2"></div>
               <div className="mt-4">
                  <div className="t-rich-text flex flex-col gap-3">
                     <Skeleton className="h-5 w-1/6"></Skeleton>
                     <Skeleton className="h-5 w-2/6"></Skeleton>
                  </div>
                  <div className="mt-2 flex flex-col gap-0.5">
                     <Skeleton className="h-5 w-full"></Skeleton>
                     <Skeleton className="h-5 w-4/6"></Skeleton>
                     <Skeleton className="h-5 w-5/6"></Skeleton>
                     <Skeleton className="h-5 w-full"></Skeleton>
                     <Skeleton className="h-5 w-full"></Skeleton>
                  </div>
               </div>
               <div className="mt-2 flex flex-1 flex-col gap-3 rounded-xl border border-light-color-scheme-gray-200 bg-white p-4 shadow-xs">
                  <div className="">
                     <Skeleton className="h-6 w-1/6"></Skeleton>
                  </div>
                  <div className="flex gap-2">
                     <Skeleton className="h-6 w-4/6"></Skeleton>
                     <Skeleton className="h-6 w-4/6"></Skeleton>
                     <Skeleton className="h-6 w-4/6"></Skeleton>
                     <Skeleton className="h-6 w-4/6"></Skeleton>
                  </div>
                  <div className="flex flex-col gap-2">
                     <Skeleton className="h-24 w-full" />
                     <Skeleton className="h-24 w-full" />
                     <Skeleton className="h-24 w-full" />
                  </div>
               </div>
            </div>
         </ScrollArea>
      )
   return (
      <ScrollArea className="my-auto rounded-md bg-white pb-2 shadow-sm shadow-light-color-scheme-primary-900 md:h-[calc(100vh_-_90px)]">
         <div className="flex flex-col px-4 pt-4">
            <div className="flex w-full justify-between">
               <h3 className="text-lg font-medium text-light-color-scheme-gray-900">
                  {tour?.title}
               </h3>
               <div className="">
                  <Button
                     variant={'ghost'}
                     onClick={removeSelectedTour}
                     size={'icon'}
                  >
                     <XIcon className="size-5" />
                  </Button>
               </div>
            </div>
            <div className="grid grid-cols-4 grid-rows-3 md:hidden">
               <div className="col-span-3 row-span-3">
                  <img
                     src="https://api.soctrip.com/storage/files/web/vn_20240827T092928122821382_6b0cb9aa-5037-4d05-8fd1-94fb07e06d33_OPTION5.webp"
                     alt=""
                  />
               </div>
            </div>

            <GalleryDialog tour={tour!} />
            <div className="-mx-4 mt-4 border-b border-light-color-scheme-gray-200 bg-light-color-scheme-gray-100 p-2">
               <div className="flex justify-between gap-2">
                  <div className="flex flex-col">
                     <p className="font-semibold text-light-color-scheme-gray-900">
                        Bắt đầu từ{' '}
                     </p>
                     <Link
                        className="text-sm font-semibold text-blue-700"
                        href={`/tour/${tourSlug}`}
                     >
                        Xem chi tiết
                     </Link>
                  </div>
                  <div className="flex flex-col">
                     <p className="text-2xl font-semibold text-light-color-scheme-orange-600">
                        {formatCurrency(tour?.price!)}
                     </p>
                  </div>
               </div>
            </div>
            <div className="mt-4">
               <p className="font-semibold text-light-color-scheme-primary-700">
                  Tổng quan
               </p>
               <div className="pt-4">
                  <div className="t-rich-text flex flex-col gap-3">
                     <h4 className="font-semibold text-gray-800">
                        Điểm nổi bật
                     </h4>
                     <div
                        className="text-sm"
                        dangerouslySetInnerHTML={{ __html: tour?.highlight! }}
                     ></div>
                  </div>
               </div>
            </div>
            <div className="mt-2 flex flex-col gap-3 rounded-xl border border-light-color-scheme-gray-200 bg-white p-4 shadow-xs">
               <div className="flex items-center justify-between">
                  <h4 className="text-lg font-semibold text-light-color-scheme-gray-800">
                     Hành trình
                  </h4>
                  <div className="">
                     {/* <Button className="bg-light-color-scheme-primary-50 text-sm font-bold text-light-color-scheme-primary-700">
                              Xem trước
                              <ChevronRight className="size-5" />
                           </Button> */}
                     <MapDialog itineraries={tour?.itineraries!} />
                  </div>
               </div>
               <div className="">
                  <Tabs defaultValue="0">
                     <div className="sticky top-[108px] min-h-[61px] border-b border-light-color-scheme-gray-200 bg-white">
                        <TabsList className="">
                           <ul className="mb-1 flex gap-2 py-2 text-xs">
                              {tour?.itineraries
                                 .sort((a, b) => a.day_no - b.day_no)
                                 .map((itinerary, index) => (
                                    <li key={index}>
                                       <TabsTrigger value={index.toString()}>
                                          Ngày {itinerary.day_no}
                                       </TabsTrigger>
                                    </li>
                                 ))}
                           </ul>
                        </TabsList>
                     </div>
                     <div className="pt-4">
                        {tour?.itineraries.map((itinerary, index) => (
                           <TabsContent key={index} value={index.toString()}>
                              <p className="mb-3 text-sm font-semibold text-light-color-scheme-gray-500">
                                 {itinerary.title}
                              </p>
                              {itinerary.placeVisits
                                 .sort(
                                    (a, b) => a.order_number - b.order_number
                                 )
                                 .map((visit, index) => (
                                    <Timeline
                                       onClick={() =>
                                          selectTimeline(
                                             visit.place.latitude,
                                             visit.place.longitude
                                          )
                                       }
                                       className="cursor-pointer hover:bg-light-color-scheme-gray-100"
                                       key={visit.place.id}
                                       place={visit}
                                    />
                                 ))}
                           </TabsContent>
                        ))}
                     </div>
                  </Tabs>
               </div>
            </div>
         </div>
      </ScrollArea>
   )
}
