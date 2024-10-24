'use client'

import React, { useMemo, useState } from 'react'
import { Button } from '../ui/button'
import { MinusIcon, PlusIcon } from 'lucide-react'
import { TCounterProps } from './Counter.type'

function Counter({ maximum, minimum = 0 }: TCounterProps) {
    const [count, setCount] = useState<number>(minimum)

    const handleIncrement = () => {
        setCount(count + 1)
    }
    const handleDecrement = () => {
        setCount(count - 1)
    }

    return (
        <div className="flex h-10 w-2/6 items-center rounded-md border border-light-color-scheme-gray-200">
            <div className="ml-2 flex w-1/4 items-center justify-center">
                <Button
                    disabled={useMemo(
                        () => minimum === count,
                        [count, minimum]
                    )}
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
                    variant="ghost"
                    className="md: size-6 text-light-color-scheme-primary-700 md:hover:bg-light-color-scheme-primary-50"
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
