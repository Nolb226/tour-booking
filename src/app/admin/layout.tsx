import { AppSidebar } from '@/components/app-sidebar'
import NotificationPopover from '@/components/pages/admin/notification-popover'
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'

export default function Layout({ children }: { children: React.ReactNode }) {
   return (
      <SidebarProvider className="bg-gradient-to-r from-light-color-scheme-primary-300 from-25% to-light-color-scheme-primary-600">
         <AppSidebar />
         <main className="m-1.5 flex flex-1 flex-col divide-y-2 divide-light-color-scheme-gray-200 rounded-lg bg-white">
            <div className="flex h-[49px] items-center justify-between pl-3.5 pr-5 pt-1.5">
               <SidebarTrigger className="size-5" />
               <NotificationPopover />
            </div>

            <section className="flex-1 pb-1.5">{children}</section>
         </main>
      </SidebarProvider>
   )
}
