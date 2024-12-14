'use client'
import DebouncedInput from '@/components/debounce-input'
import { Input } from '@/components/ui/input'
import { formatCurrency } from '@/lib/utils'
import { Bill } from '@/model/bill'
import { ColumnDef } from '@tanstack/react-table'

export const billColumns: ColumnDef<Bill>[] = [
   {
      header: ({ column }) => {
         return (
            <div className="flex flex-col gap-2">
               <div className="">Bill id </div>
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
      accessorKey: 'bill_id',
   },
   {
      header: ({ column }) => {
         return (
            <div className="flex flex-col gap-2">
               <div className="">Tour</div>
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
      accessorKey: 'tour_title',
      filterFn: 'includesString',
   },
   {
      header: 'Start Time',
      accessorKey: 'start_time',
   },
   {
      header: 'Total Days',
      accessorKey: 'total_days',
   },
   {
      header: 'Customer',
      filterFn: 'includesString',

      cell: ({ row }) => {
         return (
            <div>
               <div>{row.original.user.user_name}</div>
               <div className="">
                  <div className="text-xs text-neutral-500">
                     email: {row.original.user.email}
                  </div>
                  <div className="text-xs text-neutral-500">
                     phone: {row.original.user.phone_number}
                  </div>
               </div>
            </div>
         )
      },
   },
   {
      header: 'Total Quantity',
      cell: ({ row, table }) => {
         return (
            <div>
               <div>{row.original.total_quantity}</div>
               <div className="text-xs text-neutral-500">
                  {row.original.adult_quantity} adults,{' '}
                  {row.original.children_quantity} children
               </div>
            </div>
         )
      },
   },
   {
      header: 'Total Price',
      accessorKey: 'total_price',
      cell: ({ row }) => {
         return (
            <div>
               <div className="text-orange-500">
                  {formatCurrency(row.original.total_price)}
               </div>
               <div className="text-xs text-neutral-500">
                  {row.original.total_days} days
               </div>
            </div>
         )
      },
   },
]
