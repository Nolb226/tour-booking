'use client'
import { useState } from 'react'
import {
   ComboBox,
   ComboboxContent,
   ComboboxEmpty,
   ComboboxInput,
   ComboboxItem,
} from '../Combobox'
import { Place } from '@/model/tour'
import { CheckIcon } from 'lucide-react'

interface PlaceComboboxProps {
   places: Place[]
}

export default function PlaceCombobox({ places }: PlaceComboboxProps) {
   const [search, setSearch] = useState<string | null>('')

   return (
      <>
         <ComboBox
            value={search}
            filterItems={(inputValue, items) =>
               items.filter(({ value }) => {
                  const place = places.find((place) => place.name === value)

                  return (
                     !inputValue ||
                     (place &&
                        place.name
                           .toLowerCase()
                           .includes(inputValue.toLowerCase()))
                  )
               })
            }
            onValueChange={setSearch}
         >
            <ComboboxInput
               className="flex-1"
               placeholder="Search for a place"
            />
            <ComboboxContent>
               {places.map((place) => (
                  <ComboboxItem
                     key={place.id}
                     value={place.name}
                     label={place.name}
                     disabled={search === place.name}
                     className="ps-8 text-sm"
                  >
                     {place.name}
                     {search === place.name && (
                        <span className="absolute start-2 top-0 flex h-full items-center justify-center">
                           <CheckIcon className="size-4" />
                        </span>
                     )}
                  </ComboboxItem>
               ))}
               <ComboboxEmpty>No results found</ComboboxEmpty>
            </ComboboxContent>
         </ComboBox>
      </>
   )
}
