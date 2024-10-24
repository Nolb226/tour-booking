import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'
import Link from 'next/link'
import React from 'react'

function Page() {
    return (
        <div className="min-h-screen bg-light-color-scheme-gray-50">
            {/* Header */}
            <div className=""></div>
            {/* Body */}
            <div className="container mx-auto flex flex-col items-center py-6">
                <div className="mt-6 flex flex-col gap-2 md:w-[65rem]">
                    {/* Company information */}
                    <div className="flex grid-cols-3 flex-col gap-6 rounded-lg bg-white p-6 sm:grid">
                        {/* Title */}
                        <div className="col-span-1 flex flex-col gap-2">
                            <h3 className="text-lg font-semibold leading-7 text-light-color-scheme-gray-900">
                                Thông tin chung
                            </h3>
                            <span className="text-sm leading-5 text-light-color-scheme-gray-700">
                                Nhập thông tin. Tất cả các trường đều bắt buộc
                            </span>
                        </div>
                        {/* Form */}
                        <div className="col-span-2 flex flex-col gap-4">
                            <Label htmlFor="company_name">
                                <p className="mb-1 text-sm text-light-color-scheme-gray-700">
                                    Tên pháp lý của công ty
                                    <span className="ml-1 text-light-color-scheme-error-600">
                                        *
                                    </span>
                                </p>
                                <Input
                                    id="company_name"
                                    className="transition-all duration-200 ease-in hover:ring-4 hover:ring-light-color-scheme-primary-300"
                                    name="company_name"
                                    type="text"
                                    placeholder="Nhập tên công ty"
                                />
                            </Label>
                            <div className="flex flex-col items-center gap-4 sm:flex-row">
                                <Label className="w-full" htmlFor="email">
                                    <p className="mb-1 text-sm text-light-color-scheme-gray-700">
                                        Email
                                        <span className="ml-1 text-light-color-scheme-error-600">
                                            *
                                        </span>
                                    </p>
                                    <Input
                                        id="email"
                                        className="transition-all duration-200 ease-in hover:ring-4 hover:ring-light-color-scheme-primary-300"
                                        name="email"
                                        type="email"
                                        placeholder="Nhập địa chỉ email"
                                    />
                                </Label>
                                <Label className="w-full" htmlFor="phone">
                                    <p className="mb-1 text-sm text-light-color-scheme-gray-700">
                                        Số điện thoại
                                        <span className="ml-1 text-light-color-scheme-error-600">
                                            *
                                        </span>
                                    </p>
                                    <Input
                                        id="phone"
                                        className="transition-all duration-200 ease-in hover:ring-4 hover:ring-light-color-scheme-primary-300"
                                        name="phone"
                                        type="tel"
                                        placeholder="Nhập số điện thoại"
                                    />
                                </Label>
                            </div>
                            <div className="flex flex-col items-center gap-4 sm:flex-row">
                                <Label className="w-full" htmlFor="test">
                                    <p className="mb-1 text-sm text-light-color-scheme-gray-700">
                                        Tên pháp lý của công ty
                                        <span className="ml-1 text-light-color-scheme-error-600">
                                            *
                                        </span>
                                    </p>
                                    <Select>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select a fruit" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectGroup>
                                                <SelectLabel>
                                                    Fruits
                                                </SelectLabel>
                                                <SelectItem value="apple">
                                                    Apple
                                                </SelectItem>
                                                <SelectItem value="banana">
                                                    Banana
                                                </SelectItem>
                                                <SelectItem value="blueberry">
                                                    Blueberry
                                                </SelectItem>
                                                <SelectItem value="grapes">
                                                    Grapes
                                                </SelectItem>
                                                <SelectItem value="pineapple">
                                                    Pineapple
                                                </SelectItem>
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                </Label>
                                <Label className="w-full" htmlFor="test">
                                    <p className="mb-1 text-sm text-light-color-scheme-gray-700">
                                        Tên pháp lý của công ty
                                        <span className="ml-1 text-light-color-scheme-error-600">
                                            *
                                        </span>
                                    </p>
                                    <Select>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select a fruit" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectGroup>
                                                <SelectLabel>
                                                    Fruits
                                                </SelectLabel>
                                                <SelectItem value="apple">
                                                    Apple
                                                </SelectItem>
                                                <SelectItem value="banana">
                                                    Banana
                                                </SelectItem>
                                                <SelectItem value="blueberry">
                                                    Blueberry
                                                </SelectItem>
                                                <SelectItem value="grapes">
                                                    Grapes
                                                </SelectItem>
                                                <SelectItem value="pineapple">
                                                    Pineapple
                                                </SelectItem>
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                </Label>
                            </div>
                            <div className="flex flex-col items-center gap-4 sm:flex-row">
                                <Label className="w-full" htmlFor="test">
                                    <p className="mb-1 text-sm text-light-color-scheme-gray-700">
                                        Tên pháp lý của công ty
                                        <span className="ml-1 text-light-color-scheme-error-600">
                                            *
                                        </span>
                                    </p>
                                    <Select>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select a fruit" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectGroup>
                                                <SelectLabel>
                                                    Fruits
                                                </SelectLabel>
                                                <SelectItem value="apple">
                                                    Apple
                                                </SelectItem>
                                                <SelectItem value="banana">
                                                    Banana
                                                </SelectItem>
                                                <SelectItem value="blueberry">
                                                    Blueberry
                                                </SelectItem>
                                                <SelectItem value="grapes">
                                                    Grapes
                                                </SelectItem>
                                                <SelectItem value="pineapple">
                                                    Pineapple
                                                </SelectItem>
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                </Label>
                                <Label
                                    className="w-full"
                                    htmlFor="company_address"
                                >
                                    <p className="mb-1 text-sm text-light-color-scheme-gray-700">
                                        Tên pháp lý của công ty
                                        <span className="ml-1 text-light-color-scheme-error-600">
                                            *
                                        </span>
                                    </p>
                                    <Input
                                        id="company_address"
                                        className="transition-all duration-200 ease-in hover:ring-4 hover:ring-light-color-scheme-primary-300"
                                        name="company_name"
                                        type="text"
                                        placeholder="Nhập tên công ty"
                                    />
                                </Label>
                            </div>
                        </div>
                    </div>
                    {/* Company contacts */}
                    <div className="flex grid-cols-3 flex-col gap-6 rounded-lg bg-white p-6 sm:grid">
                        {/* Title */}
                        <div className="col-span-1 flex flex-col gap-2">
                            <h3 className="text-lg font-semibold leading-7 text-light-color-scheme-gray-900">
                                Thông tin liên hệ doanh nghiệp
                            </h3>
                            <span className="text-sm leading-5 text-light-color-scheme-gray-700">
                                Nhập thông tin. Tất cả các trường là tùy chọn.
                            </span>
                        </div>
                        {/* Form */}
                        <div className="col-span-2 flex flex-col gap-4">
                            <Label htmlFor="name">
                                <p className="mb-1 text-sm text-light-color-scheme-gray-700">
                                    Tên pháp lý của công ty
                                    <span className="ml-1 text-light-color-scheme-error-600">
                                        *
                                    </span>
                                </p>
                                <Input
                                    id="name"
                                    className="transition-all duration-200 ease-in hover:ring-4 hover:ring-light-color-scheme-primary-300"
                                    name="name"
                                    type="text"
                                    placeholder="Nhập tên công ty"
                                />
                            </Label>
                            <div className="flex flex-col items-center gap-4 sm:flex-row">
                                <Label className="w-full" htmlFor="email">
                                    <p className="mb-1 text-sm text-light-color-scheme-gray-700">
                                        Email
                                        <span className="ml-1 text-light-color-scheme-error-600">
                                            *
                                        </span>
                                    </p>
                                    <Input
                                        id="email"
                                        className="transition-all duration-200 ease-in hover:ring-4 hover:ring-light-color-scheme-primary-300"
                                        name="email"
                                        type="email"
                                        placeholder="Nhập địa chỉ email"
                                    />
                                </Label>
                                <Label className="w-full" htmlFor="phone">
                                    <p className="mb-1 text-sm text-light-color-scheme-gray-700">
                                        Số điện thoại
                                        <span className="ml-1 text-light-color-scheme-error-600">
                                            *
                                        </span>
                                    </p>
                                    <Input
                                        id="phone"
                                        className="transition-all duration-200 ease-in hover:ring-4 hover:ring-light-color-scheme-primary-300"
                                        name="phone"
                                        type="tel"
                                        placeholder="Nhập số điện thoại"
                                    />
                                </Label>
                            </div>
                        </div>
                    </div>
                    {/* Button List */}
                    <div className="mb-6 mt-4 flex items-center justify-end gap-2">
                        <Button variant="secondary" asChild>
                            <Link href={'/'}>Hủy</Link>
                        </Button>
                        <Button disabled>Gửi yêu cầu</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page
