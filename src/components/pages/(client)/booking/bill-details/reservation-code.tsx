'use client'
import { Button } from '@/components/ui/button'
import { useToast } from '@/hooks/use-toast'
import { cn } from '@/lib/utils'
import { Copy } from 'lucide-react'
import React from 'react'

interface ReservationCodeProps extends React.HTMLAttributes<HTMLDivElement> {}

function ReservationCode({ className, ...props }: ReservationCodeProps) {
    const { toast } = useToast()
    const handleCopy = () => {
        navigator.clipboard.writeText('SOCTRIP-2910156636')
        toast({
            title: 'Đã sao chép!',
            description: 'Mã đặt chỗ đã được sao chép thành công',
        })
    }

    return (
        <div className="flex items-center gap-3">
            <div
                className={cn(
                    'whitespace-nowrap text-sm font-medium text-gray-900',
                    className
                )}
            >
                SOCTRIP-2910156636
            </div>
            <Button
                onClick={handleCopy}
                className="hover:bg-blue-100"
                variant="ghost"
                size={'icon'}
            >
                <Copy className="size-4 text-light-color-scheme-primary-600" />
            </Button>
        </div>
    )
}

export default ReservationCode
