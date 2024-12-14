'use client'
import {
   Carousel,
   CarouselApi,
   CarouselContent,
   CarouselItem,
   CarouselNext,
   CarouselPrevious,
} from '@/components/ui/carousel'
import {
   Dialog,
   DialogContent,
   DialogDescription,
   DialogTitle,
   DialogTrigger,
} from '@/components/ui/dialog'
import { cn } from '@/lib/utils'
import { TourDetail } from '@/model/tour'
import { useCallback, useEffect, useState } from 'react'

export default function GalleryDialog({ tour }: { tour: TourDetail }) {
   const [api, setApi] = useState<CarouselApi>()
   const [current, setCurrent] = useState<number>(0)

   const onSelect = useCallback(() => {
      if (!api) return
      setCurrent(api.selectedScrollSnap())
   }, [api])

   useEffect(() => {
      if (!api) return
      setCurrent(api.selectedScrollSnap())
      api.on('select', onSelect)
   }, [api, onSelect])

   return (
      <Dialog>
         <DialogTrigger asChild>
            <div className="isolate hidden aspect-[5/2] max-h-[60vh] cursor-pointer grid-cols-6 grid-rows-2 gap-0.5 overflow-hidden rounded-md md:grid">
               {tour.galleries.slice(0, 7).map((image, index) => {
                  if (index === 0)
                     return (
                        <div
                           key={`image-${index}-${tour.id}`}
                           className="group/item col-span-3 row-span-2 overflow-hidden"
                           onClick={() => {
                              setCurrent(index)
                           }}
                        >
                           <img
                              alt=""
                              className="size-full object-cover transition-all duration-200 ease-in-out group-hover/item:scale-105"
                              src={image}
                           />
                        </div>
                     )
                  if (index === 6) {
                     return (
                        <div
                           key={`image-${index}-${tour.id}`}
                           className="group/item relative overflow-hidden"
                           onClick={() => {
                              setCurrent(index)
                           }}
                        >
                           <img
                              alt=""
                              className="size-full object-cover transition-all duration-200 ease-in-out group-hover/item:scale-105"
                              src={image}
                           />
                           <div className="absolute left-1/2 top-1/2 flex size-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white shadow-sm">
                              3+
                           </div>
                        </div>
                     )
                  }
                  return (
                     <div
                        className="group overflow-hidden"
                        onClick={() => {
                           setCurrent(index)
                        }}
                        key={`image-${index}-${tour.id}`}
                     >
                        <img
                           className="size-full object-cover transition-all duration-200 ease-in-out group-hover:scale-105"
                           src={image}
                           alt=""
                        />
                     </div>
                  )
               })}
            </div>
         </DialogTrigger>
         <DialogContent className="max-h-[90vh] w-full max-w-[90vh] px-4">
            <DialogTitle>{tour.title}</DialogTitle>
            <DialogDescription></DialogDescription>
            <Carousel
               opts={{
                  startIndex: current,
               }}
               setApi={setApi}
               className="h-full"
            >
               <CarouselContent className="h-full">
                  {tour.galleries.map((image, index) => (
                     <CarouselItem
                        className="aspect-[4/3]"
                        key={`image-${index}-${tour.id}`}
                     >
                        <img
                           src={image}
                           alt=""
                           className="h-full w-full object-contain"
                        />
                     </CarouselItem>
                  ))}
               </CarouselContent>
               <div className="relative flex h-20 max-h-20 w-full items-center gap-0.5">
                  <CarouselPrevious />
                  <CarouselNext />
                  {tour.galleries.map((image, index) => (
                     <div
                        className={cn(
                           'flex-shrink flex-grow-0 basis-[10%] opacity-35 transition-all duration-100 ease-linear',
                           {
                              'rounded-md border-[3px] border-light-color-scheme-primary-600 opacity-100':
                                 current === index,
                           }
                        )}
                        key={`image-${index}-${tour.id}`}
                        onClick={() => api?.scrollTo(index)}
                     >
                        <img
                           className="aspect-square h-full w-full rounded-sm object-cover"
                           src={image}
                           alt=""
                        />
                     </div>
                  ))}
               </div>
            </Carousel>
         </DialogContent>
      </Dialog>
   )
}
