import type { ComponentPropsWithoutRef } from 'react'
import type { UseComboboxGetInputPropsReturnValue } from 'downshift'
import { PopoverAnchor } from '@radix-ui/react-popover'
import { ChevronDownIcon } from 'lucide-react'

import { Input } from '@/components/ui/input'

import { useComboboxContext } from './context'

export type ComboboxInputProps = Omit<
   ComponentPropsWithoutRef<'input'>,
   keyof UseComboboxGetInputPropsReturnValue
>

export const ComboboxInput = ({ className, ...props }: ComboboxInputProps) => {
   const { getInputProps } = useComboboxContext()

   return (
      <div className="relative w-full" data-combobox-input-wrapper="">
         <PopoverAnchor asChild>
            <Input className={className} {...props} {...getInputProps?.()} />
         </PopoverAnchor>
         <div className="pointer-events-none absolute inset-y-0 end-3 grid h-full place-items-center">
            <ChevronDownIcon className="size-4 opacity-50" />
         </div>
      </div>
   )
}
