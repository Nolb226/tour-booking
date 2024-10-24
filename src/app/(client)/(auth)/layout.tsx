export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <main className="flex h-fit min-h-screen items-center justify-center bg-[url('/mobile-background.png')] bg-cover bg-left-bottom min-[920px]:bg-[url('/Background.png')] xl:justify-end xl:gap-[100px] min-[1500px]:justify-center min-[1500px]:gap-[200px]">
            <div className="min-h-fit w-full max-w-[510px] items-center justify-center min-[920px]:ml-[300px] xl:ml-0">
                <div className="flex min-h-fit w-full flex-col items-center justify-center p-8">
                    <div className="">
                        <span className="text-4xl font-semibold text-light-color-scheme-primary-600">
                            SGUTrip
                        </span>
                    </div>
                    {children}
                </div>
            </div>
        </main>
    )
}
