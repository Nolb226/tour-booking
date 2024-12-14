import TourFilter from '@/components/TourFilter'
import SearchBooking from '../component/SearchBooking'
import { MapPin } from 'lucide-react'

import Footer from '@/components/layout/Footer'
import {
   Carousel,
   CarouselContent,
   CarouselItem,
   CarouselNext,
   CarouselPrevious,
} from '@/components/ui/carousel'
import { getLocations } from '@/service/location'
import Stamp from '../component/Stamp/Stamp'
import OutstandingTourCard from '../component/OutstandingTourCard'
import { getOutstandingTour } from '@/service/tour'

export default async function Page() {
   const locations = await getLocations()
   const outstanding = await getOutstandingTour()

   return (
      <>
         {/* Hero section */}
         <img
            src="/hero.webp"
            alt="Hero Image"
            className="absolute left-0 right-0 top-0 h-[46.875rem] object-cover"
         />
         <section className="relative mx-auto flex h-[40rem] items-center justify-center md:w-[47rem] xl:w-[75rem]">
            <div className="flex flex-col gap-4 md:gap-14">
               <h2 className="w-1/2 text-left text-3xl font-bold text-white md:text-5xl">
                  Hãy tận hưởng chuyến đi mong muốn của bạn với SguTrip
               </h2>
               <div className="flex flex-col gap-2">
                  <div className="flex justify-between">
                     <SearchBooking />
                     <div className="flex items-center space-x-2 rounded-lg border border-light-color-scheme-gray-200 bg-light-color-scheme-gray-400/50 px-4 text-sm text-light-color-scheme-gray-200">
                        <MapPin className="size-4" />
                        <p className="text-light-color-scheme-gray-200">
                           Việt Nam
                        </p>
                     </div>
                  </div>
                  <div className="">
                     <TourFilter locations={locations} />
                  </div>
               </div>
            </div>
         </section>
         {/* Outstanding tour */}
         <section className="mx-auto flex items-center justify-center md:w-[47rem] xl:w-[75rem]">
            <div className="flex flex-wrap justify-start gap-2 md:gap-4">
               {outstanding.map((tour) => (
                  <OutstandingTourCard key={tour.id} tour={tour} />
               ))}
            </div>
         </section>
         {/* Become agency */}
         <section className="md:pb-8 md:pt-12"></section>
         {/* Recent tours */}
         <section className="mx-auto py-4 md:w-[47rem] md:py-6 xl:w-[75rem]">
            <p className="text-base font-semibold text-light-color-scheme-gray-900 md:text-2xl md:leading-8">
               Các tour gần đây
            </p>
         </section>
         {/* How to */}
         <section></section>
         {/* Adventure Style */}
         <section></section>
         {/* Explore places */}
         <section className="bg-[url('/background-6-min.webp')]">
            <div className="mx-auto pb-6 md:w-[47rem] md:pb-12 xl:w-[75rem]">
               <p className="text-base font-semibold text-light-color-scheme-gray-900 md:text-2xl md:leading-8">
                  Khám phá địa điểm
               </p>
               <Carousel className="mt-4">
                  <CarouselContent className="-ml-2 select-none">
                     {locations.map((location) => (
                        <CarouselItem
                           key={location.id}
                           className="basis-1/5 pl-2"
                        >
                           <Stamp location={location} />
                        </CarouselItem>
                     ))}
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
               </Carousel>
            </div>
         </section>
         <Footer />
      </>
   )
}
