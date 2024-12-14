'use client'
import { BookmarkedTour as TBookmarkedTour } from '@/model/tour'
import BookmarkedTour from '@/components/pages/(client)/saved-list/bookmarked-tour'
import { Label } from '@/components/ui/label'
import { Search } from 'lucide-react'
import { useCallback, useState } from 'react'
export default function SavedTourPage({
   savedTours,
}: {
   savedTours: TBookmarkedTour[]
}) {
   const [search, setSearch] = useState('')

   const filteredTours = savedTours.filter((tour) => {
      return tour.title.toLowerCase().includes(search.toLowerCase())
   })

   return (
      <div className="min-h-screen bg-gray-100">
         <div className="mx-auto flex max-w-[1200px] flex-col gap-4 pt-4">
            .
            <div className="flex flex-col divide-y divide-light-color-scheme-gray-200 rounded-lg border border-light-color-scheme-gray-200 bg-white shadow-sm">
               <div className="flex flex-col items-center gap-2 p-4 md:flex-row md:justify-between">
                  <h5 className="text-xl font-semibold text-light-color-scheme-gray-800">
                     Danh sách tour đã lưu
                  </h5>
                  <Label
                     htmlFor="search"
                     className="flex w-[320px] items-center space-x-2 rounded-md border border-light-color-scheme-gray-200 p-2.5 ring-light-color-scheme-primary-50 transition-all duration-200 ease-in-out has-[:focus]:border-light-color-scheme-primary-300 has-[:focus]:ring-4"
                  >
                     <Search className="size-5 text-neutral-300" />
                     <input
                        autoComplete="off"
                        id="search"
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full border-none outline-none"
                        placeholder="Tìm kiếm bằng tên"
                     />
                  </Label>
               </div>
               <div className="px-4 py-2">
                  <div className="rounded-md bg-light-color-scheme-primary-200 text-center text-sm font-semibold text-light-color-scheme-primary-600">
                     Tour
                  </div>
               </div>

               {/* List */}
            </div>
            <div className="flex gap-4">
               <div className="flex min-h-[512px] w-full max-w-[350px] items-center justify-center rounded-lg border-2 border-gray-200 bg-white shadow-sm">
                  <span className="rounded-md border border-gray-200 px-1 py-0.5">
                     Ads
                  </span>
               </div>
               <div className="flex flex-1 flex-col gap-2">
                  {filteredTours.map((tour) => (
                     <BookmarkedTour tour={tour} key={tour.id} />
                  ))}
               </div>
            </div>
         </div>
      </div>
   )
}
