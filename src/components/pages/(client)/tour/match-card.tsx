import { cn } from '@/lib/utils'
import { Tour } from '@/model/tour'
import Link, { LinkProps } from 'next/link'
import React from 'react'

type MatchCardProps = { tour: Tour } & LinkProps &
   React.HTMLAttributes<HTMLAnchorElement>

function MatchCard({ className, tour, ...props }: MatchCardProps) {
   return (
      <Link
         className={cn(
            'flex h-24 gap-2 hover:rounded-md hover:bg-light-color-scheme-gray-100',
            className
         )}
         {...props}
      >
         <div className="min-w-[142px] overflow-hidden rounded-lg border border-light-color-scheme-gray-200">
            <img
               className="aspect-[3/2] h-full w-full object-cover"
               src={tour.avt}
               alt=""
            />
         </div>
         <div className="flex flex-col gap-0.5">
            <p className="line-clamp-1 text-light-color-scheme-gray-900">
               {tour.title}
            </p>
            <div className="flex w-fit items-center justify-start rounded bg-light-color-scheme-gray-100 px-2.5 py-0.5">
               <span className="text-xs font-medium text-light-color-scheme-gray-700">
                  {/* @ts-ignore */}
                  {tour.location}
               </span>
            </div>
            <div className="line-clamp-2 w-fit text-sm/4 text-light-color-scheme-gray-500">
               {tour.highlight}
            </div>
         </div>
      </Link>
   )
}

export default MatchCard
