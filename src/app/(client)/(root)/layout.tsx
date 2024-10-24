import Header from '@/components/layout/Header'
import React from 'react'

function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <>
            <div className="flex min-h-screen flex-col">
                <Header />
                <main className="flex-1">{children}</main>
            </div>
        </>
    )
}

export default RootLayout
