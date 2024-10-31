import Contact from '@/components/pages/(client)/booking/bill-details/contact'
import PinCode from '@/components/pages/(client)/booking/bill-details/pin-code'
import ReservationCode from '@/components/pages/(client)/booking/bill-details/reservation-code'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { CheckCircle, CreditCard } from 'lucide-react'

export default function Page() {
    return (
        <div className="flex min-h-screen justify-center pt-6">
            <div className="relative w-full max-w-[49.5rem] rounded-xl border border-light-color-scheme-gray-200 bg-white px-8 pt-8">
                <img
                    src="/soctrip_logo.svg"
                    className="absolute right-0 top-1/2 mix-blend-hard-light"
                    alt=""
                />
                {/* Header */}
                <div className="mb-2 flex flex-col gap-3">
                    <div className="flex justify-center">
                        <div className="flex size-20 items-center justify-center rounded-[40px] bg-green-100 ring-[10px] ring-inset ring-green-50">
                            <CheckCircle className="size-10 text-green-500" />
                        </div>
                    </div>
                    <div className="">
                        <div className="text-center text-xl font-semibold text-gray-900">
                            Cảm ơn bạn đã đặt chỗ!
                        </div>
                    </div>
                </div>
                {/* Body */}
                <div className="mt-2 flex flex-col divide-y-[1px] divide-gray-200">
                    <div className="mb-4 mt-6 flex flex-col gap-2 md:flex-row md:gap-8">
                        <div className="flex h-full w-full items-center justify-between gap-3 md:w-1/2 md:py-2">
                            <p className="whitespace-nowrap text-sm text-gray-500">
                                Mã đặt chỗ
                            </p>
                            <ReservationCode className="md:text-base" />
                        </div>
                        <div className="flex h-full w-full items-center justify-between gap-3 md:w-1/2 md:py-2">
                            <p className="whitespace-nowrap text-sm text-gray-500">
                                Mã PIN
                            </p>
                            <PinCode code="8889" />
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 py-4 sm:grid-cols-3">
                        <div className="">
                            <div className="mb-1 text-sm text-gray-500">
                                Ngày đặt chỗ
                            </div>
                            <div className="text-base font-medium text-gray-900">
                                13:37 29 thg 10, 2024 (UTC+07:00)
                            </div>
                        </div>
                        <div className="">
                            <div className="mb-1 text-sm text-gray-500">
                                Phương thức thanh toán
                            </div>
                            <div className="flex items-center gap-2 text-base font-medium text-gray-900">
                                <CreditCard className="size-5 text-gray-500" />
                                <div className="">ATM</div>
                            </div>
                        </div>
                        <div className="">
                            <div className="mb-1 text-sm text-gray-500">
                                Trạng thái đặt chỗ
                            </div>
                            <div className="flex items-center gap-2 text-base font-medium text-gray-900">
                                <Badge>Thanh toán thành công</Badge>
                            </div>
                        </div>
                    </div>
                    <div className="flex w-full flex-col gap-4 py-4">
                        <div className="flex gap-3">
                            <div className="aspect-square size-[5.75rem] overflow-hidden rounded-lg ring-1 ring-inset ring-gray-200">
                                <img
                                    className="h-full w-full object-cover"
                                    src="https://api.soctrip.com/storage/files/web/vn_20240827T092928122821382_6b0cb9aa-5037-4d05-8fd1-94fb07e06d33_OPTION5.webp"
                                    alt=""
                                />
                            </div>
                            <div className="flex-1">
                                <div className="text-base font-semibold text-gray-700">
                                    Tour Ngắm Hoàng Hôn Và Câu Mực Đêm
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4 py-4 sm:grid-cols-3">
                            <div className="">
                                <div className="mb-1 text-sm text-gray-500">
                                    Ngày khởi hành
                                </div>
                                <div className="text-sm font-medium text-gray-900">
                                    13:37 29 thg 10, 2024 (UTC+07:00)
                                </div>
                            </div>
                            <div className="">
                                <div className="mb-1 text-sm text-gray-500">
                                    Hành khách
                                </div>
                                <div className="flex items-center gap-2 text-sm font-medium text-gray-900">
                                    2 người lớn
                                </div>
                            </div>
                            <div className="">
                                <div className="mb-1 text-sm text-gray-500">
                                    Ngày kết thúc
                                </div>
                                <div className="flex items-center gap-2 text-sm font-medium text-gray-900">
                                    Th 7, 2 thg 11, 2024 (UTC+07:00)
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 py-4 sm:grid-cols-3">
                        <Contact />
                        <Contact />
                        <Contact />
                    </div>
                    <div className="py-4">
                        <p className="mb-3 text-sm font-semibold uppercase text-light-color-scheme-gray-700">
                            Yêu cầu đặc biệt
                        </p>
                        <div className=""></div>
                    </div>
                    <div className="pb-3 pt-4">
                        <Accordion type="single" collapsible>
                            <AccordionItem
                                className="border-none"
                                value="item-1"
                            >
                                <AccordionTrigger className="text-sm font-medium text-gray-700 hover:no-underline">
                                    Giá tạm tính
                                    <div className="ml-auto"> đ5,114,098</div>
                                </AccordionTrigger>
                                <AccordionContent className="flex flex-col gap-2">
                                    <div className="flex items-center justify-between">
                                        <p className="text-sm font-normal text-gray-500">
                                            Người lớn (2 người lớn)
                                        </p>
                                        <div className="whitespace-nowrap text-sm font-medium text-gray-500">
                                            đ5,114,098
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <p className="text-sm font-normal text-gray-500">
                                            Trẻ em (0 trẻ em)
                                        </p>
                                        <div className="whitespace-nowrap text-sm font-medium text-gray-500">
                                            đ0
                                        </div>
                                    </div>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                        <div className="">
                            <p className="text-sm font-medium text-gray-700">
                                Khuyến mãi
                            </p>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="">
                    <div className="flex items-center justify-between">
                        <div className="text-base font-semibold text-gray-900">
                            Tổng cộng
                        </div>
                        <div className="flex flex-wrap items-center gap-2">
                            <div className="whitespace-nowrap text-sm font-medium text-gray-400 line-through">
                                ₫5,114,098
                            </div>
                            <div className="whitespace-nowrap text-lg font-semibold text-orange-600">
                                ₫3,579,970
                            </div>
                        </div>
                    </div>
                    <div className="flex py-8">
                        <div className="ml-auto flex gap-3">
                            <Button variant={'secondary'}>
                                Chi tiết đặt chỗ
                            </Button>
                            <Button>Quay lại trang chủ</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
