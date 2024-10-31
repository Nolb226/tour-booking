import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { AvatarImage } from '@radix-ui/react-avatar'
import {
    ArrowRight,
    Calendar,
    Check,
    CheckCircle2,
    ChevronRight,
    Clock4,
    MapPin,
    Plus,
    Ticket,
    User,
} from 'lucide-react'
import React from 'react'

function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="">
            <div className="flex flex-col">
                <div className="fixed left-0 right-0 top-[calc(6.5rem-32px)]">
                    <div className="relative mx-[2%] flex h-[64px] max-w-[1200px] items-center justify-center gap-2 rounded-xl bg-white px-4 shadow-sm lg:mx-auto">
                        {/* Steps */}
                        <div className="mx-auto flex items-center justify-evenly gap-4">
                            {/* Step 1 */}
                            <div className="flex items-center gap-2">
                                <div className="flex size-8 items-center justify-center rounded-full bg-light-color-scheme-primary-50">
                                    <Check
                                        strokeWidth={3}
                                        className="h-5 w-4 font-medium text-light-color-scheme-primary-600"
                                    />
                                </div>
                                <span className="hidden whitespace-nowrap font-medium text-light-color-scheme-gray-900 lg:inline-block">
                                    Lựa chọn của bạn
                                </span>
                            </div>
                            <ChevronRight className="size-6 text-light-color-scheme-gray-400" />
                            {/* Step 2 */}
                            <div className="flex items-center gap-2">
                                <span className="relative flex size-4 items-center justify-center rounded-full border border-light-color-scheme-gray-300">
                                    <span className="absolute inline-flex size-7 rounded-full bg-light-color-scheme-primary-50"></span>
                                    <span className="absolute inline-flex size-5 rounded-full bg-light-color-scheme-primary-100"></span>
                                    <span className="relative inline-flex size-2.5 rounded-full bg-light-color-scheme-primary-600"></span>
                                </span>
                                <span className="whitespace-nowrap font-medium text-light-color-scheme-primary-600">
                                    Thông tin của bạn
                                </span>
                            </div>
                            <ChevronRight className="size-6 text-light-color-scheme-gray-400" />
                            {/* Step 3 */}
                            <div className="flex items-center gap-2">
                                <div className="flex size-8 items-center justify-center rounded-full bg-light-color-scheme-gray-100 font-medium text-light-color-scheme-gray-700">
                                    3
                                </div>
                                <span className="hidden whitespace-nowrap font-medium text-light-color-scheme-gray-900 lg:inline-block">
                                    Thanh toán
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mx-auto w-full max-w-[1200px] pt-14 max-lg:px-[2%]">
                    <div className="flex flex-col gap-6 lg:flex-row">
                        {/* Left */}
                        <div className="flex flex-col gap-2 lg:w-7/12">
                            {children}
                        </div>
                        {/* Right */}
                        <div className="flex flex-col gap-2 lg:w-5/12">
                            {/* Reservation Detail */}
                            <div className="flex flex-col divide-y divide-light-color-scheme-gray-200 rounded-xl border border-light-color-scheme-gray-200 bg-white shadow-xs">
                                <div className="p-4 text-lg font-semibold text-light-color-scheme-gray-900">
                                    Chi tiết đặt chỗ
                                </div>
                                <div className="flex flex-col gap-3 p-4">
                                    <div className="flex items-center justify-between">
                                        <div className="flex gap-2 text-sm text-light-color-scheme-gray-700">
                                            <Calendar className="size-4" />
                                            <p>Ngày khởi hành</p>
                                        </div>
                                        <div className="text-sm font-medium text-light-color-scheme-gray-900">
                                            <span>
                                                Th 5, 26 thg 9, 2024 (UTC+07:00)
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <div className="flex gap-2 text-sm text-light-color-scheme-gray-700">
                                            <Calendar className="size-4" />
                                            <p>Ngày khởi hành</p>
                                        </div>
                                        <div className="text-sm font-medium text-light-color-scheme-gray-900">
                                            <span>
                                                Th 5, 26 thg 9, 2024 (UTC+07:00)
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <div className="flex gap-2 text-sm text-light-color-scheme-gray-700">
                                            <User className="size-4" />
                                            <p>Hành khách du lịch</p>
                                        </div>
                                        <div className="text-sm font-medium text-light-color-scheme-gray-900">
                                            <span>1 người</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex gap-2 p-4 text-sm text-light-color-scheme-gray-700">
                                    <CheckCircle2 className="size-4 text-light-color-scheme-success-500" />
                                    <p>Không hủy miễn phí</p>
                                </div>
                            </div>
                            {/* Price Detail */}
                            <div className="flex flex-col divide-y divide-light-color-scheme-gray-200 rounded-xl border border-light-color-scheme-gray-200 bg-white shadow-xs">
                                <div className="p-4 text-lg font-semibold text-light-color-scheme-gray-900">
                                    Chi tiết giá
                                </div>
                                <div className="flex flex-col gap-4 p-4">
                                    <Button
                                        className="flex w-full items-center gap-1 bg-light-color-scheme-primary-50 text-sm font-semibold text-light-color-scheme-primary-600 hover:bg-light-color-scheme-primary-50"
                                        variant={'secondary'}
                                    >
                                        <Ticket className="size-5" />
                                        Chọn mã giảm giá
                                    </Button>
                                    <div className="flex flex-col gap-3">
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm font-medium text-light-color-scheme-gray-700">
                                                Người lớn (1 người lớn)
                                            </span>
                                            <span>$182.45</span>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm font-medium text-light-color-scheme-gray-700">
                                                Trẻ em (0 trẻ em)
                                            </span>
                                            <span>$0.00</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between p-4">
                                    <span className="font-semibold text-light-color-scheme-gray-900">
                                        Tổng cộng
                                    </span>
                                    <span className="text-orange text-lg font-semibold text-orange-600">
                                        $182.45
                                    </span>
                                </div>
                            </div>
                            {/* Payment Button */}
                            <Button className="mt-4 flex w-full items-center gap-2 font-semibold">
                                Thanh toán
                                <ArrowRight className="size-5" />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Layout
