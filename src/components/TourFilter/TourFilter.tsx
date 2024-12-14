'use client'

import React, { useState } from 'react'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import {
   CalendarHeart,
   CheckIcon,
   Coins,
   CurrencyIcon,
   Filter,
   MapPin,
   PiggyBank,
} from 'lucide-react'
import { Separator } from '../ui/separator'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import {
   Select,
   SelectContent,
   SelectGroup,
   SelectItem,
   SelectLabel,
   SelectTrigger,
   SelectValue,
} from '../ui/select'
import {
   Popover,
   PopoverContent,
   PopoverTrigger,
} from '@/components/ui/popover'

import { Button } from '../ui/button'
import { TLocation } from '@/model/location'

import {
   ComboBox,
   ComboboxContent,
   ComboboxEmpty,
   ComboboxInput,
   ComboboxItem,
} from '@/components/Combobox'
import Link from 'next/link'
interface TourFilterProps extends React.HTMLAttributes<HTMLDivElement> {
   locations: TLocation[]
}

function TourFilter({ locations }: TourFilterProps) {
   const [date, setDate] = useState<Date>()
   const [value, setValue] = useState<string | null>(null)
   const [min, setMinPrice] = useState<number | undefined>()
   const [max, setMaxPrice] = useState<number | undefined>()
   return (
      <div className="rounded-xl bg-white p-1 shadow-xl">
         <div className="flex h-fit w-full flex-row items-center gap-3 font-medium text-light-color-scheme-gray-500">
            <Label
               htmlFor="place-search"
               className="flex w-2/4 items-center space-x-2 rounded-lg pl-4 ring-light-color-scheme-primary-200 has-[:focus]:ring"
            >
               <MapPin className="size-5" />
               <ComboBox
                  value={value}
                  onValueChange={setValue}
                  filterItems={(inputValue, items) =>
                     items.filter(({ value }) => {
                        const loca = locations.find(
                           (loca) => loca.name === value
                        )
                        return (
                           !inputValue ||
                           (loca &&
                              loca.name
                                 .toLowerCase()
                                 .includes(inputValue.toLowerCase()))
                        )
                     })
                  }
               >
                  <ComboboxInput
                     className="h-12 border-0 bg-transparent outline-none ring-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                     placeholder="Chọn địa điểm bạn muốn đi..."
                  />
                  <ComboboxContent>
                     {locations.map(({ id, name }) => (
                        <ComboboxItem
                           key={id}
                           value={name}
                           label={name}
                           className="ps-8"
                        >
                           <span className="text-sm text-foreground">
                              {name}
                           </span>
                           <span className="text-xs text-muted-foreground">
                              VietNam
                           </span>
                           {value === id && (
                              <span className="absolute start-2 top-0 flex h-full items-center justify-center">
                                 <CheckIcon className="size-4" />
                              </span>
                           )}
                        </ComboboxItem>
                     ))}
                     <ComboboxEmpty>No results.</ComboboxEmpty>
                  </ComboboxContent>
               </ComboBox>
            </Label>
            <p className="h-6 w-[1px] flex-shrink-0 bg-light-color-scheme-gray-300"></p>
            <Label
               htmlFor="date-picker"
               className="flex w-1/4 items-center space-x-2 rounded-lg px-4 py-3.5 ring-light-color-scheme-primary-200 has-[:focus]:ring"
            >
               <CalendarHeart className="size-5" />
               <DatePicker
                  placeholderText="Khi nào"
                  showTimeInput={false}
                  id="date-picker"
                  className="text-sm outline-none"
                  showMonthYearPicker
                  selected={date}
                  onChange={(date) => setDate(date!)}
               />
            </Label>
            <p className="h-6 w-[1px] flex-shrink-0 bg-light-color-scheme-gray-300"></p>
            {/* <Select>
               <SelectTrigger className="flex h-auto w-1/4 self-stretch border-none ring-light-color-scheme-primary-200 data-[state=open]:ring">
                  <div className="flex items-center gap-2">
                     <PiggyBank className="size-5" />
                     <SelectValue
                        className="mr-auto"
                        placeholder="Select a fruit"
                     />
                  </div>
               </SelectTrigger>
               <SelectContent>
                  <SelectGroup>
                     <SelectLabel>Fruits</SelectLabel>
                     <SelectItem value="apple">Apple</SelectItem>
                     <SelectItem value="banana">Banana</SelectItem>
                     <SelectItem value="blueberry">Blueberry</SelectItem>
                     <SelectItem value="grapes">Grapes</SelectItem>
                     <SelectItem value="pineapple">Pineapple</SelectItem>
                  </SelectGroup>
               </SelectContent>
            </Select> */}
            <Popover>
               <PopoverTrigger className="flex h-auto w-1/4 items-center gap-2 self-stretch rounded-md border-none ring-light-color-scheme-primary-200 data-[state=open]:ring">
                  <Filter className="size-5" />
                  <span className="flex gap-3">
                     {min} - {max}
                  </span>
               </PopoverTrigger>
               <PopoverContent className="w-[320px]" align="start">
                  <p className="text-sm text-light-color-scheme-gray-900">
                     Ngân sách
                  </p>
                  <div className="flex items-center gap-2">
                     <Label className="flex items-center rounded-md border border-light-color-scheme-gray-200 px-1">
                        <Coins className="size-4" />
                        <Input
                           type="number"
                           placeholder="Từ"
                           onChange={(e) => setMinPrice(+e.target.value)}
                           className="border-0 bg-transparent ring-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                        />
                     </Label>
                     <div className="h-[1px] w-[50px] bg-light-color-scheme-gray-500"></div>
                     <Label className="flex items-center rounded-md border border-light-color-scheme-gray-200 px-1">
                        <Coins className="size-4" />
                        <Input
                           type="number"
                           placeholder="Đến"
                           onChange={(e) => setMaxPrice(+e.target.value)}
                           className="border-0 bg-transparent ring-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                        />
                     </Label>
                  </div>
               </PopoverContent>
            </Popover>

            <Button className="h-auto self-stretch rounded-lg">
               <Link
                  href={`/tour/search-result?${value ? `search=${value}` : ''}${date ? `&date=${date}` : ''}${min ? `&min=${min}` : ''}${max ? `&max=${max}` : ''}`}
               >
                  Tìm kiếm
               </Link>
            </Button>
         </div>
      </div>
   )
}

export default TourFilter
