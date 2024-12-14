'use client'

import React, { useEffect, useMemo, useState } from 'react'
import { Button } from './ui/button'
import { MinusIcon, PlusIcon } from 'lucide-react'
import { on } from 'events'

interface CounterProps extends React.HTMLAttributes<HTMLDivElement> {
   maximum: number
   minimum?: number
   defaultValue?: number
   onValueChange?: (value: number) => void
}

function Counter({
   maximum,
   minimum = 0,
   defaultValue = minimum,
   onValueChange,
}: CounterProps) {
   const [count, setCount] = useState<number>(defaultValue)

   const handleIncrement = () => {
      setCount(count + 1)
   }
   const handleDecrement = () => {
      setCount(count - 1)
   }

   useEffect(() => {
      onValueChange?.(count)
   }, [count, onValueChange])

   return (
      <div className="flex h-10 w-2/6 items-center rounded-md border border-light-color-scheme-gray-200">
         <div className="ml-2 flex w-1/4 items-center justify-center">
            <Button
               disabled={useMemo(() => minimum === count, [count, minimum])}
               variant="ghost"
               className="size-6 text-light-color-scheme-primary-700 disabled:text-gray-300 md:hover:bg-light-color-scheme-primary-50"
               size="icon"
               onClick={handleDecrement}
            >
               <MinusIcon className="size-4" />
               <span className="sr-only">Decrease</span>
            </Button>
         </div>
         <p className="flex w-2/4 justify-center text-sm font-semibold text-light-color-scheme-gray-800">
            {count}
         </p>
         <div className="mr-2 flex w-1/4 items-center justify-center">
            <Button
               disabled={useMemo(() => maximum === count, [count, maximum])}
               variant="ghost"
               className="md: size-6 text-light-color-scheme-primary-700 disabled:text-gray-300 md:hover:bg-light-color-scheme-primary-50"
               size="icon"
               onClick={handleIncrement}
            >
               <PlusIcon className="size-4" />
               <span className="sr-only">Increase</span>
            </Button>
         </div>
      </div>
   )
}

export default Counter
