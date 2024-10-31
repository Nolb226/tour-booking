'use client'

import {
   Breadcrumb,
   BreadcrumbItem,
   BreadcrumbLink,
   BreadcrumbList,
   BreadcrumbPage,
   BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { Label } from '@/components/ui/label'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
import { FlagIcon, HomeIcon, Search } from 'lucide-react'
import { useState } from 'react'

export default function Page() {
   const [filter, setFilter] = useState('all')
   return (
      <div className="bg-gray-100">
         <div className="mx-auto flex min-h-screen max-w-[1200px] flex-col gap-4">
            <Breadcrumb className="pt-6">
               <BreadcrumbList>
                  <BreadcrumbItem>
                     <BreadcrumbLink href="/">
                        <HomeIcon className="size-4" />
                     </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                     <BreadcrumbPage className="text-sm font-medium text-light-color-scheme-gray-700">
                        Đặt tour của tôi
                     </BreadcrumbPage>
                  </BreadcrumbItem>
               </BreadcrumbList>
            </Breadcrumb>
            <div className="flex gap-5">
               <div className="w-1/4">
                  <div className="flex items-center gap-3 border-l-4 border-light-color-scheme-primary-600 bg-blue-50 py-1 pl-2 text-blue-700">
                     <FlagIcon className="size-3.5" />
                     <div className="text-sm font-semibold">Tour</div>
                  </div>
               </div>
               <div className="flex w-3/4 flex-col">
                  <div className="flex flex-col divide-y divide-light-color-scheme-gray-200 rounded-lg border border-light-color-scheme-gray-200 bg-white shadow-sm">
                     <div className="flex flex-col items-center gap-2 p-4 md:flex-row md:justify-between">
                        <h5 className="text-xl font-semibold text-light-color-scheme-gray-800">
                           Danh sách đặt tour của tôi
                        </h5>
                        <Label
                           htmlFor="search"
                           className="flex w-[320px] items-center space-x-2 rounded-md border border-light-color-scheme-gray-200 p-2.5 ring-light-color-scheme-primary-50 transition-all duration-200 ease-in-out has-[:focus]:border-light-color-scheme-primary-300 has-[:focus]:ring-4"
                        >
                           <Search className="size-5 text-neutral-300" />
                           <input
                              autoComplete="off"
                              id="search"
                              className="w-full border-none outline-none"
                              placeholder="Tìm kiếm bằng mã số hoặc tên"
                           />
                        </Label>
                     </div>
                     <div className="p-4">
                        <ToggleGroup
                           value={filter}
                           onValueChange={(value) => setFilter(value)}
                           className="justify-evenly gap-3 *:font-semibold *:text-light-color-scheme-gray-500"
                           type="single"
                        >
                           <ToggleGroupItem
                              className="data-[state=on]:bg-blue-50 data-[state=on]:text-blue-700"
                              value="all"
                           >
                              Tất cả
                           </ToggleGroupItem>
                           <ToggleGroupItem
                              className="data-[state=on]:bg-blue-50 data-[state=on]:text-blue-700"
                              value="waiting"
                           >
                              Đang chờ
                           </ToggleGroupItem>
                           <ToggleGroupItem
                              className="data-[state=on]:bg-blue-50 data-[state=on]:text-blue-700"
                              value="in-progress"
                           >
                              Đang tiến hành
                           </ToggleGroupItem>
                           <ToggleGroupItem
                              className="data-[state=on]:bg-blue-50 data-[state=on]:text-blue-700"
                              value="confirmed"
                           >
                              Đã xác nhận
                           </ToggleGroupItem>
                           <ToggleGroupItem
                              className="data-[state=on]:bg-blue-50 data-[state=on]:text-blue-700"
                              value="cancelled"
                           >
                              Đã hủy
                           </ToggleGroupItem>
                           <ToggleGroupItem
                              className="data-[state=on]:bg-blue-50 data-[state=on]:text-blue-700"
                              value="failed"
                           >
                              Thanh toán thất bại
                           </ToggleGroupItem>
                           <ToggleGroupItem
                              className="data-[state=on]:bg-blue-50 data-[state=on]:text-blue-700"
                              value="refunded"
                           >
                              Hoàn tiền
                           </ToggleGroupItem>
                        </ToggleGroup>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}
