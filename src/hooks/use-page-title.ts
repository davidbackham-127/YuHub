import { useLocation } from 'react-router-dom'
import { ROUTES } from '@/routes/routes'

const PAGE_TITLES: Record<string, string> = {
  [ROUTES.DASHBOARD]: 'Dashboard',
  [ROUTES.EMPLOYEE.ROOT]: 'Nhân viên',
  [ROUTES.BIRTHDAY]: 'Sinh nhật',
  [ROUTES.EVENTS.ROOT]: 'Sự kiện',
  [ROUTES.EVENTS.CREATE]: 'Tạo sự kiện',
  [ROUTES.EMPLOYEE.DETAIL]: 'Chi tiết nhân viên',
  [ROUTES.TOURNAMENT]: 'Giải đấu',
  [ROUTES.COMMUNICATION]: 'Truyền thông',
  [ROUTES.FINANCE]: 'Tài chính',
  [ROUTES.REPORTS]: 'Báo cáo',
  [ROUTES.SETTINGS]: 'Cài đặt',
}

/**
 * Resolves a human-readable page title from the current pathname.
 * Tries exact match first, then prefix match for dynamic segments (e.g. /nhan-vien/:id).
 */
export const usePageTitle = (): string => {
  const { pathname } = useLocation()

  if (PAGE_TITLES[pathname]) return PAGE_TITLES[pathname]

  const matched = Object.entries(PAGE_TITLES).find(([route]) =>
    pathname.startsWith(route + '/')
  )
  return matched ? matched[1] : 'YU Hub'
}
