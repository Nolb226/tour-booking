import ProfilePopover from '@/components/profile-popover'
import { Button } from '@/components/ui/button'
import { cookies } from 'next/headers'
import Link from 'next/link'
import React from 'react'

function Header() {
   const session = cookies().get('_session')?.value
   return (
      <header className="sticky top-0 z-10 shadow-sm backdrop-blur-sm">
         <div className="bg-[#00000052]">
            <div className="container mx-auto flex h-[68px] items-center justify-between bg-transparent text-white">
               <span className="text-4xl font-semibold text-white">
                  SGUTrip
               </span>
               <div className="">
                  {session ? (
                     <ProfilePopover />
                  ) : (
                     <Button>
                        <Link href={'/login'}>Đăng nhập</Link>
                     </Button>
                  )}
               </div>
            </div>
         </div>
      </header>
   )
}

export default Header
