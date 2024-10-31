import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen">
            <div className="booking-layout-header sticky top-0 z-10 h-[6.5rem] pb-12 pt-4 shadow-sm">
                <div className="mx-auto flex max-w-[75rem] items-center justify-end px-3 xl:px-0">
                    <div className="flex items-center gap-3">
                        <Avatar>
                            <AvatarImage />
                            <AvatarFallback>Te</AvatarFallback>
                        </Avatar>
                        <p className="text-nowrap text-sm font-semibold text-white">
                            Khánh Hoàng
                        </p>
                    </div>
                </div>
            </div>
            <div className="bg-white bg-opacity-80 bg-[url('/background-payment.png')] bg-contain bg-no-repeat">
                {children}
                <div className="text-md mt-8 flex h-[4.5rem] w-full items-center justify-center font-medium text-light-color-scheme-gray-500 sm:text-base">
                    © 2024 Soctrip. Tất cả các quyền đã được bảo lưu
                </div>
            </div>
        </div>
    )
}
