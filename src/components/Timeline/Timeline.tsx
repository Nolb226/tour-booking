import { cn } from '@/lib/utils'
import { Place, PlaceVisit } from '@/model/tour'
import { Clock4Icon, MapPin } from 'lucide-react'
import React from 'react'

interface TimelineProps extends React.HTMLAttributes<HTMLDivElement> {
   place: PlaceVisit
}

function Timeline({ className, place, ...props }: TimelineProps) {
   return (
      <div className={cn('flex', className)} {...props}>
         <div className="flex flex-col items-center">
            <div className="min-h-6 min-w-6 rounded-full bg-light-color-scheme-gray-100 p-1">
               <MapPin className="size-5 text-light-color-scheme-gray-600" />
            </div>
            <div className="my-1 w-0.5 flex-grow bg-gray-200"></div>
         </div>
         <div className="mb-3 flex flex-col gap-2 pl-2">
            <div className="">
               <span className="text-left text-base text-light-color-scheme-primary-700 lg:text-lg">
                  {place.place.name}
               </span>
            </div>
            <div className="flex items-center gap-2">
               <div className="min-h-6 min-w-6 rounded-full bg-light-color-scheme-gray-100 p-1">
                  <Clock4Icon className="size-4 text-light-color-scheme-gray-700" />
               </div>
               <p className="text-sm font-semibold text-light-color-scheme-gray-700">
                  Thời gian linh hoạt
               </p>
            </div>
            <div
               className="text-sm"
               dangerouslySetInnerHTML={{ __html: place.description }}
            ></div>
         </div>
      </div>
   )
}

export default Timeline
