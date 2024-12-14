'use client'
import DebouncedInput from '@/components/debounce-input'
import { User } from '@/model/user'
import { ColumnDef } from '@tanstack/react-table'

export const userColumns: ColumnDef<User>[] = [
   {
      header: ({ column }) => {
         return (
            <div className="flex flex-col gap-2">
               <div className="">Email</div>
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
      accessorKey: 'email',
   },
   {
      header: ({ column }) => {
         return (
            <div className="flex flex-col gap-2">
               <div className="">Username</div>
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
      accessorKey: 'user_name',
   },
   {
      header: 'Date of Birth',
      accessorKey: 'dob',
   },
]
