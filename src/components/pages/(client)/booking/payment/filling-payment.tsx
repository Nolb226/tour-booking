'use client'

import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Textarea } from '@/components/ui/textarea'
import { ENDPOINTS } from '@/constants/endpoint'
import { DraftDetailResponse } from '@/model/booking'
import slugify from 'slugify'
import {
   ArrowRight,
   Calendar,
   Check,
   CheckCircle2,
   ChevronRight,
   Clock4,
   MapPin,
   Plus,
   Ticket,
   User,
} from 'lucide-react'
import useSWR from 'swr'
import { getPublic } from '@/lib/api'
import { TourDetail } from '@/model/tour'
import { formatCurrency } from '@/lib/utils'
import InformationForm from './information-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { useFieldArray, useForm } from 'react-hook-form'
import {
   Form,
   FormControl,
   FormField,
   FormItem,
   FormLabel,
   FormMessage,
} from '@/components/ui/form'
import { z } from 'zod'
import { BookingFormSchema } from '@/lib/validations/booking'
import { useFormState } from 'react-dom'
import { startPayment } from '@/actions/booking'

interface FillingPaymentProps {
   data: DraftDetailResponse
   bill_id: string
}

type Traveler =
   | {
        name: string
        email: string
        phone_number: string
        label: string
        type: 'ADULT'
     }
   | {
        label: string
        fullname: string
        type: 'CHILD'
     }

export default function FillingPayment({
   data: { result },
   bill_id,
}: FillingPaymentProps) {
   const { data: tour } = useSWR<TourDetail>(
      ENDPOINTS.TOUR.GET_TOUR_DETAILS(
         slugify(result.tour_title, {
            lower: true,
            locale: 'vi',
         })
      ),
      getPublic
   )
   const [checked, setChecked] = useState<boolean>(false)
   const form = useForm<z.infer<typeof BookingFormSchema>>({
      resolver: zodResolver(BookingFormSchema),
      defaultValues: {
         bill_id: bill_id,
         user_name: '',
         email: '',
         tour_id: result.tour_id,
         phone_number: '',
         travelers: [
            {
               name: '',
               email: '',
               phone_number: '',
               type: 'ADULT',
            },
         ],
      },
   })
   const { fields, append, update } = useFieldArray({
      control: form.control,
      name: 'travelers',
   })
   console.log(form.formState.errors)

   return (
      <>
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

               <Form {...form}>
                  <form
                     onSubmit={form.handleSubmit((data) => {
                        startPayment({ ...data, promotion_code: null })
                     })}
                     className="mx-auto w-full max-w-[1200px] pt-14 max-lg:px-[2%]"
                  >
                     <div className="flex flex-col gap-6 lg:flex-row">
                        {/* Left */}
                        <div className="flex flex-col gap-2 lg:w-7/12">
                           {/* Tour info */}
                           <div className="flex gap-3 rounded-xl border border-light-color-scheme-gray-200 bg-white p-4 shadow-xs">
                              <input
                                 {...form.register('tour_id')}
                                 type="hidden"
                                 name="tour_id"
                                 value={result.tour_id}
                              />
                              <input
                                 {...form.register('bill_id')}
                                 type="hidden"
                                 value={bill_id}
                              />
                              <div className="size-34 flex-shrink-0 overflow-hidden rounded-lg">
                                 <img
                                    className="size-full object-cover"
                                    src={result.avt}
                                    alt=""
                                 />
                              </div>
                              <div className="flex flex-col gap-3">
                                 <div className="flex flex-col gap-1">
                                    <p className="text-2xl font-semibold text-light-color-scheme-gray-900">
                                       {result.tour_title}
                                    </p>
                                    <div className="flex items-center gap-1 text-sm text-light-color-scheme-gray-500">
                                       <MapPin className="size-4" />
                                       <p>{result.location}</p>
                                    </div>
                                 </div>
                                 <div className="flex justify-between">
                                    <div className="">
                                       <div className="flex items-center gap-1 font-semibold text-light-color-scheme-gray-500">
                                          <Clock4 className="size-4" />
                                          <p>{result.total_days} ngày</p>
                                       </div>
                                    </div>
                                    <div className="whitespace-nowrap text-lg font-semibold text-light-color-scheme-primary-700">
                                       {formatCurrency(tour?.price || 0)}
                                    </div>
                                 </div>
                              </div>
                           </div>
                           {/* Contact Info */}
                           <div className="flex flex-col divide-y divide-light-color-scheme-gray-200 rounded-xl border border-light-color-scheme-primary-600 bg-white pb-6 shadow-xs">
                              <div className="p-4">
                                 <p className="text-lg font-semibold text-light-color-scheme-gray-900">
                                    Thông tin liên hệ
                                 </p>
                                 <span className="text-sm text-light-color-scheme-gray-700">
                                    Tên của bạn phải trùng khớp với ID hợp lệ và
                                    sẽ được sử dụng cho thanh toán
                                 </span>
                              </div>
                              <div className="px-4 pt-4">
                                 <div className="">
                                    <FormField
                                       name={`user_name`}
                                       control={form.control}
                                       render={({ field }) => (
                                          <FormItem className="">
                                             <FormLabel>
                                                <p className="mb-1 text-sm text-light-color-scheme-gray-700">
                                                   Họ và tên đầy đủ
                                                   <span className="ml-1 text-light-color-scheme-error-600">
                                                      *
                                                   </span>
                                                </p>
                                             </FormLabel>
                                             <Input
                                                className="transition-all duration-200 ease-in hover:ring-4 hover:ring-light-color-scheme-primary-300"
                                                placeholder="Nhập họ và tên đầy đủ"
                                                {...field}
                                             />
                                             <FormMessage />
                                          </FormItem>
                                       )}
                                    />
                                 </div>
                                 <div className="mt-4 flex items-center gap-4">
                                    <FormField
                                       name={`email`}
                                       control={form.control}
                                       render={({ field }) => (
                                          <FormItem className="w-6/12">
                                             <FormLabel>
                                                <p className="mb-1 text-sm text-light-color-scheme-gray-700">
                                                   Email
                                                   <span className="ml-1 text-light-color-scheme-error-600">
                                                      *
                                                   </span>
                                                </p>
                                             </FormLabel>
                                             <Input
                                                {...field}
                                                className="transition-all duration-200 ease-in hover:ring-4 hover:ring-light-color-scheme-primary-300"
                                                type="email"
                                                placeholder="Nhập email"
                                             />
                                             <FormMessage />
                                          </FormItem>
                                       )}
                                    />
                                    <FormField
                                       name={`phone_number`}
                                       control={form.control}
                                       render={({ field }) => (
                                          <FormItem className="w-6/12">
                                             <FormLabel>
                                                <p className="mb-1 text-sm text-light-color-scheme-gray-700">
                                                   Số điện thoại
                                                   <span className="ml-1 text-light-color-scheme-error-600">
                                                      *
                                                   </span>
                                                </p>
                                             </FormLabel>
                                             <FormControl>
                                                <Input
                                                   {...field}
                                                   className="transition-all duration-200 ease-in hover:ring-4 hover:ring-light-color-scheme-primary-300"
                                                   placeholder="Nhập số điện thoại"
                                                />
                                             </FormControl>
                                             <FormMessage />
                                          </FormItem>
                                       )}
                                    />
                                 </div>
                              </div>
                           </div>
                           {/* Travelers Listing */}
                           <div className="flex flex-col divide-y divide-light-color-scheme-gray-200 rounded-xl border border-light-color-scheme-gray-200 bg-white shadow-xs">
                              <div className="p-4">
                                 <p className="text-lg font-semibold text-light-color-scheme-gray-900">
                                    Thông tin của hành khách du lịch
                                 </p>
                                 <span className="text-sm text-light-color-scheme-gray-700">
                                    Tên của bạn phải trùng khớp với ID hợp lệ và
                                    sẽ được sử dụng khi khởi hành.
                                 </span>
                              </div>
                              <div className="flex flex-col gap-2 px-4 pb-6 pt-4">
                                 {/* <div className="rounded-lg bg-light-color-scheme-gray-50 p-2">
                                    <div className="mb-4 flex items-center justify-between">
                                       <span className="font-medium text-light-color-scheme-gray-900">
                                          Người lớn 1
                                       </span>
                                    </div>
                                    <div className="">
                                       <div className="">
                                          <Label htmlFor="fullname">
                                             <p className="mb-1 text-sm text-light-color-scheme-gray-700">
                                                Họ và tên đầy đủ
                                                <span className="ml-1 text-light-color-scheme-error-600">
                                                   *
                                                </span>
                                             </p>
                                             <Input
                                                id="fullname"
                                                className="transition-all duration-200 ease-in hover:ring-4 hover:ring-light-color-scheme-primary-300"
                                                name="fullname"
                                                type="text"
                                                placeholder="Nhập họ và tên đầy đủ"
                                             />
                                          </Label>
                                       </div>
                                       <div className="mt-4 flex items-center gap-4">
                                          <Label
                                             htmlFor="email"
                                             className="w-6/12"
                                          >
                                             <p className="mb-1 text-sm text-light-color-scheme-gray-700">
                                                Email
                                                <span className="ml-1 text-light-color-scheme-error-600">
                                                   *
                                                </span>
                                             </p>
                                             <Input
                                                id="email"
                                                className="transition-all duration-200 ease-in hover:ring-4 hover:ring-light-color-scheme-primary-300"
                                                name="email"
                                                type="email"
                                                placeholder="Nhập email"
                                             />
                                          </Label>
                                          <Label
                                             htmlFor="phone"
                                             className="w-6/12"
                                          >
                                             <p className="mb-1 text-sm text-light-color-scheme-gray-700">
                                                Số điện thoại
                                                <span className="ml-1 text-light-color-scheme-error-600">
                                                   *
                                                </span>
                                             </p>
                                             <Input
                                                id="phone"
                                                className="transition-all duration-200 ease-in hover:ring-4 hover:ring-light-color-scheme-primary-300"
                                                name="phone"
                                                type="number"
                                                placeholder="Nhập số điện thoại"
                                             />
                                          </Label>
                                       </div>
                                    </div>
                                 </div> */}
                                 {fields.map((item, index) => {
                                    return (
                                       <div
                                          key={item.id}
                                          className="rounded-lg bg-light-color-scheme-gray-50 p-2"
                                       >
                                          <div className="mb-4 flex items-center justify-between">
                                             <span className="font-medium text-light-color-scheme-gray-900">
                                                Người lớn {index + 1}
                                             </span>
                                             {index === 0 && (
                                                <Label
                                                   htmlFor="same"
                                                   className="flex items-center gap-1"
                                                >
                                                   <Checkbox
                                                      defaultChecked={checked}
                                                      onCheckedChange={() => {
                                                         setChecked(
                                                            () => !checked
                                                         )
                                                         !checked &&
                                                            update(0, {
                                                               email: form.getValues(
                                                                  'email'
                                                               ),
                                                               phone_number:
                                                                  form.getValues(
                                                                     'phone_number'
                                                                  ),
                                                               name: form.getValues(
                                                                  'user_name'
                                                               ),
                                                               type: 'ADULT',
                                                            })
                                                      }}
                                                      id="same"
                                                      className="size-5"
                                                   />
                                                   <span className="text-sm font-medium text-light-color-scheme-gray-700">
                                                      Sử dụng thông tin liên hệ
                                                      giống như trên
                                                   </span>
                                                </Label>
                                             )}
                                          </div>
                                          <div className="">
                                             <FormField
                                                name={`travelers.${index}.name`}
                                                control={form.control}
                                                render={({ field }) => (
                                                   <FormItem className="">
                                                      <FormLabel>
                                                         <p className="mb-1 text-sm text-light-color-scheme-gray-700">
                                                            Họ và tên đầy đủ
                                                            <span className="ml-1 text-light-color-scheme-error-600">
                                                               *
                                                            </span>
                                                         </p>
                                                      </FormLabel>
                                                      <Input
                                                         className="transition-all duration-200 ease-in hover:ring-4 hover:ring-light-color-scheme-primary-300"
                                                         placeholder="Nhập họ và tên đầy đủ"
                                                         {...field}
                                                      />
                                                      <FormMessage />
                                                   </FormItem>
                                                )}
                                             />
                                             <div className="mt-4 flex items-center gap-4">
                                                <FormField
                                                   name={`travelers.${index}.email`}
                                                   control={form.control}
                                                   render={({ field }) => (
                                                      <FormItem className="w-6/12">
                                                         <FormLabel>
                                                            <p className="mb-1 text-sm text-light-color-scheme-gray-700">
                                                               Email
                                                               <span className="ml-1 text-light-color-scheme-error-600">
                                                                  *
                                                               </span>
                                                            </p>
                                                         </FormLabel>
                                                         <Input
                                                            {...field}
                                                            className="transition-all duration-200 ease-in hover:ring-4 hover:ring-light-color-scheme-primary-300"
                                                            type="email"
                                                            placeholder="Nhập email"
                                                         />
                                                         <FormMessage />
                                                      </FormItem>
                                                   )}
                                                />
                                                <FormField
                                                   name={`travelers.${index}.phone_number`}
                                                   control={form.control}
                                                   render={({ field }) => (
                                                      <FormItem className="w-6/12">
                                                         <FormLabel htmlFor="phone">
                                                            <p className="mb-1 text-sm text-light-color-scheme-gray-700">
                                                               Số điện thoại
                                                               <span className="ml-1 text-light-color-scheme-error-600">
                                                                  *
                                                               </span>
                                                            </p>
                                                         </FormLabel>
                                                         <FormControl>
                                                            <Input
                                                               {...field}
                                                               className="transition-all duration-200 ease-in hover:ring-4 hover:ring-light-color-scheme-primary-300"
                                                               placeholder="Nhập số điện thoại"
                                                            />
                                                         </FormControl>
                                                         <FormMessage />
                                                      </FormItem>
                                                   )}
                                                />
                                             </div>
                                          </div>
                                       </div>
                                    )
                                 })}
                                 {/* {childrenTravelers.map((traveler, index) => (
                                     <InformationForm
                                        key={index}
                                        traveler={{
                                           ...traveler,
                                           label: `Trẻ em ${index + 1}`,
                                        }}
                                     />
                                  ))} */}
                                 {/* <InformationForm /> */}
                                 <div className="flex items-center">
                                    <div className="w-1/2">
                                       <Button
                                          //    disabled={
                                          //       result.adult_quantity - 1 ===
                                          //       adultTravelers.length
                                          //    }
                                          type="button"
                                          onClick={() =>
                                             append({
                                                name: '',
                                                email: '',
                                                phone_number: '',
                                                type: 'ADULT',
                                             })
                                          }
                                          //    onClick={addAdultTraveler}
                                          className="flex h-fit items-center gap-1 px-2 py-1 text-light-color-scheme-primary-500 hover:bg-light-color-scheme-primary-50 disabled:text-light-color-scheme-gray-600"
                                          variant="ghost"
                                       >
                                          <Plus className="size-4" />
                                          <p className="text-sm font-semibold">
                                             Thêm người lớn
                                          </p>
                                       </Button>
                                    </div>
                                    <div className="w-1/2">
                                       <Button
                                          //    disabled={
                                          //       result.children_quantity ===
                                          //       adultTravelers.length
                                          //    }
                                          //   onClick={() => {
                                          //      append({
                                          //         name: '',
                                          //         type: 'CHILD',
                                          //      })
                                          //   }}
                                          className="flex h-fit items-center gap-1 px-2 py-1 text-light-color-scheme-primary-500 hover:bg-light-color-scheme-primary-50 disabled:text-light-color-scheme-gray-600"
                                          variant="ghost"
                                       >
                                          <Plus className="size-4" />
                                          <p className="text-sm font-semibold">
                                             Thêm trẻ em
                                          </p>
                                       </Button>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           {/* Requests */}
                           <div className="flex flex-col divide-y divide-light-color-scheme-gray-200 rounded-xl border border-light-color-scheme-gray-200 bg-white shadow-xs">
                              <div className="p-4">
                                 <p className="text-lg font-semibold text-light-color-scheme-gray-900">
                                    Yêu cầu đặc biệt
                                 </p>
                                 <span className="text-sm text-light-color-scheme-gray-700">
                                    Yêu cầu đặc biệt tuân thủ theo sự có sẵn và
                                    không được đảm bảo. Một số yêu cầu có thể
                                    phát sinh phí bổ sung.
                                 </span>
                              </div>
                              <div className="flex flex-col gap-4 p-4">
                                 {/* Pick-up Request */}
                                 <div className="flex flex-wrap gap-3">
                                    <Checkbox className="peer/request size-5" />
                                    <Label className="text-sm font-medium text-light-color-scheme-gray-700">
                                       Vui lòng chỉ định điểm đón
                                    </Label>
                                    <div className="hidden w-full flex-auto pl-8 peer-data-[state=checked]/request:block">
                                       <RadioGroup>
                                          <div className="flex items-center space-x-3">
                                             <RadioGroupItem
                                                className="size-5"
                                                id="request-1"
                                                value="1"
                                             />
                                             <Label
                                                htmlFor="request-1"
                                                className="text-sm font-medium text-light-color-scheme-gray-700"
                                             >
                                                Vui lòng đến điểm hẹn đã chỉ
                                                định
                                             </Label>
                                          </div>
                                          <div className="flex flex-wrap items-center gap-3">
                                             <RadioGroupItem
                                                className="peer size-5"
                                                id="request-2"
                                                value="2"
                                             />
                                             <Label
                                                htmlFor="request-2"
                                                className="text-sm font-medium text-light-color-scheme-gray-700"
                                             >
                                                Chọn điểm đón
                                             </Label>
                                             <Label
                                                className="ml-7 hidden w-full peer-data-[state=checked]:block"
                                                htmlFor="address"
                                             >
                                                <p className="mb-1 text-sm text-light-color-scheme-gray-700">
                                                   Địa chỉ
                                                   <span className="ml-1 text-light-color-scheme-error-600">
                                                      *
                                                   </span>
                                                </p>
                                                <Input
                                                   {...form.register(
                                                      'special_requirement'
                                                   )}
                                                   id="address"
                                                   className=""
                                                   placeholder="Nhập địa chỉ"
                                                />
                                             </Label>
                                          </div>
                                       </RadioGroup>
                                    </div>
                                 </div>
                                 {/* Other Requests */}
                                 <div className="flex flex-wrap gap-3">
                                    <Checkbox className="peer/others size-5" />
                                    <Label className="text-sm font-medium text-light-color-scheme-gray-700">
                                       Khác
                                    </Label>
                                    <div className="hidden w-full flex-auto pl-8 peer-data-[state=checked]/others:block">
                                       <Textarea
                                          {...form.register(
                                             'other_requirement'
                                          )}
                                          className="resize-none"
                                          placeholder="Nhập mô tả"
                                       />
                                    </div>
                                 </div>
                              </div>
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
                                             new Date(
                                                result.start_time
                                             ).setDate(
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
                                       <span>
                                          {result.total_quantity} người
                                       </span>
                                    </div>
                                 </div>
                              </div>
                              <div className="flex gap-2 p-4 text-sm text-light-color-scheme-gray-700">
                                 <CheckCircle2 className="size-4 text-light-color-scheme-success-500" />
                                 <p>Không hủy miễn phí</p>
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
                                          Người lớn ({result.adult_quantity}{' '}
                                          người lớn)
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
                                          Trẻ em ({result.children_quantity} trẻ
                                          em)
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
                                    {formatCurrency(result.price)}
                                 </span>
                              </div>
                           </div>
                           {/* Payment Button */}
                           <Button
                              type="submit"
                              className="mt-4 flex w-full items-center gap-2 font-semibold"
                           >
                              Thanh toán
                              <ArrowRight className="size-5" />
                           </Button>
                        </div>
                     </div>
                  </form>
               </Form>
            </div>
         </div>
      </>
   )
}
