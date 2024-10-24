import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import Link from 'next/link'

export default function Page() {
    return (
        <>
            <h2 className="mt-3 text-2xl font-bold text-light-color-scheme-gray-900">
                Đăng nhập
            </h2>
            <form action="" className="mt-8 flex w-full flex-col gap-5">
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
                <Button className="px-2.5 py-4">Đăng nhập</Button>
            </form>
            <div className="mt-5 flex h-5 items-center justify-center gap-1 text-sm text-gray-600">
                <span>Bạn chưa có tài khoản?</span>
                <Link
                    className="cursor-pointer text-sm font-semibold text-light-color-scheme-primary-700 no-underline"
                    href={'/sign-up'}
                >
                    Đăng ký
                </Link>
            </div>
        </>
    )
}
