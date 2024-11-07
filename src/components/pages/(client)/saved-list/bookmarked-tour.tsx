import { cn } from '@/lib/utils'
import { BookMarkedIcon, EllipsisVerticalIcon } from 'lucide-react'
import React from 'react'

interface BookmarkedTour extends React.HTMLAttributes<HTMLDivElement> {}

function BookmarkedTour({ className }: BookmarkedTour) {
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
                  src="https://api.soctrip.com/storage/files/web/vn_20240912T092403262333300_3f6d1965-fe4a-4405-964a-630f80f41a2a_epthiennhientruphu021663693951.webp"
                  alt=""
               />
               <div className="- absolute -bottom-1.5 -right-2.5 flex size-7 items-center justify-center rounded-full bg-yellow-400">
                  <BookMarkedIcon className="size-4 text-gray-50" />
               </div>
            </div>
            <div className="flex flex-col gap-1">
               <h3 className="line-clamp-1 text-base font-medium text-light-color-scheme-gray-900">
                  KHÁM PHÁ ĐẤT RỪNG PHƯƠNG NAM U MINH HẠ - ĐẤT MŨI CỰC NAM TỔ
                  QUỐC
               </h3>
               <div className="text-sm text-light-color-scheme-gray-600">
                  Đã lưu 7 giờ trước
               </div>
            </div>
         </div>
         <div className="">
            <EllipsisVerticalIcon className="size-4" />
         </div>
      </div>
   )
}

export default BookmarkedTour
