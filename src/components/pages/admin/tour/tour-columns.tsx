'use client'
import { formatCurrency } from '@/lib/utils'
import { BookmarkedTour, Tour } from '@/model/tour'
import {
   Select,
   SelectContent,
   SelectItem,
   SelectTrigger,
   SelectValue,
} from '@/components/ui/select'

import { ColumnDef } from '@tanstack/react-table'
import DebouncedInput from '@/components/debounce-input'

export const tourColumns: ColumnDef<BookmarkedTour>[] = [
   {
      accessorKey: 'avt',
      header: 'Thumbnail',
      cell: ({ row }) => (
         <div className="size-24">
            <img
               className="h-full w-full rounded-md object-cover"
               src={row.original.avt}
            />
         </div>
      ),
   },

   {
      accessorKey: 'title',
      header: ({ column }) => {
         return (
            <div className="flex flex-col gap-2">
               <div className="">Title</div>
               <div className="">
                  <DebouncedInput
                     className="h-7"
                     placeholder="Search..."
                     value={(column.getFilterValue() ?? '') as string}
                     onChange={(value) => {
                        column.setFilterValue(value)
                     }}
                  />
               </div>
            </div>
         )
      },
      cell: ({ row }) => (
         <div className="line-clamp-1">{row.original.title}</div>
      ),
   },

   {
      accessorKey: 'price',
      header: 'Price',
      cell: ({ row }) => (
         <div className="font-semibold text-orange-600">
            {formatCurrency(row.original.price)}
         </div>
      ),
   },
   //    {
   //       accessorKey: 'slug',
   //       header: 'Slug',
   //       cell: ({ row }) => (
   //          <div className="line-clamp-1">{row.original.title}</div>
   //       ),
   //    },
   {
      accessorKey: 'locationName',

      header: ({ table, column }) => {
         const allRows = table.getCoreRowModel().rows
         const allUniqueLocations = Array.from(
            new Set(allRows.map((row) => row.original.locationName))
         )
         const defaultValue = column.getFilterValue()
         return (
            <div className="flex flex-col gap-2">
               {' '}
               <div className=""> Location</div>
               <Select
                  defaultValue={(defaultValue ?? 'all') as string}
                  onValueChange={(value) => {
                     if (value === 'all') {
                        column.setFilterValue(undefined)
                        return
                     }
                     column.setFilterValue(value)
                  }}
               >
                  <SelectTrigger className="h-7 w-[180px]">
                     <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                     <SelectItem value="all">All</SelectItem>
                     {allUniqueLocations.map((location) => (
                        <SelectItem
                           className="text-left"
                           key={location}
                           value={location}
                        >
                           {location}
                        </SelectItem>
                     ))}
                  </SelectContent>
               </Select>
            </div>
         )
      },
   },
]
