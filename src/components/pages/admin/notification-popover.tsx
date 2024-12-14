import {
   Popover,
   PopoverContent,
   PopoverTrigger,
} from '@/components/ui/popover'
import { AlertCircleIcon, Bell, SirenIcon } from 'lucide-react'

export default function NotificationPopover() {
   return (
      <div>
         <Popover>
            <PopoverTrigger>
               <Bell className="size-5" />
            </PopoverTrigger>
            <PopoverContent className="flex flex-col gap-2">
               <span className="text-sm font-semibold">Thông báo</span>
               <div className="flex flex-col gap-1 divide-y divide-gray-200">
                  <NotificationItem />
                  <NotificationItem />
                  <NotificationItem />
                  <NotificationItem />
                  <NotificationItem />
               </div>
            </PopoverContent>
         </Popover>
      </div>
   )
}

function NotificationItem() {
   return (
      <div className="flex flex-col gap-1 pt-1">
         <div className="flex items-start gap-1">
            <div className="">
               <AlertCircleIcon className="size-5 text-light-color-scheme-primary-500" />
            </div>
            <div className="flex flex-col gap-1">
               <div className="flex items-center gap-2">
                  <div className="text-sm text-light-color-scheme-primary-500">
                     Tour
                  </div>
                  <div className="size-1 rounded-full bg-gray-400"></div>
                  <span className="text-xs text-gray-500">2/11/2024</span>
               </div>
               <div className="text-sm">Có tour mới vừa được đặt</div>
               <div className="text-xs text-gray-500">
                  Tour đã được thanh toán
               </div>
            </div>
         </div>
      </div>
   )
}
