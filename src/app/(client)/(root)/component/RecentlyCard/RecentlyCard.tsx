import Link from 'next/link'
import React from 'react'

function RecentlyCard() {
    return (
        <div className="shadow-sm">
            <Link href={'/'}>
                {/* Container */}
                <div className="flex p-1.5"></div>
                {/* Float tags */}
                <div className=""></div>
            </Link>
        </div>
    )
}

export default RecentlyCard
