'use client'

import React, { useState } from 'react'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { CalendarHeart, MapPin, PiggyBank } from 'lucide-react'
import { Separator } from '../ui/separator'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from '../ui/select'
import { Button } from '../ui/button'

function TourFilter() {
    const [date, setDate] = useState<Date>()
    return (
        <div className="rounded-xl bg-white p-1 shadow-xl">
            <div className="flex h-fit w-full flex-row items-center gap-3 font-medium text-light-color-scheme-gray-500">
                <Label
                    htmlFor="place-search"
                    className="flex w-2/4 items-center space-x-2 rounded-lg py-3.5 pl-4 ring-light-color-scheme-primary-200 has-[:focus]:ring"
                >
                    <MapPin className="size-5" />
                    <input
                        id="place-search"
                        className="border-none outline-none"
                        placeholder="Bạn muốn đi đâu?"
                    />
                </Label>
                <p className="h-6 w-[1px] flex-shrink-0 bg-light-color-scheme-gray-300"></p>
                <Label
                    htmlFor="date-picker"
                    className="flex w-1/4 items-center space-x-2 rounded-lg px-4 py-3.5 ring-light-color-scheme-primary-200 has-[:focus]:ring"
                >
                    <CalendarHeart className="size-5" />
                    <DatePicker
                        placeholderText="Khi nào"
                        showTimeInput={false}
                        id="date-picker"
                        className="text-sm outline-none"
                        showMonthYearPicker
                        selected={date}
                        onChange={(date) => setDate(date!)}
                    />
                </Label>
                <p className="h-6 w-[1px] flex-shrink-0 bg-light-color-scheme-gray-300"></p>
                <Select>
                    <SelectTrigger className="flex h-auto w-1/4 self-stretch border-none ring-light-color-scheme-primary-200 data-[state=open]:ring">
                        <div className="flex items-center gap-2">
                            <PiggyBank className="size-5" />
                            <SelectValue
                                className="mr-auto"
                                placeholder="Select a fruit"
                            />
                        </div>
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectLabel>Fruits</SelectLabel>
                            <SelectItem value="apple">Apple</SelectItem>
                            <SelectItem value="banana">Banana</SelectItem>
                            <SelectItem value="blueberry">Blueberry</SelectItem>
                            <SelectItem value="grapes">Grapes</SelectItem>
                            <SelectItem value="pineapple">Pineapple</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
                <Button className="h-auto self-stretch rounded-lg">
                    Tìm kiếm
                </Button>
            </div>
        </div>
    )
}

export default TourFilter
