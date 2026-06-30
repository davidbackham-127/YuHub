import { NavLink, useLocation } from 'react-router-dom'
import {
  BarChart3,
  Cake,
  CalendarDays,
  DollarSign,
  LayoutDashboard,
  Megaphone,
  Settings,
  Trophy,
  Users,
} from 'lucide-react'

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  SidebarSeparator,
} from '@/components/ui/sidebar'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { ROUTES } from '@/routes/routes'

const mainNavItems = [
  { label: 'Dashboard', icon: LayoutDashboard, href: ROUTES.DASHBOARD },
  { label: 'Nhân viên', icon: Users, href: ROUTES.EMPLOYEE.ROOT },
  { label: 'Sinh nhật', icon: Cake, href: ROUTES.BIRTHDAY },
  { label: 'Sự kiện', icon: CalendarDays, href: ROUTES.EVENTS.ROOT },
  { label: 'Giải đấu', icon: Trophy, href: ROUTES.TOURNAMENT },
  { label: 'Truyền thông', icon: Megaphone, href: ROUTES.COMMUNICATION },
]

const secondaryNavItems = [
  { label: 'Tài chính', icon: DollarSign, href: ROUTES.FINANCE },
  { label: 'Báo cáo', icon: BarChart3, href: ROUTES.REPORTS },
]

const bottomNavItems = [
  { label: 'Cài đặt', icon: Settings, href: ROUTES.SETTINGS },
]

const AppSidebar = () => {
  const location = useLocation()

  const isActive = (href: string) =>
    location.pathname === href || location.pathname.startsWith(href + '/')

  return (
    <Sidebar collapsible="icon">
      {/* Logo */}
      <SidebarHeader className="px-3 py-4">
        <div className="flex items-center gap-2 overflow-hidden">
          <div className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-orange-500 text-white">
            <span className="text-sm font-bold">YU</span>
          </div>
          <span className="truncate text-base font-semibold text-sidebar-foreground group-data-[collapsible=icon]:hidden">
            YU Hub
          </span>
        </div>
      </SidebarHeader>

      <SidebarSeparator />

      <SidebarContent>
        {/* Main navigation */}
        <SidebarGroup>
          <SidebarGroupLabel>Quản lý</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {mainNavItems.map((item) => (
                <SidebarMenuItem key={item.href}>
                  <SidebarMenuButton
                    render={<NavLink to={item.href} />}
                    isActive={isActive(item.href)}
                    tooltip={item.label}
                  >
                    <item.icon />
                    <span>{item.label}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarSeparator />

        {/* Secondary navigation */}
        <SidebarGroup>
          <SidebarGroupLabel>Tài chính & Báo cáo</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {secondaryNavItems.map((item) => (
                <SidebarMenuItem key={item.href}>
                  <SidebarMenuButton
                    render={<NavLink to={item.href} />}
                    isActive={isActive(item.href)}
                    tooltip={item.label}
                  >
                    <item.icon />
                    <span>{item.label}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarSeparator />

      {/* Bottom: settings + user */}
      <SidebarFooter className="gap-1 pb-3">
        <SidebarMenu>
          {bottomNavItems.map((item) => (
            <SidebarMenuItem key={item.href}>
              <SidebarMenuButton
                render={<NavLink to={item.href} />}
                isActive={isActive(item.href)}
                tooltip={item.label}
              >
                <item.icon />
                <span>{item.label}</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>

        <SidebarSeparator />

        {/* User profile */}
        <div className="flex items-center gap-2 overflow-hidden rounded-md p-2 group-data-[collapsible=icon]:justify-center">
          <Avatar size="sm" className="shrink-0">
            <AvatarImage src="" alt="User" />
            <AvatarFallback>YU</AvatarFallback>
          </Avatar>
          <div className="min-w-0 flex-1 group-data-[collapsible=icon]:hidden">
            <p className="truncate text-xs font-medium text-sidebar-foreground">
              YU Member
            </p>
            <p className="truncate text-xs text-sidebar-foreground/60">
              yu@ivs-eli.com
            </p>
          </div>
        </div>
      </SidebarFooter>

      <SidebarRail />
    </Sidebar>
  )
}

export default AppSidebar
