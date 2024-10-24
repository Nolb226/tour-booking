import { MapPin } from 'lucide-react'
import React from 'react'

function OutstandingTourCard() {
    return (
        <div className="box-border flex h-[254px] max-w-[calc(50%_-_4px)] flex-col rounded-lg border border-light-color-scheme-gray-100 border-transparent shadow-xs hover:shadow-md sm:max-w-[180px] md:my-2 md:h-[286px] md:max-w-[227px]">
            <div className="rounded-lg border-light-color-scheme-primary-700 ring-light-color-scheme-primary-100 hover:border hover:ring">
                <div className="outstanding-card rounded-t-lg p-3">
                    <img src="/demo-ost.webp" className="rounded-md" alt="" />
                </div>
                <div className="flex flex-col gap-2 rounded-b-lg p-3 text-light-color-scheme-gray-500">
                    <h3 className="overflow-hidden truncate text-light-color-scheme-gray-700">
                        Hà Nội - New York - Philadelphia - Delaware - Washington
                        DC - Las Vegas - Grand Canyon (Đại Vực) - Los Angeles -
                        Universal Studio - San Diego 10N9Đ
                    </h3>
                    <div className="">
                        <span className="flex items-center gap-1">
                            <MapPin className="size-4" />
                            <span className="truncate text-xs">
                                City of New York
                            </span>
                        </span>
                        <div className="mt-5 flex justify-end text-lg font-semibold text-orange-600">
                            <span>đ81,043,615</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OutstandingTourCard
