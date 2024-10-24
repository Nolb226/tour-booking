'use client'

import React, { useState } from 'react'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { Button } from '../ui/button'
import { format } from 'date-fns'
import { Calendar } from '../ui/calendar'
import { CalendarIcon } from 'lucide-react'
import useMediaQuery from '@/hooks/useMediaQuery'
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from '../ui/drawer'
import { TDatepickerProps } from './Datepicker.type'
import vi from 'date-fns/locale/vi'
import { root } from 'postcss'

const wait = () => new Promise((resolve) => setTimeout(resolve, 500))

function Datepicker({ setDate, date }: TDatepickerProps) {
    // const [date, setDate] = useState<Date>()
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const isDesktop = useMediaQuery('(min-width: 768px)')
    if (isDesktop) {
        return (
            <Popover open={isOpen} onOpenChange={setIsOpen}>
                <PopoverTrigger asChild>
                    <Button className="flex items-center gap-2">
                        <CalendarIcon className="size-4" />
                        {!date
                            ? 'Chọn ngày'
                            : format(date, 'PP', {
                                  // @ts-ignore
                                  locale: vi,
                              })}
                    </Button>
                </PopoverTrigger>
                <PopoverContent>
                    <Calendar
                        mode="single"
                        initialFocus
                        selected={date}
                        onSelect={setDate}
                    />
                </PopoverContent>
            </Popover>
        )
    }
    return (
        <Drawer modal={false} open={isOpen} onOpenChange={setIsOpen}>
            <DrawerTrigger asChild>
                <Button className="flex items-center gap-2">
                    <CalendarIcon className="size-4" />
                    {!date
                        ? 'Chọn ngày'
                        : format(date, 'PP', {
                              // @ts-ignore
                              locale: vi,
                          })}
                </Button>
            </DrawerTrigger>
            <DrawerContent>
                <DrawerHeader className="text-left">
                    <DrawerTitle>Chọn ngày</DrawerTitle>
                    <DrawerDescription>Chọn ngày khởi hành</DrawerDescription>
                </DrawerHeader>
                <Calendar
                    mode="single"
                    initialFocus
                    selected={date}
                    onSelect={(selectedDate) => {
                        setDate(selectedDate)
                        wait().then(() => setIsOpen(false))
                    }}
                />
                <DrawerFooter className="pt-2">
                    <DrawerClose asChild>
                        <Button variant="outline">Cancel</Button>
                    </DrawerClose>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    )
}

export default Datepicker
