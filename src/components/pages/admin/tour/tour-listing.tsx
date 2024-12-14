import { DataTable } from '@/components/data-table'
import { BookmarkedTour, Tour } from '@/model/tour'
import { tourColumns } from './tour-columns'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

interface TourListingProps {
   tours: BookmarkedTour[]
}

export default function TourListing({ tours }: TourListingProps) {
   return (
      <div className="">
         <div className="flex items-center justify-end border-b border-gray-200 py-2 pr-5">
            <Button
               asChild
               variant={'outline'}
               className="h-fit py-0.5 text-sm"
            >
               <Link href={'./tour/new'}>Add Tour</Link>
            </Button>
         </div>
         <DataTable columns={tourColumns} data={tours} />
      </div>
   )
}
