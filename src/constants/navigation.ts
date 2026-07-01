import type { LucideIcon } from 'lucide-react'
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

import { ROUTES } from '@/routes/routes'

export interface NavItem {
  label: string
  icon: LucideIcon
  href: string
}

export interface NavGroup {
  label: string
  items: NavItem[]
}

/** Primary app navigation — Quản lý */
export const mainNavItems: NavItem[] = [
  { label: 'Dashboard', icon: LayoutDashboard, href: ROUTES.DASHBOARD },
  { label: 'Nhân viên', icon: Users, href: ROUTES.EMPLOYEE.ROOT },
  { label: 'Sinh nhật', icon: Cake, href: ROUTES.BIRTHDAY },
  { label: 'Sự kiện', icon: CalendarDays, href: ROUTES.EVENTS.ROOT },
  { label: 'Giải đấu', icon: Trophy, href: ROUTES.TOURNAMENT },
  { label: 'Truyền thông', icon: Megaphone, href: ROUTES.COMMUNICATION },
]

/** Finance & reporting navigation */
export const financeNavItems: NavItem[] = [
  { label: 'Tài chính', icon: DollarSign, href: ROUTES.FINANCE },
  { label: 'Báo cáo', icon: BarChart3, href: ROUTES.REPORTS },
]

/** System navigation — shown in footer */
export const systemNavItems: NavItem[] = [
  { label: 'Cài đặt', icon: Settings, href: ROUTES.SETTINGS },
]
