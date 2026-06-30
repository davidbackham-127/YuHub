import { NavLink, useLocation } from 'react-router-dom'

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
import {
  mainNavItems,
  financeNavItems,
  systemNavItems,
  type NavItem,
} from './nav-items'

// ─── Helpers ──────────────────────────────────────────────────────────────────

/**
 * Returns true if the given href matches the current pathname.
 * Handles both exact matches and prefix matches for nested routes
 * (e.g. /nhan-vien matches /nhan-vien/123).
 */
const matchesRoute = (pathname: string, href: string): boolean =>
  pathname === href || pathname.startsWith(href + '/')

// ─── NavMenuGroup ──────────────────────────────────────────────────────────────

interface NavMenuGroupProps {
  label: string
  items: NavItem[]
  pathname: string
}

/**
 * Renders a labelled group of sidebar menu items.
 * Adds aria-current="page" to the active link for screen readers.
 */
const NavMenuGroup = ({ label, items, pathname }: NavMenuGroupProps) => (
  <SidebarGroup>
    <SidebarGroupLabel>{label}</SidebarGroupLabel>
    <SidebarGroupContent>
      <SidebarMenu>
        {items.map((item) => {
          const active = matchesRoute(pathname, item.href)
          return (
            <SidebarMenuItem key={item.href}>
              <SidebarMenuButton
                render={
                  <NavLink
                    to={item.href}
                    aria-current={active ? 'page' : undefined}
                  />
                }
                isActive={active}
                tooltip={item.label}
              >
                <item.icon aria-hidden="true" />
                <span>{item.label}</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          )
        })}
      </SidebarMenu>
    </SidebarGroupContent>
  </SidebarGroup>
)

// ─── AppSidebar ────────────────────────────────────────────────────────────────

const AppSidebar = () => {
  const { pathname } = useLocation()

  return (
    <Sidebar collapsible="icon">
      {/* Brand logo — links to Dashboard */}
      <SidebarHeader className="px-3 py-4">
        <NavLink
          to={ROUTES.DASHBOARD}
          className="flex items-center gap-2 overflow-hidden rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sidebar-ring"
          aria-label="YU Hub — Trang chủ"
        >
          <div
            aria-hidden="true"
            className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-orange-500 text-white"
          >
            <span className="text-sm font-bold">YU</span>
          </div>
          <span className="truncate text-base font-semibold text-sidebar-foreground group-data-[collapsible=icon]:hidden">
            YU Hub
          </span>
        </NavLink>
      </SidebarHeader>

      <SidebarSeparator />

      {/* Main navigation */}
      <SidebarContent>
        <nav aria-label="Menu chính">
          <NavMenuGroup
            label="Quản lý"
            items={mainNavItems}
            pathname={pathname}
          />

          <SidebarSeparator />

          <NavMenuGroup
            label="Tài chính & Báo cáo"
            items={financeNavItems}
            pathname={pathname}
          />
        </nav>
      </SidebarContent>

      <SidebarSeparator />

      {/* Footer: system nav + user profile */}
      <SidebarFooter className="gap-1 pb-3">
        <nav aria-label="Menu hệ thống">
          <SidebarMenu>
            {systemNavItems.map((item) => {
              const active = matchesRoute(pathname, item.href)
              return (
                <SidebarMenuItem key={item.href}>
                  <SidebarMenuButton
                    render={
                      <NavLink
                        to={item.href}
                        aria-current={active ? 'page' : undefined}
                      />
                    }
                    isActive={active}
                    tooltip={item.label}
                  >
                    <item.icon aria-hidden="true" />
                    <span>{item.label}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              )
            })}
          </SidebarMenu>
        </nav>

        <SidebarSeparator />

        {/* User profile */}
        <div
          className="flex items-center gap-2 overflow-hidden rounded-md p-2 group-data-[collapsible=icon]:justify-center"
          aria-label="Thông tin người dùng"
        >
          <Avatar size="sm" className="shrink-0">
            <AvatarImage src="" alt="" />
            <AvatarFallback aria-hidden="true">YU</AvatarFallback>
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

      {/* Drag rail to resize on desktop */}
      <SidebarRail />
    </Sidebar>
  )
}

export default AppSidebar
