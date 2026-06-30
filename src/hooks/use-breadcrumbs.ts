import { useLocation } from 'react-router-dom'
import { ROUTES } from '@/routes/routes'

export interface BreadcrumbItem {
  /** Display label */
  label: string
  /** Navigation target. Undefined means this is the current (last) item. */
  href?: string
}

/**
 * Resolves breadcrumb items from the current pathname.
 * Handles nested routes (detail pages) by returning a parent + child pair.
 */
export const useBreadcrumbs = (): BreadcrumbItem[] => {
  const { pathname } = useLocation()

  // ─── Employee ──────────────────────────────────────────────────────────────
  if (pathname === ROUTES.EMPLOYEE.ROOT) {
    return [{ label: 'Nhân viên' }]
  }
  if (pathname.startsWith(ROUTES.EMPLOYEE.ROOT + '/')) {
    return [
      { label: 'Nhân viên', href: ROUTES.EMPLOYEE.ROOT },
      { label: 'Chi tiết nhân viên' },
    ]
  }

  // ─── Events ────────────────────────────────────────────────────────────────
  if (pathname === ROUTES.EVENTS.ROOT) {
    return [{ label: 'Sự kiện' }]
  }
  if (pathname === ROUTES.EVENTS.CREATE) {
    return [
      { label: 'Sự kiện', href: ROUTES.EVENTS.ROOT },
      { label: 'Tạo sự kiện' },
    ]
  }
  if (pathname.startsWith(ROUTES.EVENTS.ROOT + '/')) {
    return [
      { label: 'Sự kiện', href: ROUTES.EVENTS.ROOT },
      { label: 'Chi tiết sự kiện' },
    ]
  }

  // ─── Flat routes ───────────────────────────────────────────────────────────
  const flat: Record<string, string> = {
    [ROUTES.DASHBOARD]: 'Dashboard',
    [ROUTES.BIRTHDAY]: 'Sinh nhật',
    [ROUTES.TOURNAMENT]: 'Giải đấu',
    [ROUTES.COMMUNICATION]: 'Truyền thông',
    [ROUTES.FINANCE]: 'Tài chính',
    [ROUTES.REPORTS]: 'Báo cáo',
    [ROUTES.SETTINGS]: 'Cài đặt',
  }

  if (flat[pathname]) {
    return [{ label: flat[pathname] }]
  }

  return [{ label: 'YU Hub' }]
}
