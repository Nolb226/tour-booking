import MatchCard from '@/components/pages/(client)/tour/match-card'
import TourFilter from '@/components/TourFilter'
import React from 'react'

function Page() {
    return (
        <>
            <section className="mb-[32px] flex flex-col items-center gap-5 bg-[linear-gradient(180deg,_#b0e3ff_0%,_#ffffff_66.23%)] pt-[80px] shadow-xs">
                <div className="w-[1200px]">
                    <TourFilter />
                </div>
                <div className="pb-2">
                    Chúng tôi tìm thấy 16 tour theo tìm kiếm của quý khách
                </div>
            </section>
            <section className="mx-auto mb-[32px] flex w-[1200px] gap-6 pt-0 md:pt-4">
                <div className="w-2/3 rounded-lg border border-light-color-scheme-gray-200 bg-white p-4">
                    <div className="">
                        <span className="text-lg font-semibold text-light-color-scheme-gray-900">
                            Tour
                        </span>
                    </div>
                    <ul className="mt-4 flex flex-col gap-2">
                        <li>
                            <MatchCard href={'/'} />
                        </li>
                        <li>
                            <MatchCard href={'/'} />
                        </li>
                        <li>
                            <MatchCard href={'/'} />
                        </li>
                        <li>
                            <MatchCard href={'/'} />
                        </li>
                        <li>
                            <MatchCard href={'/'} />
                        </li>
                        <li>
                            <MatchCard href={'/'} />
                        </li>
                        <li>
                            <MatchCard href={'/'} />
                        </li>
                        <li>
                            <MatchCard href={'/'} />
                        </li>
                        <li>
                            <MatchCard href={'/'} />
                        </li>
                        <li>
                            <MatchCard href={'/'} />
                        </li>
                        <li>
                            <MatchCard href={'/'} />
                        </li>
                        <li>
                            <MatchCard href={'/'} />
                        </li>
                    </ul>
                </div>
                <div className="w-1/3"></div>
            </section>
        </>
    )
}

export default Page
