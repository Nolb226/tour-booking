'use client'

import Counter from '@/components/Counter'
import Datepicker from '@/components/Datepicker'
import Timeline from '@/components/Timeline'
import { Button } from '@/components/ui/button'
import { HoverCardContent } from '@/components/ui/hover-card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import useMediaQuery from '@/hooks/useMediaQuery'
import { HoverCard, HoverCardTrigger } from '@radix-ui/react-hover-card'
import {
    CheckIcon,
    ChevronLeft,
    ChevronRight,
    Clock4Icon,
    CrossIcon,
    Info,
    LanguagesIcon,
    MapPin,
    XIcon,
} from 'lucide-react'
import React, { useState } from 'react'

function TourDetail() {
    const [date, setDate] = useState<Date>()
    const isDesktop = useMediaQuery('(min-width: 768px)')
    return (
        <div className="h-full bg-[#f5faff]">
            <div className="sticky top-[64px] h-[44px] rounded-b-3xl border-t border-t-light-color-scheme-gray-200 bg-white shadow-sm">
                Test
            </div>
            <div className="container mx-auto flex flex-col gap-3 pt-10 md:gap-4">
                <div className="rounded-xl border border-light-color-scheme-gray-300 bg-white p-4 md:p-2">
                    <div className="flex flex-col-reverse gap-1 lg:flex-col">
                        <div className="flex flex-col justify-between lg:flex-row">
                            <div className="flex flex-col">
                                <div className="flex items-center gap-2">
                                    <ChevronLeft className="h-6 w-6 max-md:hidden" />
                                    <h1 className="line-clamp-2 text-lg font-semibold text-gray-900 md:line-clamp-1 lg:text-2xl">
                                        Tour Ngắm Hoàng Hôn Và Câu Mực Đêm
                                    </h1>
                                </div>
                                <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
                                    <div className="flex items-center gap-2 text-gray-500 max-md:text-sm">
                                        <MapPin className="size-3.5 lg:size-4" />
                                        <p>Thành phố Phú Quốc</p>
                                    </div>
                                    <span className="size-1.5 rounded-full bg-gray-500 max-md:hidden"></span>
                                    <div className="flex items-center gap-2 text-gray-500 max-md:text-sm">
                                        <LanguagesIcon className="size-3.5 lg:size-4" />
                                        <p>Tiếng Việt</p>
                                    </div>
                                    <span className="size-1.5 rounded-full bg-gray-500 max-md:hidden"></span>
                                    <div className="flex items-center gap-2 text-gray-500 max-md:text-sm">
                                        <Clock4Icon className="size-3.5 lg:size-4" />
                                        <p>1 ngày</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-3">
                                <div className="flex flex-col max-md:items-end">
                                    <div className="flex items-center gap-2.5">
                                        <span className="text-lg text-gray-400">
                                            Từ
                                        </span>{' '}
                                        <s className="text-lg text-gray-400 max-md:text-sm">
                                            300.000đ
                                        </s>
                                        <span className="line-clamp-2 text-2xl font-semibold text-orange-600 max-md:text-xl md:line-clamp-1">
                                            200.000đ
                                        </span>
                                        <span className="text-lg text-gray-400">
                                            mỗi người lớn
                                        </span>
                                    </div>
                                    <div className="text-right text-base text-gray-400">
                                        Bao gồm cả thuế và phí
                                    </div>
                                </div>
                                <div className="flex justify-end gap-3">
                                    <Button className="font-semibold">
                                        Chọn tùy chọn
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-4 grid-rows-3 md:hidden">
                            <div className="col-span-3 row-span-3">
                                <img
                                    src="https://api.soctrip.com/storage/files/web/vn_20240827T092928122821382_6b0cb9aa-5037-4d05-8fd1-94fb07e06d33_OPTION5.webp"
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="hidden max-h-[60vh] grid-cols-6 grid-rows-2 md:grid">
                            <div className="col-span-3 row-span-2">
                                <img
                                    src="https://api.soctrip.com/storage/files/web/vn_20240827T092928122821382_6b0cb9aa-5037-4d05-8fd1-94fb07e06d33_OPTION5.webp"
                                    alt=""
                                />
                            </div>
                            <div className=""></div>
                            <div className=""></div>
                            <div className=""></div>
                            <div className=""></div>
                            <div className=""></div>
                            <div className=""></div>
                        </div>
                    </div>
                </div>
                <div className="flex">
                    <div className="flex w-full flex-col gap-3 md:w-2/3 md:gap-4">
                        <div className="flex flex-col gap-3 rounded-xl border border-light-color-scheme-gray-200 bg-white p-4 shadow-xs">
                            <h4 className="text-lg font-semibold text-light-color-scheme-gray-800">
                                Điểm nổi bật
                            </h4>
                            <div className="text-left text-sm">
                                <p>
                                    <strong>
                                        Tour Ngắm Hoàng Hôn Và Câu Mực Đêm Đã
                                        đến Phú Quốc
                                    </strong>
                                </p>
                                thì không thể bỏ qua hoạt động ngắm hoàng hôn,
                                mà đặc biệt lại là ngắm hoàng hôn trên tàu đang
                                ra khơi. Buổi tối quý khách sẽ được trải nghiệm
                                câu mực đêm, thấu hiểu được cuộc sống lênh đênh
                                trên biển khơi của ngư dân Phú Quốc. Đối với
                                những quý khách dễ say sóng, tips nhỏ là nên ăn
                                nhẹ để lót dạ bằng bánh mì, bánh bao hoặc bánh
                                ngọt,... và uống 1 viên thuốc chống say sóng 30
                                phút trước khi lên tàu nhé, điều này giúp quý
                                khách dễ chịu hơn nhiều đấy. Mặc đồ ấm là một
                                trong những cách giảm tình trạng say sóng đáng
                                kể, do Việt Nam là một đất nước có khí hậu nóng
                                ẩm nên chúng ta không quen với những cơn gió
                                lạnh đột ngột, hãy chuẩn bị áo khoác hoặc khăn
                                choàng cổ để giữ ấm cơ thể nha. Cuối cùng là lựa
                                chọn gửi gắm niềm tin vào một địa chỉ tổ chức
                                tour câu mực đêm uy tín để chuyến du lịch Phú
                                Quốc của mình được trọn vẹn nhất nhé. John’s
                                Tours là công ty đầu tiên tại Phú Quốc được cấp
                                phép lữ hành quốc tế đủ tiêu chuẩn phục vụ những
                                lượt khách khắt khe nhất cùng với 15 năm kinh
                                nghiệm trong lĩnh vực tổ chức tour tham quan
                                đảo, John’s Tours chắc chắn không làm bạn thất
                                vọng. ĐIỂM NỔI BẬT: Ngắm bầu trời đỏ rực trong
                                ánh chiều tà trên hai tầng của tàu John’s Tours.
                                Hồi hộp chờ đợi chiến lợi phẩm khi quý khách trổ
                                tài câu mực đêm trên biển Phú Quốc. Thưởng thức
                                bữa tối và ngắm thành phố lung linh khi màn đêm
                                buông xuống.
                            </div>
                        </div>
                        {/* Service */}
                        <div className="rounded-xl border border-light-color-scheme-gray-200 bg-white p-4 px-4 py-3 shadow-xs md:py-4">
                            <h4 className="text-lg font-semibold text-gray-900">
                                Dịch vụ
                            </h4>
                            <div className="flex flex-col gap-2 pt-3">
                                <span className="text-sm font-bold">
                                    Bao gồm
                                </span>
                                <div className="flex flex-wrap content-start items-start gap-3 self-stretch">
                                    <div className="flex w-[45%] items-start gap-2 md:w-[32%]">
                                        <CheckIcon className="size-5 text-light-color-scheme-success-600" />
                                        <div className="flex-[1_0_0] text-sm">
                                            Vé máy bay khứ hồi Vietjet Air bao
                                            gồm 7kg hành lý ký xách tay + 20kg
                                            hành lý ký gửi, thuế và phí sân bay.
                                        </div>
                                    </div>
                                    <div className="flex w-[45%] items-start gap-2 md:w-[32%]">
                                        <CheckIcon className="size-5 text-light-color-scheme-success-600" />
                                        <div className="flex-[1_0_0] text-sm">
                                            Vé máy bay khứ hồi Vietjet Air bao
                                            gồm 7kg hành lý ký xách tay + 20kg
                                            hành lý ký gửi, thuế và phí sân bay.
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col gap-2 pt-3">
                                <span className="text-sm font-bold">
                                    Bao gồm
                                </span>
                                <div className="flex flex-wrap content-start items-start gap-3 self-stretch">
                                    <div className="flex w-[45%] items-start gap-2 md:w-[32%]">
                                        <XIcon className="size-5 text-light-color-scheme-error-600" />
                                        <div className="flex-[1_0_0] text-sm">
                                            Vé máy bay khứ hồi Vietjet Air bao
                                            gồm 7kg hành lý ký xách tay + 20kg
                                            hành lý ký gửi, thuế và phí sân bay.
                                        </div>
                                    </div>
                                    <div className="flex w-[45%] items-start gap-2 md:w-[32%]">
                                        <XIcon className="size-5 text-light-color-scheme-error-600" />
                                        <div className="flex-[1_0_0] text-sm">
                                            Vé máy bay khứ hồi Vietjet Air bao
                                            gồm 7kg hành lý ký xách tay + 20kg
                                            hành lý ký gửi, thuế và phí sân bay.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {!isDesktop && (
                            <div className="flex flex-col rounded-xl border border-light-color-scheme-gray-200 bg-white p-4 shadow-xs">
                                <div className="flex flex-col">
                                    <div className="flex justify-between">
                                        <h4 className="text-base font-semibold text-light-color-scheme-gray-800">
                                            Chọn ngày
                                        </h4>
                                        <Datepicker
                                            date={date}
                                            setDate={setDate}
                                        />
                                    </div>

                                    <div className="">
                                        <h4 className="text-base font-semibold text-light-color-scheme-gray-800">
                                            Hành khách
                                        </h4>
                                        <p className="text-xs font-normal text-light-color-scheme-gray-800">
                                            Chỉ định số lượng hành khách cho
                                            chuyến đi của bạn
                                        </p>
                                        <div className="mt-3 flex items-center justify-between">
                                            <div className="text-sm font-medium text-light-color-scheme-gray-800">
                                                Người lớn
                                            </div>
                                            <Counter minimum={1} />
                                        </div>
                                        <div className="mt-3 flex items-center justify-between">
                                            <div className="flex items-center gap-2 text-sm font-medium text-light-color-scheme-gray-800">
                                                Trẻ nhỏ
                                                <HoverCard
                                                    openDelay={300}
                                                    closeDelay={200}
                                                >
                                                    <HoverCardTrigger>
                                                        <Info className="size-4" />
                                                    </HoverCardTrigger>
                                                    <HoverCardContent>
                                                        <ul className="list-disc p-2 text-xs text-light-color-scheme-gray-700">
                                                            <li>
                                                                Tuổi của trẻ em
                                                                dưới 10.
                                                            </li>
                                                            <li>
                                                                Phí của trẻ em
                                                                là 50% giá của
                                                                người lớn
                                                            </li>
                                                        </ul>
                                                    </HoverCardContent>
                                                </HoverCard>
                                            </div>
                                            <Counter />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                        <div className="flex flex-col gap-3 rounded-xl border border-light-color-scheme-gray-200 bg-white p-4 shadow-xs">
                            <div className="flex items-center justify-between">
                                <h4 className="text-lg font-semibold text-light-color-scheme-gray-800">
                                    Hành trình
                                </h4>
                                <div className="">
                                    <Button className="bg-light-color-scheme-primary-50 text-sm font-bold text-light-color-scheme-primary-700">
                                        Xem trước
                                        <ChevronRight className="size-5" />
                                    </Button>
                                </div>
                            </div>
                            <div className="">
                                <Tabs defaultValue="all">
                                    <div className="border-b border-light-color-scheme-gray-200">
                                        <TabsList className="">
                                            <ul className="mb-1 flex gap-2 py-2 text-xs">
                                                <li>
                                                    <TabsTrigger value="all">
                                                        Tất cả các ngày
                                                    </TabsTrigger>
                                                </li>
                                                <li>
                                                    <TabsTrigger value="day-1">
                                                        Ngày 1
                                                    </TabsTrigger>
                                                </li>
                                            </ul>
                                        </TabsList>
                                    </div>

                                    <div className="pt-4">
                                        <TabsContent value="all">
                                            <Timeline />
                                            <Timeline />
                                            <Timeline />
                                            <Timeline />
                                            <Timeline />
                                        </TabsContent>
                                    </div>
                                </Tabs>
                            </div>
                        </div>
                        <div className="flex flex-col rounded-xl border border-light-color-scheme-gray-200 bg-white p-4 shadow-xs">
                            <h4 className="text-lg font-semibold text-light-color-scheme-gray-800">
                                Chính sách
                            </h4>
                            <div className="px-3 py-3.5 text-sm text-light-color-scheme-gray-700">
                                Giá tour chưa bao gồm: Hóa đơn GTGT Chi phí ăn
                                uống ngoài chương trình: bia, rượu, nước ngọt...
                                Chi phí cá nhân, chi phí tham quan các điểm
                                ngoài chương trình. Giá tour trẻ em: Trẻ em dưới
                                5 tuổi: miễn phí. Trẻ em từ 06 tuổi đến 11 tuổi:
                                50% giá tour. Trẻ em từ 12 tuổi trở lên: 100%
                                giá tour. Nên mang theo gì? Kính mát Máy quay
                                phim, chụp hình Lưu ý: Mekong Delta Explorer CAM
                                KẾT CHẤT LƯỢNG DỊCH VỤ liên quan đến chương
                                trình này tốt nhất hiện có.
                            </div>
                        </div>
                    </div>
                    {/* Left Form */}
                    <div className="top-[120px] h-fit flex-grow max-md:hidden md:sticky">
                        <div className="ml-4 flex flex-col gap-4">
                            <div className="flex items-center justify-between rounded-xl border border-light-color-scheme-gray-200 bg-white p-4 shadow-xs">
                                <h4 className="text-lg font-semibold text-light-color-scheme-gray-800">
                                    Chọn ngày
                                </h4>
                                <Datepicker date={date} setDate={setDate} />
                            </div>

                            <div className="flex flex-col rounded-xl border border-light-color-scheme-gray-200 bg-white p-4 shadow-xs">
                                <h4 className="text-lg font-semibold text-light-color-scheme-gray-800">
                                    Hành khách
                                </h4>
                                <p className="text-xs font-normal text-light-color-scheme-gray-800">
                                    Chỉ định số lượng hành khách cho chuyến đi
                                    của bạn
                                </p>
                                <div className="mt-3 flex items-center justify-between">
                                    <div className="text-sm font-medium text-light-color-scheme-gray-800">
                                        Người lớn
                                    </div>
                                    <Counter minimum={1} />
                                </div>
                                <div className="mt-3 flex items-center justify-between">
                                    <div className="flex items-center gap-2 text-sm font-medium text-light-color-scheme-gray-800">
                                        Trẻ nhỏ
                                        <HoverCard
                                            openDelay={300}
                                            closeDelay={200}
                                        >
                                            <HoverCardTrigger>
                                                <Info className="size-4" />
                                            </HoverCardTrigger>
                                            <HoverCardContent>
                                                <ul className="list-disc p-2 text-xs text-light-color-scheme-gray-700">
                                                    <li>
                                                        Tuổi của trẻ em dưới 10.
                                                    </li>
                                                    <li>
                                                        Phí của trẻ em là 50%
                                                        giá của người lớn
                                                    </li>
                                                </ul>
                                            </HoverCardContent>
                                        </HoverCard>
                                    </div>
                                    <Counter />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TourDetail
