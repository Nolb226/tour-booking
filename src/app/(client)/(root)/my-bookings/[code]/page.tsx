import ReservationCode from '@/components/pages/(client)/booking/bill-details/reservation-code'
import Contact from '@/components/pages/(client)/my-bookings/contact'
import { Badge } from '@/components/ui/badge'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'

import { Button } from '@/components/ui/button'
import { HomeIcon } from 'lucide-react'
import Link from 'next/link'

export default function Page() {
    return (
        <div className="bg-gray-100">
            <div className="mx-auto flex min-h-screen max-w-[1200px] flex-col gap-4">
                {/* Breadcrumbs */}
                <Breadcrumb className="pt-6">
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/">
                                <HomeIcon className="size-4" />
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/my-bookings">
                                Đặt tour của tôi
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbPage className="text-sm font-medium text-light-color-scheme-gray-700">
                                SOCTRIP-2910156636
                            </BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>

                <div className="grid gap-6 pb-10 md:flex">
                    {/* Left */}
                    <div className="flex flex-col gap-2 md:w-2/3">
                        {/* Tour card */}
                        <div className="flex gap-8 rounded-lg border border-light-color-scheme-gray-200 bg-white p-4">
                            <div className="max-h-[198px] w-1/2 overflow-hidden rounded">
                                <img
                                    className="aspect-video h-full w-full object-cover"
                                    src="https://api.soctrip.com/storage/files/web/vn_20240912T092403262333300_3f6d1965-fe4a-4405-964a-630f80f41a2a_epthiennhientruphu021663693951.webp"
                                    alt=""
                                />
                            </div>
                            <div className="flex w-1/2 flex-col">
                                <h1 className="line-clamp-2 break-words text-lg font-semibold text-light-color-scheme-gray-900">
                                    KHÁM PHÁ ĐẤT RỪNG PHƯƠNG NAM U MINH HẠ - ĐẤT
                                    MŨI CỰC NAM TỔ QUỐC
                                </h1>
                                <div className="mt-auto flex">
                                    <div className="ml-auto">
                                        <Button variant={'secondary'}>
                                            Xem chi tiết
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Travelers' details */}
                        <div className="flex flex-col gap-3 rounded-lg border border-light-color-scheme-gray-200 bg-white p-4">
                            <h1 className="text-lg font-semibold text-light-color-scheme-gray-900">
                                Thông tin hành khách du lịch
                            </h1>
                            <div className="flex flex-col gap-3">
                                <p className="text-sm font-normal text-light-color-scheme-gray-500">
                                    Đặt bởi{' '}
                                    <b className="">
                                        Khánh Hoàng - (+84) 0363855855{' '}
                                    </b>
                                    (hn26677@gmail.com)
                                </p>
                                <Contact />
                                <Contact />
                                <Contact />
                            </div>
                        </div>
                        {/* Kids Policy */}
                        <div className=""></div>
                        {/* Refund Policy */}
                        <div className=""></div>
                        {/* Paymentt information */}
                        <div className=""></div>
                    </div>
                    {/* Right */}
                    <div className="flex flex-col gap-2 md:w-1/3">
                        {/* Total Price */}
                        <div className="flex flex-col divide-y divide-light-color-scheme-gray-200 rounded-lg border border-light-color-scheme-gray-200 bg-white p-4">
                            <div className="flex flex-col gap-4 pb-4">
                                <h2 className="text-lg font-semibold text-gray-900">
                                    KHÁM PHÁ ĐẤT RỪNG PHƯƠNG NAM U MINH HẠ - ĐẤT
                                    MŨI CỰC NAM TỔ QUỐC
                                </h2>
                                <div className="flex flex-col gap-3">
                                    <div className="flex items-center justify-between">
                                        <p className="text-sm font-normal text-gray-500">
                                            Người lớn (2 người lớn)
                                        </p>
                                        <div className="whitespace-nowrap text-sm font-medium text-gray-900">
                                            đ5,114,098
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <p className="text-sm font-normal text-gray-500">
                                            Trẻ em (0 trẻ em)
                                        </p>
                                        <div className="whitespace-nowrap text-sm font-medium text-gray-900">
                                            đ0
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="pt-4">
                                <div className="flex items-center justify-between">
                                    <span className="font-medium text-gray-900">
                                        Tổng cộng
                                    </span>
                                    <span className="text-lg font-semibold text-gray-900">
                                        ₫3,579,970
                                    </span>
                                </div>
                            </div>
                        </div>
                        {/* Booking details */}
                        <div className="div flex flex-col divide-y divide-dashed divide-light-color-scheme-primary-100 rounded-lg border border-light-color-scheme-primary-600 bg-white px-4 pb-6 pt-4 shadow-sm">
                            <div className="flex flex-col gap-4 pb-4">
                                <h2 className="text-lg font-semibold text-light-color-scheme-gray-900">
                                    Chi tiết đặt chỗ
                                </h2>
                                <div className="flex flex-col gap-3">
                                    <div className="flex items-center gap-6">
                                        <span className="inline-block min-w-[148px] text-sm text-gray-700">
                                            Trạng thái đặt chỗ
                                        </span>
                                        <Badge>Đặt thành công</Badge>
                                    </div>
                                    <div className="flex items-center gap-6">
                                        <span className="inline-block min-w-[148px] text-sm text-gray-700">
                                            Mã đặt chỗ
                                        </span>
                                        <ReservationCode />
                                    </div>
                                    <div className="flex items-center gap-6">
                                        <span className="inline-block min-w-[148px] text-sm text-gray-700">
                                            Ngày đặt chỗ
                                        </span>
                                        <span className="text-sm font-medium text-gray-900">
                                            13:37 29 thg 10, 2024 (UTC+07:00)
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-4 pt-4">
                                <div className="flex flex-col gap-3">
                                    <div className="flex items-center gap-6">
                                        <span className="inline-block min-w-[148px] text-sm text-gray-700">
                                            Thời gian
                                        </span>
                                        <span className="text-sm font-medium text-gray-900">
                                            1 ngày
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-6">
                                        <span className="inline-block min-w-[148px] text-sm text-gray-700">
                                            Ngày khời hành
                                        </span>
                                        <span className="text-sm font-medium text-gray-900">
                                            13:37 29 thg 10, 2024 (UTC+07:00)
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-6">
                                        <span className="inline-block min-w-[148px] text-sm text-gray-700">
                                            Ngày kết thúc
                                        </span>
                                        <span className="text-sm font-medium text-gray-900">
                                            13:37 29 thg 10, 2024 (UTC+07:00)
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-6">
                                        <span className="inline-block min-w-[148px] text-sm text-gray-700">
                                            Hành khách du lịch
                                        </span>
                                        <span className="text-sm font-medium text-gray-900">
                                            2 người lớn, 0 trẻ em, 0 trẻ sơ sinh
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-6">
                                        <span className="inline-block min-w-[148px] text-sm text-gray-700">
                                            Hủy miễn phí
                                        </span>
                                        <span className="text-sm font-medium text-gray-900">
                                            Luôn tính phí
                                        </span>
                                    </div>
                                </div>
                                <Button variant={'secondary'}>Đặt lại</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
