import MatchCard from '@/components/pages/(client)/tour/match-card'
import TourFilter from '@/components/TourFilter'
import { getLocations } from '@/service/location'
import { searchForTour } from '@/service/tour'
import React from 'react'

async function Page({
   searchParams,
}: {
   searchParams: { [key: string]: string | string | string[] }
}) {
   const { search, minPrice, maxPrice } = searchParams
   const tours = await searchForTour(
      search as string,
      minPrice as string,
      maxPrice as string
   )
   const locations = await getLocations()
   return (
      <>
         <section className="mb-[32px] flex flex-col items-center gap-5 bg-[linear-gradient(180deg,_#b0e3ff_0%,_#ffffff_66.23%)] pt-[80px] shadow-xs">
            <div className="w-[1200px]">
               <TourFilter locations={locations} />
            </div>
            <div className="pb-2">
               Chúng tôi tìm thấy 16 tour theo tìm kiếm của quý khách
            </div>
         </section>
         <section className="mx-auto mb-[32px] flex w-[1200px] gap-6 pt-0 md:pt-4">
            <div className="w-2/3 rounded-lg border border-light-color-scheme-gray-200 bg-white p-4">
               <div className="">
                  <span className="text-lg font-semibold text-light-color-scheme-gray-900">
                     Tour
                  </span>
               </div>
               <ul className="mt-4 flex flex-col gap-2">
                  {/* <li>
                     <MatchCard href={'/'} />
                  </li>
                  <li>
                     <MatchCard href={'/'} />
                  </li>
                  <li>
                     <MatchCard href={'/'} />
                  </li>
                  <li>
                     <MatchCard href={'/'} />
                  </li>
                  <li>
                     <MatchCard href={'/'} />
                  </li>
                  <li>
                     <MatchCard href={'/'} />
                  </li>
                  <li>
                     <MatchCard href={'/'} />
                  </li>
                  <li>
                     <MatchCard href={'/'} />
                  </li>
                  <li>
                     <MatchCard href={'/'} />
                  </li>
                  <li>
                     <MatchCard href={'/'} />
                  </li>
                  <li>
                     <MatchCard href={'/'} />
                  </li>
                  <li>
                     <MatchCard href={'/'} />
                  </li> */}
                  {tours.map((tour) => (
                     <li key={tour.id}>
                        <MatchCard href={`/tour/${tour.slug}`} tour={tour} />
                     </li>
                  ))}
               </ul>
            </div>
            <div className="w-1/3"></div>
         </section>
      </>
   )
}

export default Page
