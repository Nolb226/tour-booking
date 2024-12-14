import { Badge } from '@/components/ui/badge'
import { Skeleton } from '@/components/ui/skeleton'
import { cn, formatCurrency } from '@/lib/utils'
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
import { MyBooking } from '@/model/booking'

interface ReservedTourProps extends React.HTMLAttributes<HTMLDivElement> {
   bill: MyBooking
}

function ReservedTour({ bill, className, ...props }: ReservedTourProps) {
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
               src={bill.avt}
               alt=""
            />
            <Badge className="absolute bottom-0 left-0 rounded-l-none rounded-br-none lg:hidden">
               Thanh toán thành công
            </Badge>
         </div>
         <div className="mr-auto mt-2 flex w-full flex-1 flex-col gap-1 md:mt-0 md:w-full md:gap-3 lg:ml-4">
            <div className="flex flex-col gap-1">
               <p className="text-sm font-medium text-blue-600" tabIndex={0}>
                  {bill.bill_id}
               </p>
               <h3
                  className="line-clamp-1 font-medium text-light-color-scheme-gray-700"
                  tabIndex={0}
               >
                  {bill.tour_title}
               </h3>
            </div>

            <div className="flex flex-col gap-1">
               <div className="flex gap-2">
                  <CalendarFold className="size-4 text-light-color-scheme-gray-700" />
                  <span className="whitespace-nowrap text-sm text-light-color-scheme-gray-700">
                     {bill.start_days} - {bill.end_days}
                  </span>
               </div>
               <div className="flex items-center justify-between">
                  <div className="flex gap-2">
                     <User className="size-4 text-light-color-scheme-gray-700" />
                     <span className="whitespace-nowrap text-sm text-light-color-scheme-gray-700">
                        {bill.total_adult} người lớn, {bill.total_children} trẻ
                        em
                     </span>
                  </div>
                  <div className="lg:hidden">
                     <div className="mt-auto text-right">
                        <span className="text-lg font-semibold text-orange-600">
                           {formatCurrency(bill.total_price)}
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
                  {formatCurrency(bill.total_price)}
               </span>
            </div>
         </div>
         {/* <div className=""></div> */}
      </div>
   )
}

export default ReservedTour
