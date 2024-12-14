'use client'
import { DayPicker } from '@/components/day-picker'
import Timeline from '@/components/Timeline'
import { Button } from '@/components/ui/button'
import { HoverCardContent } from '@/components/ui/hover-card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import useMediaQuery from '@/hooks/useMediaQuery'
import { formatCurrency } from '@/lib/utils'
import { TourDetail } from '@/model/tour'
import { HoverCard, HoverCardTrigger } from '@/components/ui/hover-card'
import {
   CheckIcon,
   ChevronLeft,
   Clock4Icon,
   Info,
   LanguagesIcon,
   MapPin,
   XIcon,
} from 'lucide-react'
import React, { useState } from 'react'

import GalleryDialog from './gallery-dialog'
import MapDialog from './map-dialog'
import Counter from '@/components/counter'
import { format } from 'date-fns'
import { bookingTour } from '@/actions/booking'

function TourDetails({ tour }: { tour: TourDetail }) {
   const [date, setDate] = useState<Date>()
   const isDesktop = useMediaQuery('(min-width: 768px)')
   const [adults, setAdults] = useState(1)
   const [children, setChildren] = useState(0)
   return (
      <div className="h-full bg-[#f5faff]">
         <div className="sticky top-[64px] z-[5] h-[44px] rounded-b-3xl border-t border-t-light-color-scheme-gray-200 bg-white shadow-sm"></div>
         <div className="container mx-auto flex flex-col gap-3 pt-10 md:gap-4">
            <div className="rounded-xl border border-light-color-scheme-gray-300 bg-white p-4 md:p-2">
               <div className="flex flex-col-reverse gap-1 lg:flex-col">
                  <div className="flex flex-col justify-between lg:flex-row">
                     <div className="flex flex-col">
                        <div className="flex items-center gap-2">
                           <ChevronLeft className="h-6 w-6 max-md:hidden" />
                           <h1 className="line-clamp-2 text-lg font-semibold text-gray-900 md:line-clamp-1 lg:text-2xl">
                              {tour.title}
                           </h1>
                        </div>
                        <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
                           <div className="flex items-center gap-2 text-gray-500 max-md:text-sm">
                              <MapPin className="size-3.5 lg:size-4" />
                              <p>Thành phố Phú Quốc</p>
                           </div>
                           <span className="size-1.5 rounded-full bg-gray-500 max-md:hidden"></span>
                           <div className="flex items-center gap-2 text-gray-500 max-md:text-sm">
                              <LanguagesIcon className="size-3.5 lg:size-4" />
                              <p>Tiếng Việt</p>
                           </div>
                           <span className="size-1.5 rounded-full bg-gray-500 max-md:hidden"></span>
                           <div className="flex items-center gap-2 text-gray-500 max-md:text-sm">
                              <Clock4Icon className="size-3.5 lg:size-4" />
                              <p>1 ngày</p>
                           </div>
                        </div>
                     </div>
                     <div className="flex flex-col gap-3">
                        <div className="flex flex-col max-md:items-end">
                           <div className="flex items-center gap-2.5">
                              {/* <span className="text-lg text-gray-400">Từ</span>{' '}
                              <s className="text-lg text-gray-400 max-md:text-sm">
                                 300.000đ
                              </s> */}
                              <span className="line-clamp-2 text-2xl font-semibold text-orange-600 max-md:text-xl md:line-clamp-1">
                                 {formatCurrency(tour.price)}
                              </span>
                              <span className="text-nowrap text-lg text-gray-400">
                                 mỗi người lớn
                              </span>
                           </div>
                           <div className="text-nowrap text-right text-base text-gray-400">
                              Bao gồm cả thuế và phí
                           </div>
                        </div>
                        <div className="flex justify-end gap-3">
                           <Button className="font-semibold">
                              Chọn tùy chọn
                           </Button>
                        </div>
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

                  <GalleryDialog tour={tour} />
               </div>
            </div>
            <div className="flex">
               <div className="flex w-full flex-col gap-3 md:w-2/3 md:gap-4">
                  <div className="flex flex-col gap-3 rounded-xl border border-light-color-scheme-gray-200 bg-white p-4 shadow-xs">
                     <h4 className="text-lg font-semibold text-light-color-scheme-gray-800">
                        Điểm nổi bật
                     </h4>
                     <div
                        dangerouslySetInnerHTML={{ __html: tour.highlight }}
                        className="text-left text-sm"
                     ></div>
                  </div>
                  {/* Service */}
                  <div className="rounded-xl border border-light-color-scheme-gray-200 bg-white p-4 px-4 py-3 shadow-xs md:py-4">
                     <h4 className="text-lg font-semibold text-gray-900">
                        Dịch vụ
                     </h4>
                     <div className="flex flex-col gap-2 pt-3">
                        <span className="text-sm font-bold">Bao gồm</span>
                        <div className="flex flex-wrap content-start items-start gap-3 self-stretch">
                           <div className="flex w-[45%] items-start gap-2 md:w-[32%]">
                              <CheckIcon className="size-5 text-light-color-scheme-success-600" />
                              <div className="flex-[1_0_0] text-sm">
                                 Vé máy bay khứ hồi Vietjet Air bao gồm 7kg hành
                                 lý ký xách tay + 20kg hành lý ký gửi, thuế và
                                 phí sân bay.
                              </div>
                           </div>
                           <div className="flex w-[45%] items-start gap-2 md:w-[32%]">
                              <CheckIcon className="size-5 text-light-color-scheme-success-600" />
                              <div className="flex-[1_0_0] text-sm">
                                 Vé máy bay khứ hồi Vietjet Air bao gồm 7kg hành
                                 lý ký xách tay + 20kg hành lý ký gửi, thuế và
                                 phí sân bay.
                              </div>
                           </div>
                        </div>
                     </div>

                     <div className="flex flex-col gap-2 pt-3">
                        <span className="text-sm font-bold">Bao gồm</span>
                        <div className="flex flex-wrap content-start items-start gap-3 self-stretch">
                           <div className="flex w-[45%] items-start gap-2 md:w-[32%]">
                              <XIcon className="size-5 text-light-color-scheme-error-600" />
                              <div className="flex-[1_0_0] text-sm">
                                 Vé máy bay khứ hồi Vietjet Air bao gồm 7kg hành
                                 lý ký xách tay + 20kg hành lý ký gửi, thuế và
                                 phí sân bay.
                              </div>
                           </div>
                           <div className="flex w-[45%] items-start gap-2 md:w-[32%]">
                              <XIcon className="size-5 text-light-color-scheme-error-600" />
                              <div className="flex-[1_0_0] text-sm">
                                 Vé máy bay khứ hồi Vietjet Air bao gồm 7kg hành
                                 lý ký xách tay + 20kg hành lý ký gửi, thuế và
                                 phí sân bay.
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  {!isDesktop && (
                     <div className="flex flex-col rounded-xl border border-light-color-scheme-gray-200 bg-white p-4 shadow-xs">
                        <div className="flex flex-col">
                           <div className="flex justify-between">
                              <h4 className="text-base font-semibold text-light-color-scheme-gray-800">
                                 Chọn ngày
                              </h4>
                              <DayPicker date={date} setDate={setDate} />
                           </div>

                           <div className="">
                              <h4 className="text-base font-semibold text-light-color-scheme-gray-800">
                                 Hành khách
                              </h4>
                              <p className="text-xs font-normal text-light-color-scheme-gray-800">
                                 Chỉ định số lượng hành khách cho chuyến đi của
                                 bạn
                              </p>
                              <div className="mt-3 flex items-center justify-between">
                                 <div className="text-sm font-medium text-light-color-scheme-gray-800">
                                    Người lớn
                                 </div>
                                 <Counter
                                    minimum={1}
                                    maximum={8}
                                    defaultValue={adults}
                                    onValueChange={(value) => setAdults(value)}
                                 />
                              </div>
                              <div className="mt-3 flex items-center justify-between">
                                 <div className="flex items-center gap-2 text-sm font-medium text-light-color-scheme-gray-800">
                                    Trẻ nhỏ
                                    <HoverCard openDelay={300} closeDelay={200}>
                                       <HoverCardTrigger>
                                          <Info className="size-4" />
                                       </HoverCardTrigger>
                                       <HoverCardContent>
                                          <ul className="list-disc p-2 text-xs text-light-color-scheme-gray-700">
                                             <li>Tuổi của trẻ em dưới 10.</li>
                                             <li>
                                                Phí của trẻ em là 50% giá của
                                                người lớn
                                             </li>
                                          </ul>
                                       </HoverCardContent>
                                    </HoverCard>
                                 </div>
                                 <Counter
                                    maximum={8}
                                    defaultValue={adults}
                                    onValueChange={(value) =>
                                       setChildren(value)
                                    }
                                 />
                              </div>
                           </div>
                        </div>
                     </div>
                  )}
                  <div className="flex flex-col gap-3 rounded-xl border border-light-color-scheme-gray-200 bg-white p-4 shadow-xs">
                     <div className="flex items-center justify-between">
                        <h4 className="text-lg font-semibold text-light-color-scheme-gray-800">
                           Hành trình
                        </h4>
                        <div className="">
                           <MapDialog
                              centerPoint={[
                                 tour.location?.latitude!,
                                 tour.location?.longitude!,
                              ]}
                              itineraries={tour.itineraries}
                           />
                        </div>
                     </div>
                     <div className="">
                        <Tabs defaultValue="all">
                           <div className="sticky top-[108px] min-h-[61px] border-b border-light-color-scheme-gray-200 bg-white">
                              <TabsList className="">
                                 <ul className="mb-1 flex gap-2 py-2 text-xs">
                                    <li>
                                       <TabsTrigger value="all">
                                          Tất cả các ngày
                                       </TabsTrigger>
                                    </li>
                                    {tour.itineraries
                                       .sort((a, b) => a.day_no - b.day_no)
                                       .map((itinerary, index) => (
                                          <li key={index}>
                                             <TabsTrigger
                                                value={index.toString()}
                                             >
                                                Ngày {itinerary.day_no}
                                             </TabsTrigger>
                                          </li>
                                       ))}
                                 </ul>
                              </TabsList>
                           </div>
                           <div className="pt-4">
                              <TabsContent value="all">
                                 {tour.itineraries.map((itinerary, index) => (
                                    <div
                                       key={`iti-${itinerary.title}/${index}`}
                                    >
                                       <p className="mb-3 text-sm font-semibold text-light-color-scheme-gray-500">
                                          {itinerary.title}
                                       </p>
                                       {itinerary.placeVisits
                                          .sort(
                                             (a, b) =>
                                                a.order_number - b.order_number
                                          )
                                          .map((visit, index) => (
                                             <Timeline
                                                key={visit.place.id}
                                                place={visit}
                                             />
                                          ))}
                                    </div>
                                 ))}
                              </TabsContent>
                              {tour.itineraries.map((itinerary, index) => (
                                 <TabsContent
                                    key={index}
                                    value={index.toString()}
                                 >
                                    <p className="mb-3 text-sm font-semibold text-light-color-scheme-gray-500">
                                       {itinerary.title}
                                    </p>
                                    {itinerary.placeVisits
                                       .sort(
                                          (a, b) =>
                                             a.order_number - b.order_number
                                       )
                                       .map((visit, index) => (
                                          <Timeline
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
                  <div className="flex flex-col rounded-xl border border-light-color-scheme-gray-200 bg-white p-4 shadow-xs">
                     <h4 className="text-lg font-semibold text-light-color-scheme-gray-800">
                        Chính sách
                     </h4>
                     <div className="prose px-3 py-3.5 text-sm text-light-color-scheme-gray-700">
                        <div
                           className="prose-sm"
                           dangerouslySetInnerHTML={{ __html: tour.policy }}
                        ></div>
                     </div>
                  </div>
               </div>
               {/* Left Form */}
               <div className="top-[120px] h-fit flex-grow max-md:hidden md:sticky">
                  <div className="ml-4 flex flex-col gap-4">
                     <div className="flex items-center justify-between rounded-xl border border-light-color-scheme-gray-200 bg-white p-4 shadow-xs">
                        <h4 className="text-lg font-semibold text-light-color-scheme-gray-800">
                           Chọn ngày
                        </h4>
                        <DayPicker date={date} setDate={setDate} />
                     </div>

                     <div className="flex flex-col rounded-xl border border-light-color-scheme-gray-200 bg-white p-4 shadow-xs">
                        <h4 className="text-lg font-semibold text-light-color-scheme-gray-800">
                           Hành khách
                        </h4>
                        <p className="text-xs font-normal text-light-color-scheme-gray-800">
                           Chỉ định số lượng hành khách cho chuyến đi của bạn
                        </p>
                        <div className="mt-3 flex items-center justify-between">
                           <div className="text-sm font-medium text-light-color-scheme-gray-800">
                              Người lớn
                           </div>
                           <Counter
                              defaultValue={adults}
                              onValueChange={setAdults}
                              maximum={8}
                              minimum={1}
                           />
                        </div>
                        <div className="mt-3 flex items-center justify-between">
                           <div className="flex items-center gap-2 text-sm font-medium text-light-color-scheme-gray-800">
                              Trẻ nhỏ
                              <HoverCard openDelay={300} closeDelay={200}>
                                 <HoverCardTrigger>
                                    <Info className="size-4" />
                                 </HoverCardTrigger>
                                 <HoverCardContent>
                                    <ul className="list-disc p-2 text-xs text-light-color-scheme-gray-700">
                                       <li>Tuổi của trẻ em dưới 10.</li>
                                       <li>
                                          Phí của trẻ em là 50% giá của người
                                          lớn
                                       </li>
                                    </ul>
                                 </HoverCardContent>
                              </HoverCard>
                           </div>
                           <Counter
                              defaultValue={children}
                              onValueChange={setChildren}
                              maximum={8}
                           />
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className="fixed bottom-0 z-10 w-full border-t border-gray-200 bg-white shadow-sm md:rounded-tl-xl md:rounded-tr-xl">
            <div className="mx-auto flex items-center justify-between p-4 md:w-[1200px] md:px-0">
               <div className="flex flex-col gap-1 md:gap-0">
                  <div className="flex flex-col gap-1 md:flex-row md:items-center md:gap-2">
                     <h4 className="font-semibold text-gray-900 md:text-lg">
                        Tổng thanh toán:
                     </h4>
                     <div className="text-xl font-bold text-orange-600 md:text-[24px]">
                        {formatCurrency(
                           tour.price * adults + tour.price * 0.1 * children
                        )}
                     </div>
                  </div>
                  <span className="text-start text-sm font-medium text-gray-700">
                     Bao gồm thuế và phí
                  </span>
               </div>
               <Button
                  onClick={() => {
                     bookingTour({
                        tourId: tour.id,

                        startTime: format(date!, 'yyyy-MM-dd'),
                        numberOfAdults: adults,
                        numberOfChildren: children,
                     })
                  }}
                  variant={'highlight'}
                  className="w-full md:w-auto"
               >
                  Đặt ngay
               </Button>
            </div>
         </div>
      </div>
   )
}

export default TourDetails
