import Header from '@/components/layout/Header'
import React from 'react'

function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <>
            <Header />
            <main className="min-h-screen">{children}</main>;
        </>
    )
}

export default RootLayout
