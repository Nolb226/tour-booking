import {
   Popover,
   PopoverContent,
   PopoverTrigger,
} from '@/components/ui/popover'
import { AvatarFallback, AvatarImage, Avatar } from './ui/avatar'
import { EarthIcon, LogOutIcon, User2 } from 'lucide-react'
import MyBookingIcon from './icons/my-booking-icon'
import SavedListIcon from './icons/saved-list'
import { Button } from './ui/button'
import Link from 'next/link'

export default async function ProfilePopover() {
   return (
      <Popover>
         <PopoverTrigger>
            <Avatar>
               <AvatarFallback>
                  <User2 className="size-5 text-light-color-scheme-gray-500" />
               </AvatarFallback>
               <AvatarImage src="https://randomuser.me/api/portraits" />
            </Avatar>
         </PopoverTrigger>
         <PopoverContent
            className="h-fit w-96 rounded-lg border border-light-color-scheme-gray-200 bg-white p-0 shadow-lg"
            align="end"
         >
            <div className="h-[116px] flex-col rounded-t-lg border-none bg-gradient-to-l from-[#0658CC] to-[#1879FF] px-4 md:pt-10">
               <div className="z-10 flex h-[130px] w-full flex-col rounded-xl border-2 border-light-color-scheme-gray-200 bg-white shadow-sm max-md:mt-3">
                  <div className="flex items-center justify-between p-4">
                     <div className="flex items-center gap-1">
                        <Avatar>
                           <AvatarFallback>
                              <User2 className="size-5 text-light-color-scheme-gray-500" />
                           </AvatarFallback>
                           <AvatarImage src="https://randomuser.me/api/portraits" />
                        </Avatar>
                        <div className="font-semibold text-black">
                           Nguyễn Văn A
                        </div>
                     </div>
                     <div className="">
                        <Button variant={'ghost'} className="text-destructive">
                           <LogOutIcon className="size-5" />
                        </Button>
                     </div>
                  </div>
               </div>
            </div>
            <ul className="flex h-auto w-full flex-col self-stretch border-none pb-5 pt-16 text-light-color-scheme-gray-700 md:pt-16">
               <li>
                  <Link
                     className="flex cursor-pointer items-center gap-2 px-4 py-2 hover:bg-light-color-scheme-gray-100"
                     href={'/my-bookings'}
                  >
                     <MyBookingIcon className="size-6" />
                     <p className="font-semibold">Trang cá nhân</p>
                  </Link>
               </li>
               <li>
                  <Link
                     className="flex cursor-pointer items-center gap-2 px-4 py-2 hover:bg-light-color-scheme-gray-100"
                     href={'/my-bookings'}
                  >
                     <MyBookingIcon className="size-6" />
                     <p className="font-semibold">Đặt chỗ của tôi</p>
                  </Link>
               </li>
               <li>
                  <Link
                     className="flex cursor-pointer items-center gap-2 px-4 py-2 hover:bg-light-color-scheme-gray-100"
                     href={'/saved-tour'}
                  >
                     <SavedListIcon className="size-6" />
                     <p className="font-semibold">Danh sách đã lưu</p>
                  </Link>
               </li>
            </ul>
         </PopoverContent>
      </Popover>
   )
}
