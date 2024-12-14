import { formatCurrency } from '@/lib/utils'
import { Tour } from '@/model/tour'
import { MapPin } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

interface OutstandingTourCardProps
   extends React.HTMLAttributes<HTMLDivElement> {
   tour: Tour
}

function OutstandingTourCard({ tour }: OutstandingTourCardProps) {
   return (
      <Link
         href={`/tour/${tour.slug}`}
         className="box-border flex h-[254px] max-w-[calc(50%_-_4px)] flex-col rounded-lg border border-light-color-scheme-gray-100 border-transparent shadow-xs hover:shadow-md sm:max-w-[180px] md:my-2 md:h-[286px] md:max-w-[227px]"
      >
         <div className="h-full rounded-lg border-light-color-scheme-primary-700 ring-light-color-scheme-primary-100 hover:border hover:ring">
            <div className="outstanding-card t-card-image relative aspect-[16/10] h-[160px] w-full overflow-hidden rounded-lg rounded-t-lg p-3 text-white">
               <img
                  src={tour.avt}
                  className="h-full w-full rounded-md object-cover"
                  alt=""
               />
            </div>
            <div className="flex flex-col gap-2 rounded-b-lg p-3 text-light-color-scheme-gray-500">
               <h3 className="overflow-hidden truncate text-light-color-scheme-gray-700">
                  {tour.title}
               </h3>
               <div className="">
                  <span className="flex items-center gap-1">
                     <MapPin className="size-4" />

                     <span className="truncate text-xs">
                        {/* @ts-ignore */}
                        {tour.location}
                     </span>
                  </span>
                  <div className="mt-5 flex justify-end text-lg font-semibold text-orange-600">
                     <span>{formatCurrency(tour.price)}</span>
                  </div>
               </div>
            </div>
         </div>
      </Link>
   )
}

export default OutstandingTourCard
