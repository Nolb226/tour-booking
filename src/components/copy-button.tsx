import React from 'react'
import { Button, ButtonProps } from './ui/button'
import { cn } from '@/lib/utils'
import { CheckIcon, Clipboard } from 'lucide-react'
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from './ui/tooltip'

interface CopyButtonProps extends ButtonProps {
    value: string
}

async function copyToClipboard(value: string) {
    navigator.clipboard.writeText(value)
}

function CopyButton({
    variant = 'ghost',
    className,
    value,
    ...props
}: CopyButtonProps) {
    const [hasCopied, setHasCopied] = React.useState(false)

    React.useEffect(() => {
        setTimeout(() => {
            setHasCopied(false)
        }, 2000)
    }, [hasCopied])

    return (
        <TooltipProvider>
            <Tooltip open={hasCopied}>
                <TooltipTrigger asChild>
                    <Button
                        className={cn('flex items-center gap-1', className)}
                        onClick={() => {
                            copyToClipboard(value)
                            setHasCopied(true)
                        }}
                        {...props}
                    >
                        {/* {hasCopied ? 'Đã sao chép' : 'Sao chép'} */}
                        {hasCopied ? (
                            <>
                                <CheckIcon className="size-4" />{' '}
                                <span>Sao chép</span>
                            </>
                        ) : (
                            <>
                                <Clipboard className="size-4" />{' '}
                                <span>Sao chép</span>
                            </>
                        )}
                    </Button>
                </TooltipTrigger>
                <TooltipContent side="right">Đã sao chép!</TooltipContent>
            </Tooltip>
        </TooltipProvider>
    )
}

export default CopyButton
