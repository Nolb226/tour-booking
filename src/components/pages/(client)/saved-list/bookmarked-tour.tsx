'use client'
import { bookmarkTourAction } from '@/actions/tour'
import {
   DropdownMenu,
   DropdownMenuContent,
   DropdownMenuItem,
   DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { cn, formatDayPast } from '@/lib/utils'
import { BookmarkedTour as TBookmarkedTour } from '@/model/tour'
import {
   BookMarkedIcon,
   BookmarkMinusIcon,
   EllipsisVerticalIcon,
   MapPinCheckInsideIcon,
} from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { memo, useMemo } from 'react'

interface BookmarkedTourProps extends React.HTMLAttributes<HTMLDivElement> {
   tour: TBookmarkedTour
}

function BookmarkedTour({ className, tour }: BookmarkedTourProps) {
   const router = useRouter()

   return (
      <div
         className={cn(
            'flex justify-between rounded-lg bg-white p-4 shadow-sm',
            className
         )}
      >
         <div className="flex gap-4">
            <div className="relative size-16">
               <img
                  className="h-full w-full rounded-md"
                  src={tour.avt}
                  alt=""
               />
               <div className="- absolute -bottom-1.5 -right-2.5 flex size-7 items-center justify-center rounded-full bg-yellow-400">
                  <BookMarkedIcon className="size-4 text-gray-50" />
               </div>
            </div>
            <div className="flex flex-col gap-1">
               <h3 className="line-clamp-1 text-base font-medium text-light-color-scheme-gray-900">
                  {tour.title}
               </h3>
               <div className="text-sm text-light-color-scheme-gray-600">
                  <div className="flex items-center gap-1">
                     <span>{tour.location}</span>
                     <div className="size-1 rounded-full bg-gray-500" />
                     <span>
                        Đã lưu {formatDayPast(tour.createdAt).toLowerCase()}
                     </span>
                  </div>
               </div>
            </div>
         </div>
         <div className="">
            <DropdownMenu>
               <DropdownMenuTrigger>
                  <EllipsisVerticalIcon className="size-4" />
               </DropdownMenuTrigger>
               <DropdownMenuContent className="text-light-color-scheme-gray-500">
                  <DropdownMenuItem
                     asChild
                     className="flex items-center gap-1 px-4"
                  >
                     <Link target="_blank" href={`/tour/${tour.slug}`}>
                        <MapPinCheckInsideIcon className="size-4" />
                        <span className="text-sm font-semibold">Đặt ngay</span>
                     </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem
                     onClick={() => {
                        bookmarkTourAction(tour.id)
                        router.refresh()
                     }}
                     className="flex items-center gap-1 px-4"
                  >
                     <BookmarkMinusIcon className="size-4" />
                     <span className="text-sm font-semibold">Bỏ lưu</span>
                  </DropdownMenuItem>
               </DropdownMenuContent>
            </DropdownMenu>
         </div>
      </div>
   )
}

export default memo(BookmarkedTour)
