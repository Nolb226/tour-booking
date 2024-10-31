import { cn } from '@/lib/utils'
import React from 'react'

interface ContactProps extends React.HTMLAttributes<HTMLDivElement> {}

function Contact({ className, ...props }: ContactProps) {
    return (
        <div
            className={cn(
                'flex flex-row justify-between rounded-md border border-light-color-scheme-gray-100 bg-light-color-scheme-gray-50 p-3',
                className
            )}
        >
            <div className="flex basis-1/3 flex-col gap-1">
                <p className="text-sm font-medium text-light-color-scheme-gray-500">
                    Người lớn 1
                </p>
                <p className="text-sm text-light-color-scheme-gray-900">
                    Khánh Hoàng
                </p>
            </div>
            <div className="flex basis-1/3 flex-col gap-1">
                <p className="text-sm font-medium text-light-color-scheme-gray-500">
                    Số điện thoại
                </p>
                <p className="text-sm text-light-color-scheme-gray-900">
                    +840363855855
                </p>
            </div>
            <div className="flex basis-1/3 flex-col gap-1">
                <p className="text-sm font-medium text-light-color-scheme-gray-500">
                    E-mail
                </p>
                <p className="text-sm text-light-color-scheme-gray-900">
                    hn26677@gmail.com
                </p>
            </div>
        </div>
    )
}

export default Contact
