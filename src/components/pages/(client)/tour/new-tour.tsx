'use client'

import Map from '@/components/map'
import {
   Accordion,
   AccordionContent,
   AccordionItem,
   AccordionTrigger,
} from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import PlaceCombobox from '@/components/ui/place-combobox'
import { ScrollArea } from '@/components/ui/scroll-area'
import {
   Select,
   SelectContent,
   SelectItem,
   SelectTrigger,
   SelectValue,
} from '@/components/ui/select'
import { Place } from '@/model/tour'
import { GripVertical, MapPinIcon, Plus, Trash2Icon } from 'lucide-react'
import { useState } from 'react'

interface NewTourProps {
   places: Place[]
}

export default function NewTour({ places }: NewTourProps) {
   return (
      <div className="h-full grid-cols-12 lg:grid">
         <div className="hidden h-full border-r border-gray-200 bg-white md:col-span-4 md:block">
            <div className="flex">
               <div className=""></div>
               <ScrollArea className="h-[850px] flex-1">
                  <div className="flex flex-col items-start gap-4 self-stretch bg-white">
                     <div className="relative h-80 self-stretch md:min-h-[395px]">
                        <div className="relative inline-flex h-64 w-full items-start gap-2.5 md:h-[314px]">
                           <img
                              alt="Tour avatar"
                              className="ng-tns-c2366410534-15 ng-star-inserted h-full w-full object-cover"
                              src="https://api.soctrip.com/storage/files/web/vn_20240203T172744092452848_00000000-0000-0000-0000-000000000000_dalat1.webp"
                           />
                        </div>
                        <div className="absolute bottom-0 left-4 right-4 md:left-6 md:right-6">
                           <div className="min-w-md flex flex-col items-start gap-3 rounded-lg border border-gray-200 bg-white p-4 md:max-w-[802px]">
                              <div className="top-6 flex w-full justify-between gap-x-2">
                                 <div className="flex items-center justify-between gap-2">
                                    <div className="flex grow items-start gap-2 overflow-hidden">
                                       <div className="rounded-full bg-orange-100 p-2.5">
                                          <MapPinIcon className="size-5 text-orange-600" />
                                       </div>
                                    </div>
                                    <div className="flex flex-col">
                                       <p className="text-xs font-medium uppercase text-gray-300">
                                          Hành trình đến
                                       </p>
                                       <p className="line-clamp-1 text-base font-medium text-gray-900">
                                          Thành phố Đà Lạt, Tỉnh Lâm Đồng, Việt
                                          Nam
                                       </p>
                                    </div>
                                 </div>
                              </div>
                              <div className="flex flex-col items-start gap-1.5 self-stretch md:max-h-[76px] md:w-full">
                                 <Input />
                              </div>
                              <div className="">
                                 <div className="flex items-center">
                                    <div className="flex items-center rounded-full bg-light-color-scheme-primary-50 px-1.5 py-1 pr-2 text-light-color-scheme-primary-600">
                                       <div className="flex size-4 items-center justify-center">
                                          <div className="size-2 rounded-full bg-light-color-scheme-primary-600"></div>
                                       </div>
                                       <span className="text-xs font-semibold">
                                          Ngày 1
                                       </span>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="w-full pb-4 md:px-4">
                        <Accordion
                           className="flex flex-col gap-4"
                           type="multiple"
                           defaultValue={['item-1', 'itinerary']}
                        >
                           <AccordionItem
                              className="rounded-lg border border-light-color-scheme-gray-200 bg-light-color-scheme-gray-50 shadow-sm"
                              value="item-1"
                           >
                              <AccordionTrigger className="px-4 text-lg font-medium text-gray-900">
                                 Tổng quát
                              </AccordionTrigger>
                              <AccordionContent className="px-4">
                                 Yes. It adheres to the WAI-ARIA design pattern.
                              </AccordionContent>
                           </AccordionItem>
                           <AccordionItem
                              className="rounded-lg border border-light-color-scheme-gray-200 bg-light-color-scheme-gray-50 shadow-sm"
                              value="itinerary"
                           >
                              <AccordionTrigger className="px-4 text-lg font-medium text-gray-900">
                                 Hành trình
                              </AccordionTrigger>
                              <AccordionContent className="px-4">
                                 <Accordion
                                    type="multiple"
                                    defaultValue={['itinerary-1']}
                                    className="flex flex-col gap-4"
                                 >
                                    <AccordionItem
                                       className="border-0 pb-1"
                                       value="itinerary-1"
                                    >
                                       <div className="flex flex-col">
                                          <div className="flex items-center gap-4">
                                             <AccordionTrigger className="text-nowrap">
                                                Ngày 1
                                             </AccordionTrigger>
                                             <Input
                                                placeholder="Thêm tiêu đề"
                                                className="h-fit text-sm"
                                             />
                                          </div>
                                          <div className="flex items-center justify-between">
                                             <span className="text-sm text-gray-700">
                                                1 địa điểm đã được thêm
                                             </span>
                                             <Button className="flex h-fit cursor-pointer items-center gap-2 bg-light-color-scheme-primary-50 px-3 py-1 text-sm font-semibold text-light-color-scheme-primary-700 hover:bg-light-color-scheme-primary-50">
                                                <Plus className="size-3.5" />{' '}
                                                <span>Thêm địa điểm</span>
                                             </Button>
                                          </div>
                                       </div>
                                       <AccordionContent className="mt-4 px-4">
                                          <div className="z-10 [clip-path:inset-(-50px_-50px)]">
                                             <div className="flex gap-2">
                                                <PlaceCombobox
                                                   places={places}
                                                />

                                                <Button
                                                   variant={'ghost'}
                                                   size={'icon'}
                                                >
                                                   <Trash2Icon className="size-4" />
                                                </Button>
                                             </div>
                                          </div>
                                       </AccordionContent>
                                    </AccordionItem>
                                 </Accordion>
                              </AccordionContent>
                           </AccordionItem>
                        </Accordion>
                     </div>
                  </div>
               </ScrollArea>
            </div>
         </div>
         <div className="col-span-8">
            <Map />
         </div>
      </div>
   )
}
