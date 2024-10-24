import { Mail, MapPin, PhoneCall } from 'lucide-react'
import React from 'react'

function Footer() {
    return (
        <footer className="border-t border-light-color-scheme-gray-200 bg-white">
            <div className="container mx-auto flex flex-col gap-4 divide-y-2 divide-dashed divide-light-color-scheme-gray-200 py-12">
                <div className="grid grid-cols-4">
                    <div className="flex flex-col gap-4">
                        <h4 className="font-semibold text-light-color-scheme-gray-900">
                            Về SguTrip
                        </h4>
                        <ul className="flex flex-col items-start gap-2">
                            <li className="text-start text-sm font-normal text-light-color-scheme-gray-700">
                                Về chúng tôi
                            </li>
                            <li className="text-start text-sm font-normal text-light-color-scheme-gray-700">
                                Điều khoản và điều kiện
                            </li>
                            <li className="text-start text-sm font-normal text-light-color-scheme-gray-700">
                                Chính sách bảo mật
                            </li>
                            <li className="text-start text-sm font-normal text-light-color-scheme-gray-700">
                                Chính sách cookie
                            </li>
                            <li className="text-start text-sm font-normal text-light-color-scheme-gray-700">
                                Việc làm
                            </li>
                            <li className="text-start text-sm font-normal text-light-color-scheme-gray-700">
                                Trung tâm hỗ trợ
                            </li>
                        </ul>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h4 className="font-semibold text-light-color-scheme-gray-900">
                            Đặt chỗ
                        </h4>
                        <ul className="flex flex-col items-start gap-2">
                            <li className="text-start text-sm font-normal text-light-color-scheme-gray-700">
                                Tour
                            </li>
                        </ul>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h4 className="font-semibold text-light-color-scheme-gray-900">
                            Các dịch vụ khác
                        </h4>
                        <ul className="flex flex-col items-start gap-2">
                            <li className="text-start text-sm font-normal text-light-color-scheme-gray-700">
                                Trở thành đối tác của chúng tôi
                            </li>
                            <li className="text-start text-sm font-normal text-light-color-scheme-gray-700">
                                Phản hồi ý kiến
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="flex-start flex pt-4">
                    <div className="flex flex-col gap-4">
                        <h4 className="font-semibold text-light-color-scheme-gray-900">
                            VIỆT NAM
                        </h4>
                        <ul className="flex flex-col items-start gap-2">
                            <li className="flex items-center space-x-2 text-start text-sm font-normal text-light-color-scheme-gray-700">
                                <PhoneCall className="size-4 text-light-color-scheme-orange-500" />
                                <a href="tel:0363855***">0363855***</a>
                            </li>
                            <li className="flex items-center space-x-2 text-start text-sm font-normal text-light-color-scheme-gray-700">
                                <Mail className="size-4 text-light-color-scheme-orange-500" />
                                <a href="mailto:hn26677@gmail.com">
                                    hn26677@gmail.com
                                </a>
                            </li>
                            <li className="flex items-center space-x-2 text-start text-sm font-normal text-light-color-scheme-gray-700">
                                <MapPin className="size-4 text-light-color-scheme-orange-500" />
                                <p>Địa chỉ</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
