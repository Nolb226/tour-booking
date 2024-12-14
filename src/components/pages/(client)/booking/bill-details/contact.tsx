import { cn } from '@/lib/utils'
import React from 'react'

export interface ContactProps extends React.HTMLAttributes<HTMLDivElement> {}

function Contact({ className, ...props }: ContactProps) {
    return (
        <div className={cn('', className)} {...props}>
            <div className="mb-1 text-sm text-gray-500">Thông tin liên hệ</div>
            <div className="flex flex-col gap-0.5">
                <div className="text-sm font-semibold text-gray-900">
                    Khanh Nguyen
                </div>
                <div className="text-sm font-normal text-gray-500">
                    +084363855855
                </div>
                <div className="text-sm font-normal text-gray-500">
                    hn26677@gmail.com
                </div>
            </div>
        </div>
    )
}

export default Contact
