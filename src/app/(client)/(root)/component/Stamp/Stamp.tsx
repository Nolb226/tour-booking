import { TLocation } from '@/model/location'
import Link from 'next/link'
import React from 'react'

interface StampProps {
   location: TLocation
}

function Stamp({ location }: StampProps) {
   return (
      <Link
         href={`/tour/search?location=${location.name}`}
         className="flex h-[7.9rem] w-[7.375rem] flex-col items-center gap-2 bg-[url('/stamp.png')] md:h-[14.75rem] md:w-[13.8rem]"
      >
         <div className="inline-block h-[4.7rem] w-[5.875rem] rounded-lg pt-3 md:h-[9.5rem] md:w-[11.875rem] md:pt-4">
            <img
               src={location.avt}
               className="h-full w-full rounded-lg"
               alt=""
            />
         </div>
         <p className="md:text-l text-sm font-semibold">{location.name}</p>
         <p className="text-sm text-light-color-scheme-gray-400">
            {location.total_tour}+ tour
         </p>
      </Link>
   )
}

export default Stamp
