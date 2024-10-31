'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'
import { EyeIcon, EyeOffIcon } from 'lucide-react'
import React, { useState } from 'react'

interface PinCodeProps extends React.HTMLAttributes<HTMLDivElement> {
    code: string
}

function PinCode({ code, className, ...props }: PinCodeProps) {
    const [isVisible, setIsVisible] = useState<boolean>(false)
    const handleToggle = () => setIsVisible(!isVisible)
    return (
        <div className={cn('flex items-center gap-3', className)} {...props}>
            <Input
                value={code}
                readOnly
                className="w-[calc(100%-2.25rem)] bg-transparent text-right text-sm font-medium text-gray-900 focus-visible:ring-0 sm:text-base"
                type={isVisible ? 'text' : 'password'}
            />
            <Button
                onClick={handleToggle}
                className="text-light-color-scheme-primary-600 hover:rounded-md hover:bg-blue-100 hover:text-light-color-scheme-primary-600"
                variant={'ghost'}
                size={'icon'}
            >
                {isVisible ? (
                    <EyeIcon className="size-5" />
                ) : (
                    <EyeOffIcon className="size-5" />
                )}
            </Button>
        </div>
    )
}

export default PinCode
