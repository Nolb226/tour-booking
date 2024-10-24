import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { MapPin, Play } from 'lucide-react'
import React from 'react'

interface TourCardProps extends React.HTMLAttributes<HTMLDivElement> {}

function TourCard({ className, ...props }: TourCardProps) {
    return (
        <div
            className={cn(
                'flex cursor-pointer flex-col hover:rounded-lg hover:bg-light-color-scheme-gray-100',
                className
            )}
            {...props}
        >
            {/* Body */}
            <div className="flex gap-2">
                {/* Thumbnail */}
                <div className="h-[100px] w-[130px] overflow-hidden rounded-lg md:h-[120px] md:w-[160px]">
                    <img
                        src="https://api.soctrip.com/storage/files/mobile/vn_20240926T093344594790967_8600044b-8fad-4a34-bee7-bca187da4c67_5fd1d19514103.webp"
                        alt=""
                        className="h-full w-full object-cover"
                    />
                </div>
                {/* Detail */}
                <div className="flex w-9/12 flex-col gap-2">
                    <div className="">
                        <h3 className="text-sm font-semibold uppercase text-light-color-scheme-gray-900 md:text-base">
                            Đà Lạt - tour giao lưu văn hóa cồng chiêng
                        </h3>
                    </div>
                    <div className="flex items-center gap-1">
                        <MapPin className="size-4 text-light-color-scheme-gray-500" />
                        <p className="text-sm font-semibold text-light-color-scheme-gray-500">
                            Tỉnh lâm đồng, Việt nam
                        </p>
                    </div>
                    <div className="flex items-center justify-start">
                        <div className="rounded-2xl bg-light-color-scheme-rose-50 px-2.5 py-0.5">
                            <span className="text-xs font-semibold text-light-color-scheme-rose-700">
                                Thành phố Đà Lạt
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            {/* Footer */}
            <div className="flex justify-between p-2 md:p-3">
                <div className="flex items-center gap-2">
                    <span className="text-lg font-semibold text-orange-600 md:text-2xl">
                        đ352,858
                    </span>
                    <span className="text-sm font-medium text-light-color-scheme-gray-400 line-through md:text-base">
                        đ504,082
                    </span>
                </div>
                <div className="flex gap-2">
                    <Button className="text-sm font-semibold">Chi tiết</Button>
                    <Button
                        variant="outline"
                        className="group rounded-full"
                        size="icon"
                    >
                        <Play className="size-4 fill-light-color-scheme-primary-600 group-hover:fill-white" />
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default TourCard
