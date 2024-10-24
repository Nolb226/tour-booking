import { cn } from '@/lib/utils'
import Link, { LinkProps } from 'next/link'
import React from 'react'

type MatchCardProps = {} & LinkProps & React.HTMLAttributes<HTMLAnchorElement>

function MatchCard({ className, ...props }: MatchCardProps) {
    return (
        <Link
            className={cn(
                'flex h-24 gap-2 hover:rounded-md hover:bg-light-color-scheme-gray-100',
                className
            )}
            {...props}
        >
            <div className="min-w-[142px] overflow-hidden rounded-lg border border-light-color-scheme-gray-200">
                <img
                    className="aspect-[3/2] h-full w-full object-cover"
                    src="https://api.soctrip.com/storage/files/mobile/vn_20240827T092928122821382_6b0cb9aa-5037-4d05-8fd1-94fb07e06d33_OPTION5.webp"
                    alt=""
                />
            </div>
            <div className="flex flex-col gap-0.5">
                <p className="text-light-color-scheme-gray-900">
                    Phú Quốc - Tour Ngắm Hoàng Hôn và Câu Mực Đem
                </p>
                <div className="flex w-fit items-center justify-start rounded bg-light-color-scheme-gray-100 px-2.5 py-0.5">
                    <span className="text-xs font-medium text-light-color-scheme-gray-700">
                        Thành phố Đà Lạt
                    </span>
                </div>
                <div className="line-clamp-2 w-fit text-sm/4 text-light-color-scheme-gray-500">
                    Đã đến Phú Quốc thì không thể bỏ qua hoạt động ngắm hoàng
                    hôn, mà đặc biệt lại là ngắm hoàng hôn trên tàu đang ra
                    khơi. Buổi tối quý khách sẽ được trải nghiệm câu mực đêm,
                    thấu hiểu được cuộc sống lênh đênh trên biển khơi của ngư
                    dân Phú Quốc. Đối với những quý khách dễ say sóng, tips nhỏ
                    là nên ăn nhẹ để lót dạ bằng bánh mì, bánh bao hoặc bánh
                    ngọt,... và uống 1 viên thuốc chống say sóng 30 phút trước
                    khi lên tàu nhé, điều này giúp quý khách dễ chịu hơn nhiều
                    đấy.
                </div>
            </div>
        </Link>
    )
}

export default MatchCard
