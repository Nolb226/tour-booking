import { Badge } from '@/components/ui/badge'
import { Skeleton } from '@/components/ui/skeleton'
import { cn } from '@/lib/utils'
import { CalendarFold, Ellipsis, User } from 'lucide-react'
import React from 'react'

import {
   DropdownMenu,
   DropdownMenuContent,
   DropdownMenuItem,
   DropdownMenuLabel,
   DropdownMenuSeparator,
   DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'

interface ReservedTourProps extends React.HTMLAttributes<HTMLDivElement> {}

function ReservedTour({ className, ...props }: ReservedTourProps) {
   return (
      <div
         className={cn(
            'flex flex-col rounded-lg border border-light-color-scheme-gray-200 bg-white p-4 shadow-sm lg:flex-row',
            className
         )}
         {...props}
      >
         <div className="relative h-[104px] overflow-hidden rounded-md lg:aspect-square lg:max-w-[104px]">
            <img
               className="h-full w-full rounded-md object-cover"
               src="https://api.soctrip.com/storage/files/web/vn_20240912T092403262333300_3f6d1965-fe4a-4405-964a-630f80f41a2a_epthiennhientruphu021663693951.webp"
               alt=""
            />
            <Badge className="absolute bottom-0 left-0 rounded-l-none rounded-br-none lg:hidden">
               Thanh toán thành công
            </Badge>
         </div>
         <div className="mr-auto mt-2 flex w-full flex-1 flex-col gap-1 md:mt-0 md:w-full md:gap-3 lg:ml-4">
            <div className="flex flex-col gap-1">
               <p className="text-sm font-medium text-blue-600" tabIndex={0}>
                  SOCTRIP-3110070300
               </p>
               <h3
                  className="line-clamp-1 font-medium text-light-color-scheme-gray-700"
                  tabIndex={0}
               >
                  KHÁM PHÁ ĐẤT RỪNG PHƯƠNG NAM U MINH HẠ - ĐẤT MŨI CỰC NAM TỔ
                  QUỐC
               </h3>
            </div>

            <div className="flex flex-col gap-1">
               <div className="flex gap-2">
                  <CalendarFold className="size-4 text-light-color-scheme-gray-700" />
                  <span className="whitespace-nowrap text-sm text-light-color-scheme-gray-700">
                     Th 5, 21 thg 11, 2024 - Th 5, 21 thg 11, 2024 (UTC+07:00)
                  </span>
               </div>
               <div className="flex items-center justify-between">
                  <div className="flex gap-2">
                     <User className="size-4 text-light-color-scheme-gray-700" />
                     <span className="whitespace-nowrap text-sm text-light-color-scheme-gray-700">
                        2 người lớn, 1 trẻ em
                     </span>
                  </div>
                  <div className="lg:hidden">
                     <div className="mt-auto text-right">
                        <span className="text-lg font-semibold text-orange-600">
                           ₫4,474,692
                        </span>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className="flex flex-col">
            <div className="hidden items-center gap-1 lg:flex">
               <Badge className="">Thanh toán thành công</Badge>
               <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                     <Button
                        variant={'ghost'}
                        className="size-6 border border-light-color-scheme-gray-200 p-0"
                     >
                        <Ellipsis className="size-4" />
                     </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                     <DropdownMenuItem>Profile</DropdownMenuItem>
                     <DropdownMenuItem>Billing</DropdownMenuItem>
                     <DropdownMenuItem>Team</DropdownMenuItem>
                     <DropdownMenuItem>Subscription</DropdownMenuItem>
                  </DropdownMenuContent>
               </DropdownMenu>
            </div>
            <div className="mt-auto hidden text-right lg:block">
               <span className="text-lg font-semibold text-orange-600">
                  ₫4,474,692
               </span>
            </div>
         </div>
         {/* <div className=""></div> */}
      </div>
   )
}

export default ReservedTour
