'use client'
import { startVNPAY } from '@/actions/booking'
import { Button } from '@/components/ui/button'
import { ENDPOINTS } from '@/constants/endpoint'
import { getPublic } from '@/lib/api'
import { formatCurrency } from '@/lib/utils'
import { UpdateBillResponse } from '@/model/booking'
import { TourDetail } from '@/model/tour'
import {
   ArrowRight,
   Calendar,
   Check,
   CheckCircle2,
   ChevronRight,
   Ticket,
   User,
} from 'lucide-react'
import slugify from 'slugify'
import useSWR from 'swr'

interface ConfirmInformationProps {
   data: UpdateBillResponse
}

export default function ConfirmInformation({
   data: { result },
}: ConfirmInformationProps) {
   const { data: tour } = useSWR<TourDetail>(
      ENDPOINTS.TOUR.GET_TOUR_DETAILS(
         slugify(result.tour_title, {
            lower: true,
            locale: 'vi',
         })
      ),
      getPublic
   )
   return (
      <div className="">
         <div className="flex flex-col">
            <div className="fixed left-0 right-0 top-[calc(6.5rem-32px)] z-10">
               <div className="relative mx-[2%] flex h-[64px] max-w-[1200px] items-center justify-center gap-2 rounded-xl bg-white px-4 shadow-sm lg:mx-auto">
                  {/* Steps */}
                  <div className="mx-auto flex items-center justify-evenly gap-4">
                     {/* Step 1 */}
                     <div className="flex items-center gap-2">
                        <div className="flex size-8 items-center justify-center rounded-full bg-light-color-scheme-primary-50">
                           <Check
                              strokeWidth={3}
                              className="h-5 w-4 font-medium text-light-color-scheme-primary-600"
                           />
                        </div>
                        <span className="hidden whitespace-nowrap font-medium text-light-color-scheme-gray-900 lg:inline-block">
                           Lựa chọn của bạn
                        </span>
                     </div>
                     <ChevronRight className="size-6 text-light-color-scheme-gray-400" />
                     {/* Step 2 */}
                     <div className="flex items-center gap-2">
                        <span className="relative flex size-4 items-center justify-center rounded-full border border-light-color-scheme-gray-300">
                           <span className="absolute inline-flex size-7 rounded-full bg-light-color-scheme-primary-50"></span>
                           <span className="absolute inline-flex size-5 rounded-full bg-light-color-scheme-primary-100"></span>
                           <span className="relative inline-flex size-2.5 rounded-full bg-light-color-scheme-primary-600"></span>
                        </span>
                        <span className="whitespace-nowrap font-medium text-light-color-scheme-primary-600">
                           Thông tin của bạn
                        </span>
                     </div>
                     <ChevronRight className="size-6 text-light-color-scheme-gray-400" />
                     {/* Step 3 */}
                     <div className="flex items-center gap-2">
                        <div className="flex size-8 items-center justify-center rounded-full bg-light-color-scheme-gray-100 font-medium text-light-color-scheme-gray-700">
                           3
                        </div>
                        <span className="hidden whitespace-nowrap font-medium text-light-color-scheme-gray-900 lg:inline-block">
                           Thanh toán
                        </span>
                     </div>
                  </div>
               </div>
            </div>
            <div className="mx-auto w-full max-w-[1200px] pt-14 max-lg:px-[2%]">
               <div className="flex flex-col gap-6 lg:flex-row">
                  {/* Left */}
                  <div className="flex flex-col gap-2 lg:w-7/12">
                     <div className="flex flex-col divide-y divide-light-color-scheme-gray-200 rounded-xl border border-gray-200 bg-white shadow-xs">
                        <div className="h-[3.75rem] w-full p-4 text-xl font-semibold text-gray-900">
                           Thông tin đặt chỗ
                        </div>
                        <div className="p-4">
                           <span className="mb-2 text-sm font-medium text-gray-700">
                              Thông tin liên hệ
                           </span>
                           <div className="flex flex-col gap-0.5">
                              <p className="text-md font-semibold text-gray-900">
                                 {result.user_name}
                              </p>
                              <p className="text-sm font-normal text-light-color-scheme-gray-900">
                                 {result.phone_number}
                              </p>
                              <p className="text-sm font-normal text-light-color-scheme-gray-900">
                                 {result.email}
                              </p>
                           </div>
                        </div>
                        {result.travelers.map((traveler, index) => (
                           <>
                              {traveler.type === 'ADULT' && (
                                 <div className="p-4">
                                    <span className="mb-2 text-sm font-medium text-gray-700">
                                       Người lớn
                                    </span>
                                    <div className="flex flex-col gap-0.5">
                                       <p className="text-md font-semibold text-gray-900">
                                          {traveler.name}
                                       </p>
                                       <p className="text-sm font-normal text-light-color-scheme-gray-900">
                                          {traveler.phone_number}
                                       </p>
                                       <p className="text-sm font-normal text-light-color-scheme-gray-900">
                                          {traveler.email}
                                       </p>
                                    </div>
                                 </div>
                              )}
                           </>
                        ))}
                     </div>
                  </div>
                  {/* Right */}
                  <div className="flex flex-col gap-2 lg:w-5/12">
                     {/* Reservation Detail */}
                     <div className="flex flex-col divide-y divide-light-color-scheme-gray-200 rounded-xl border border-light-color-scheme-gray-200 bg-white shadow-xs">
                        <div className="p-4 text-lg font-semibold text-light-color-scheme-gray-900">
                           Chi tiết đặt chỗ
                        </div>
                        <div className="flex flex-col gap-3 p-4">
                           <div className="flex items-center justify-between">
                              <div className="flex gap-2 text-sm text-light-color-scheme-gray-700">
                                 <Calendar className="size-4" />
                                 <p>Ngày khởi hành</p>
                              </div>
                              <div className="text-sm font-medium text-light-color-scheme-gray-900">
                                 <span>
                                    {new Date(
                                       result.start_time
                                    ).toLocaleDateString()}
                                 </span>
                              </div>
                           </div>
                           <div className="flex items-center justify-between">
                              <div className="flex gap-2 text-sm text-light-color-scheme-gray-700">
                                 <Calendar className="size-4" />
                                 <p>Ngày kết thúc</p>
                              </div>
                              <div className="text-sm font-medium text-light-color-scheme-gray-900">
                                 <span>
                                    {new Date(
                                       new Date(result.start_time).setDate(
                                          new Date(
                                             result.start_time
                                          ).getDate() + result.total_days
                                       )
                                    ).toLocaleDateString()}
                                 </span>
                              </div>
                           </div>
                           <div className="flex items-center justify-between">
                              <div className="flex gap-2 text-sm text-light-color-scheme-gray-700">
                                 <User className="size-4" />
                                 <p>Hành khách du lịch</p>
                              </div>
                              <div className="text-sm font-medium text-light-color-scheme-gray-900">
                                 <span>{result.total_quantity} người</span>
                              </div>
                           </div>
                           <div className="flex gap-2 text-sm text-light-color-scheme-gray-700">
                              <CheckCircle2 className="size-4 text-light-color-scheme-success-500" />
                              <p>Không hủy miễn phí</p>
                           </div>
                        </div>
                        <div className="flex gap-3 p-4">
                           <div className="h-[5.75rem] w-[5.75rem] overflow-hidden rounded-lg">
                              <img
                                 src={result.avt}
                                 alt=""
                                 className="h-full w-full rounded-lg object-cover"
                              />
                           </div>
                           <div className="flex flex-1 flex-col gap-2">
                              <span className="text-base font-semibold text-gray-900">
                                 {result.tour_title}
                              </span>
                           </div>
                        </div>
                     </div>
                     {/* Price Detail */}
                     <div className="flex flex-col divide-y divide-light-color-scheme-gray-200 rounded-xl border border-light-color-scheme-gray-200 bg-white shadow-xs">
                        <div className="p-4 text-lg font-semibold text-light-color-scheme-gray-900">
                           Chi tiết giá
                        </div>
                        <div className="flex flex-col gap-4 p-4">
                           <Button
                              className="flex w-full items-center gap-1 bg-light-color-scheme-primary-50 text-sm font-semibold text-light-color-scheme-primary-600 hover:bg-light-color-scheme-primary-50"
                              variant={'secondary'}
                           >
                              <Ticket className="size-5" />
                              Chọn mã giảm giá
                           </Button>
                           <div className="flex flex-col gap-3">
                              <div className="flex items-center justify-between">
                                 <span className="text-sm font-medium text-light-color-scheme-gray-700">
                                    Người lớn ({result.adult_quantity} người
                                    lớn)
                                 </span>
                                 <span className="text-sm font-medium text-light-color-scheme-gray-700">
                                    {formatCurrency(
                                       result.adult_quantity *
                                          (tour?.price || 0)
                                    )}
                                 </span>
                              </div>
                              <div className="flex items-center justify-between">
                                 <span className="text-sm font-medium text-light-color-scheme-gray-700">
                                    Trẻ em ({result.children_quantity} trẻ em)
                                 </span>
                                 <span className="text-sm font-medium text-light-color-scheme-gray-700">
                                    {formatCurrency(
                                       result.children_quantity *
                                          (tour?.price || 0)
                                    )}
                                 </span>
                              </div>
                           </div>
                        </div>
                        <div className="flex items-center justify-between p-4">
                           <span className="font-semibold text-light-color-scheme-gray-900">
                              Tổng cộng
                           </span>
                           <span className="text-orange text-lg font-semibold text-orange-600">
                              {formatCurrency(result.total_price)}
                           </span>
                        </div>
                     </div>
                     {/* Payment Button */}
                     <Button
                        onClick={() => startVNPAY(result.bill_id)}
                        type="submit"
                        className="mt-4 flex w-full items-center gap-2 font-semibold"
                     >
                        Thanh toán
                        <ArrowRight className="size-5" />
                     </Button>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}
