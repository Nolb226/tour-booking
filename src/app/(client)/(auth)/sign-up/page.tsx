'use client'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import Link from 'next/link'
import { useState } from 'react'

export default function Page() {
    const [hasConfirm, setHasConfirm] = useState(false)
    return (
        <>
            <h2 className="mt-3 text-2xl font-bold text-light-color-scheme-gray-900">
                Đăng ký
            </h2>
            <form action="" className="mt-8 flex w-full flex-col gap-5">
                <div className="flex gap-4">
                    <Label>
                        <span className="text-sm font-medium text-light-color-scheme-gray-700">
                            Họ
                        </span>
                        <Input placeholder="ví dụ: Nguyễn" className="mt-1" />
                    </Label>
                    <Label>
                        <span className="text-sm font-medium text-light-color-scheme-gray-700">
                            Tên
                        </span>
                        <Input placeholder="ví dụ: Văn A" className="mt-1" />
                    </Label>
                </div>
                <Label>
                    <span className="text-sm font-medium text-light-color-scheme-gray-700">
                        Email
                    </span>
                    <Input
                        placeholder="ví dụ: your@email.com"
                        className="mt-1"
                    />
                </Label>
                <Label>
                    <span className="text-sm font-medium text-light-color-scheme-gray-700">
                        Mật khẩu
                    </span>
                    <Input placeholder="********" className="mt-1" />
                </Label>
                <Label>
                    <span className="text-sm font-medium text-light-color-scheme-gray-700">
                        Xác nhật mật khẩu
                    </span>
                    <Input placeholder="********" className="mt-1" />
                </Label>
                <div className="flex gap-[5px]">
                    <Checkbox
                        checked={hasConfirm}
                        onCheckedChange={() => setHasConfirm(!hasConfirm)}
                    />
                    <span className="text-sm text-light-color-scheme-gray-600">
                        Đồng ý với chúng tôi về {''}
                        <Link
                            target="_blank"
                            href={'/help-center/term'}
                            className="cursor-pointer text-sm font-semibold text-light-color-scheme-primary-700 no-underline"
                        >
                            điều khoản
                        </Link>
                        {', '}
                        <Link
                            target="_blank"
                            href={'/help-center/privacy'}
                            className="cursor-pointer text-sm font-semibold text-light-color-scheme-primary-700 no-underline"
                        >
                            chính sách bảo mật
                        </Link>
                        {' và '}
                        <Link
                            href={'/help-center/cookie'}
                            target="_blank"
                            className="cursor-pointer text-sm font-semibold text-light-color-scheme-primary-700 no-underline"
                        >
                            chính sách cookies
                        </Link>
                    </span>
                </div>
                <Button disabled={!hasConfirm} className="px-2.5 py-4">
                    Đăng ký
                </Button>
            </form>
            <div className="mt-5 flex h-5 items-center justify-center gap-1 text-sm text-gray-600">
                <span>Bạn đã có tài khoản?</span>
                <Link
                    className="cursor-pointer text-sm font-semibold text-light-color-scheme-primary-700 no-underline"
                    href={'/login'}
                >
                    Đăng nhập
                </Link>
            </div>
        </>
    )
}
