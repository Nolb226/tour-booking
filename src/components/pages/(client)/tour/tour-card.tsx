import { Button } from '@/components/ui/button'
import { cn, formatCurrency } from '@/lib/utils'
import { MapPin, Play } from 'lucide-react'
import { title } from 'process'
import React from 'react'

interface TourCardProps extends React.HTMLAttributes<HTMLDivElement> {
   id: string
   avt: string
   title: string
   slug: string
   price: number
   locationName: string
}

function TourCard({
   avt,
   id,
   locationName,
   price,
   slug,
   title,
   className,
   ...props
}: TourCardProps) {
   return (
      <div
         className={cn(
            'flex cursor-pointer flex-col hover:rounded-lg hover:bg-light-color-scheme-gray-100',
            className
         )}
         {...props}
      >
         {/* Body */}
         <div className="flex gap-2">
            {/* Thumbnail */}
            <div className="h-[100px] w-[130px] overflow-hidden rounded-lg md:h-[120px] md:w-[160px]">
               <img src={avt} alt="" className="h-full w-full object-cover" />
            </div>
            {/* Detail */}
            <div className="flex w-9/12 flex-col gap-2">
               <div className="">
                  <h3 className="text-sm font-semibold uppercase text-light-color-scheme-gray-900 md:text-base">
                     {title}
                  </h3>
               </div>
               <div className="flex items-center gap-1">
                  <MapPin className="size-4 text-light-color-scheme-gray-500" />
                  <p className="text-sm font-semibold text-light-color-scheme-gray-500">
                     {locationName}
                  </p>
               </div>
               <div className="flex items-center justify-start">
                  <div className="rounded-2xl bg-light-color-scheme-rose-50 px-2.5 py-0.5">
                     <span className="text-xs font-semibold text-light-color-scheme-rose-700">
                        {locationName}
                     </span>
                  </div>
               </div>
            </div>
         </div>
         {/* Footer */}
         <div className="flex justify-between p-2 md:p-3">
            <div className="flex items-center gap-2">
               <span className="text-lg font-semibold text-orange-600 md:text-2xl">
                  {formatCurrency(price)}
               </span>
               {/* <span className="text-sm font-medium text-light-color-scheme-gray-400 line-through md:text-base">

               </span> */}
            </div>
            <div className="flex gap-2">
               <Button className="text-sm font-semibold">Chi tiết</Button>
               <Button
                  variant="outline"
                  className="group rounded-full"
                  size="icon"
               >
                  <Play className="size-4 fill-light-color-scheme-primary-600 group-hover:fill-white" />
               </Button>
            </div>
         </div>
      </div>
   )
}

export default TourCard
