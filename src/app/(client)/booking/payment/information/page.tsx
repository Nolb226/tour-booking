export default function Page() {
    return (
        <>
            <div className="flex flex-col divide-y divide-light-color-scheme-gray-200 rounded-xl border border-gray-200 bg-white shadow-xs">
                <div className="h-[3.75rem] w-full p-4 text-xl font-semibold text-gray-900">
                    Thông tin đặt chỗ
                </div>
                <div className="p-4">
                    <span className="mb-2 text-sm font-medium text-gray-700">
                        Thông tin liên hệ
                    </span>
                    <div className="flex flex-col gap-0.5">
                        <p className="text-md font-semibold text-gray-900">
                            Hoàng Nguyễn
                        </p>
                        <p className="text-sm font-normal text-light-color-scheme-gray-900">
                            +8412345678
                        </p>
                        <p className="text-sm font-normal text-light-color-scheme-gray-900">
                            your@gmail.com
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}
