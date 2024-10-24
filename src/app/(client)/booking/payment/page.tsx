import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Textarea } from '@/components/ui/textarea'
import { Clock4, MapPin, Plus } from 'lucide-react'

export default function Page() {
    return (
        <>
            {/* Tour info */}
            <div className="flex gap-3 rounded-xl border border-light-color-scheme-gray-200 bg-white p-4 shadow-xs">
                <div className="size-34 flex-shrink-0 overflow-hidden rounded-lg">
                    <img
                        className="size-full object-cover"
                        src="https://api.soctrip.com/storage/files/thumbnail/vn_20240904T162905392098998_a59e157a-ef8d-421b-8302-e8656cf98950_chonoicairang1.webp"
                        alt=""
                    />
                </div>
                <div className="flex flex-col gap-3">
                    <div className="flex flex-col gap-1">
                        <p className="text-2xl font-semibold text-light-color-scheme-gray-900">
                            Tour Miền Tây Phú Quốc – Bến Tre – Cần Thơ từ TP HCM
                            4 ngày 3 đêm
                        </p>
                        <div className="flex items-center gap-1 text-sm text-light-color-scheme-gray-500">
                            <MapPin className="size-4" />
                            <p>Thành phố Phú Quốc, Tỉnh Kiên Giang, Viet Nam</p>
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <div className="">
                            <div className="flex items-center gap-1 font-semibold text-light-color-scheme-gray-500">
                                <Clock4 className="size-4" />
                                <p>4 ngày</p>
                            </div>
                        </div>
                        <div className="whitespace-nowrap text-lg font-semibold text-light-color-scheme-primary-700">
                            $154.01
                        </div>
                    </div>
                </div>
            </div>
            {/* Contact Info */}
            <div className="flex flex-col divide-y divide-light-color-scheme-gray-200 rounded-xl border border-light-color-scheme-primary-600 bg-white pb-6 shadow-xs">
                <div className="p-4">
                    <p className="text-lg font-semibold text-light-color-scheme-gray-900">
                        Thông tin liên hệ
                    </p>
                    <span className="text-sm text-light-color-scheme-gray-700">
                        Tên của bạn phải trùng khớp với ID hợp lệ và sẽ được sử
                        dụng cho thanh toán
                    </span>
                </div>
                <div className="px-4 pt-4">
                    <div className="">
                        <Label htmlFor="fullname">
                            <p className="mb-1 text-sm text-light-color-scheme-gray-700">
                                Họ và tên đầy đủ
                                <span className="ml-1 text-light-color-scheme-error-600">
                                    *
                                </span>
                            </p>
                            <Input
                                id="fullname"
                                className="transition-all duration-200 ease-in hover:ring-4 hover:ring-light-color-scheme-primary-300"
                                name="fullname"
                                type="text"
                                placeholder="Nhập họ và tên đầy đủ"
                            />
                        </Label>
                    </div>
                    <div className="mt-4 flex items-center gap-4">
                        <Label htmlFor="email" className="w-6/12">
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
                                placeholder="Nhập email"
                            />
                        </Label>
                        <Label htmlFor="phone" className="w-6/12">
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
                                type="number"
                                placeholder="Nhập số điện thoại"
                            />
                        </Label>
                    </div>
                </div>
            </div>
            {/* Travelers Listing */}
            <div className="flex flex-col divide-y divide-light-color-scheme-gray-200 rounded-xl border border-light-color-scheme-gray-200 bg-white shadow-xs">
                <div className="p-4">
                    <p className="text-lg font-semibold text-light-color-scheme-gray-900">
                        Thông tin của hành khách du lịch
                    </p>
                    <span className="text-sm text-light-color-scheme-gray-700">
                        Tên của bạn phải trùng khớp với ID hợp lệ và sẽ được sử
                        dụng khi khởi hành.
                    </span>
                </div>
                <div className="flex flex-col gap-2 px-4 pb-6 pt-4">
                    <div className="rounded-lg bg-light-color-scheme-gray-50 p-2">
                        <div className="mb-4 flex items-center justify-between">
                            <span className="font-medium text-light-color-scheme-gray-900">
                                Người lớn 1
                            </span>
                            <div className="flex items-center gap-1">
                                <Checkbox id="same" className="size-5" />
                                <Label
                                    htmlFor="same"
                                    className="text-sm font-medium text-light-color-scheme-gray-700"
                                >
                                    Sử dụng thông tin liên hệ giống như trên
                                </Label>
                            </div>
                        </div>
                        <div className="">
                            <div className="">
                                <Label htmlFor="fullname">
                                    <p className="mb-1 text-sm text-light-color-scheme-gray-700">
                                        Họ và tên đầy đủ
                                        <span className="ml-1 text-light-color-scheme-error-600">
                                            *
                                        </span>
                                    </p>
                                    <Input
                                        id="fullname"
                                        className="transition-all duration-200 ease-in hover:ring-4 hover:ring-light-color-scheme-primary-300"
                                        name="fullname"
                                        type="text"
                                        placeholder="Nhập họ và tên đầy đủ"
                                    />
                                </Label>
                            </div>
                            <div className="mt-4 flex items-center gap-4">
                                <Label htmlFor="email" className="w-6/12">
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
                                        placeholder="Nhập email"
                                    />
                                </Label>
                                <Label htmlFor="phone" className="w-6/12">
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
                                        type="number"
                                        placeholder="Nhập số điện thoại"
                                    />
                                </Label>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <div className="w-1/2">
                            <Button
                                className="flex h-fit items-center gap-1 px-2 py-1 text-light-color-scheme-gray-600 hover:bg-light-color-scheme-primary-50"
                                variant="ghost"
                            >
                                <Plus className="size-4" />
                                <p className="text-sm font-semibold">
                                    Thêm người lớn
                                </p>
                            </Button>
                        </div>
                        <div className="w-1/2">
                            <Button
                                className="flex h-fit items-center gap-1 px-2 py-1 text-light-color-scheme-gray-600 hover:bg-light-color-scheme-primary-50"
                                variant="ghost"
                            >
                                <Plus className="size-4" />
                                <p className="text-sm font-semibold">
                                    Thêm trẻ em
                                </p>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            {/* Requests */}
            <div className="flex flex-col divide-y divide-light-color-scheme-gray-200 rounded-xl border border-light-color-scheme-gray-200 bg-white shadow-xs">
                <div className="p-4">
                    <p className="text-lg font-semibold text-light-color-scheme-gray-900">
                        Yêu cầu đặc biệt
                    </p>
                    <span className="text-sm text-light-color-scheme-gray-700">
                        Yêu cầu đặc biệt tuân thủ theo sự có sẵn và không được
                        đảm bảo. Một số yêu cầu có thể phát sinh phí bổ sung.
                    </span>
                </div>
                <div className="flex flex-col gap-4 p-4">
                    {/* Pick-up Request */}
                    <div className="flex flex-wrap gap-3">
                        <Checkbox className="peer/request size-5" />
                        <Label className="text-sm font-medium text-light-color-scheme-gray-700">
                            Vui lòng chỉ định điểm đón
                        </Label>
                        <div className="hidden w-full flex-auto pl-8 peer-data-[state=checked]/request:block">
                            <RadioGroup>
                                <div className="flex items-center space-x-3">
                                    <RadioGroupItem
                                        className="size-5"
                                        id="request-1"
                                        value="1"
                                    />
                                    <Label
                                        htmlFor="request-1"
                                        className="text-sm font-medium text-light-color-scheme-gray-700"
                                    >
                                        Vui lòng đến điểm hẹn đã chỉ định
                                    </Label>
                                </div>
                                <div className="flex flex-wrap items-center gap-3">
                                    <RadioGroupItem
                                        className="peer size-5"
                                        id="request-2"
                                        value="2"
                                    />
                                    <Label
                                        htmlFor="request-2"
                                        className="text-sm font-medium text-light-color-scheme-gray-700"
                                    >
                                        Chọn điểm đón
                                    </Label>
                                    <Label
                                        className="ml-7 hidden w-full peer-data-[state=checked]:block"
                                        htmlFor="address"
                                    >
                                        <p className="mb-1 text-sm text-light-color-scheme-gray-700">
                                            Địa chỉ
                                            <span className="ml-1 text-light-color-scheme-error-600">
                                                *
                                            </span>
                                        </p>
                                        <Input
                                            id="address"
                                            className=""
                                            placeholder="Nhập địa chỉ"
                                        />
                                    </Label>
                                </div>
                            </RadioGroup>
                        </div>
                    </div>
                    {/* Other Requests */}
                    <div className="flex flex-wrap gap-3">
                        <Checkbox className="peer/others size-5" />
                        <Label className="text-sm font-medium text-light-color-scheme-gray-700">
                            Khác
                        </Label>
                        <div className="hidden w-full flex-auto pl-8 peer-data-[state=checked]/others:block">
                            <Textarea
                                className="resize-none"
                                placeholder="Nhập mô tả"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
