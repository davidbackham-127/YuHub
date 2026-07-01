export const ROUTES = {
  ROOT: '/',
  DASHBOARD: '/dashboard',
  EMPLOYEE: {
    ROOT: '/nhan-vien',
    DETAIL: '/nhan-vien/:id',
  },
  BIRTHDAY: '/sinh-nhat',
  BIRTHDAY_WORKSPACE: '/sinh-nhat/ai',
  EVENTS: {
    ROOT: '/su-kien',
    DETAIL: '/su-kien/:id',
    CREATE: '/su-kien/tao-moi',
    EDIT: '/su-kien/:id/chinh-sua',
    AI_WORKSPACE: '/su-kien/:id/ai',
  },
  TOURNAMENT: '/giai-dau',
  COMMUNICATION: '/truyen-thong',
  FINANCE: '/tai-chinh',
  REPORTS: '/bao-cao',
  SETTINGS: '/cai-dat',
} as const
