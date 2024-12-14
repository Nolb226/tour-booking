import {
   Home,
   Inbox,
   Percent,
   ScrollTextIcon,
   Search,
   Settings,
   User,
} from 'lucide-react'

import {
   Sidebar,
   SidebarContent,
   SidebarGroup,
   SidebarGroupContent,
   SidebarGroupLabel,
   SidebarMenu,
   SidebarMenuButton,
   SidebarMenuItem,
} from '@/components/ui/sidebar'

// Menu items.
const items = [
   {
      title: 'Home',
      url: '#',
      icon: Home,
   },
   {
      title: 'Tour',
      url: '/tour',
      icon: Inbox,
   },
   {
      title: 'Bills',
      url: '/bills',
      icon: ScrollTextIcon,
   },
   {
      title: 'Users',
      url: '/user',
      icon: User,
   },
   {
      title: 'Settings',
      url: '#',
      icon: Settings,
   },
]

export function AppSidebar() {
   return (
      <Sidebar className="!border-r-0">
         <SidebarContent className="bg-light-color-scheme-primary-300">
            <SidebarGroup>
               <SidebarGroupLabel>Application</SidebarGroupLabel>
               <SidebarGroupContent>
                  <SidebarMenu>
                     {items.map((item) => (
                        <SidebarMenuItem key={item.title}>
                           <SidebarMenuButton asChild>
                              <a href={`/admin/${item.url}`}>
                                 <item.icon />
                                 <span>{item.title}</span>
                              </a>
                           </SidebarMenuButton>
                        </SidebarMenuItem>
                     ))}
                  </SidebarMenu>
               </SidebarGroupContent>
            </SidebarGroup>
         </SidebarContent>
      </Sidebar>
   )
}
