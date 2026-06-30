export const ROUTES = {
  ROOT: '/',
  DASHBOARD: '/dashboard',
  EMPLOYEE: {
    ROOT: '/nhan-vien',
    DETAIL: '/nhan-vien/:id',
  },
  BIRTHDAY: '/sinh-nhat',
  EVENTS: {
    ROOT: '/su-kien',
    DETAIL: '/su-kien/:id',
    CREATE: '/su-kien/tao-moi',
  },
  TOURNAMENT: '/giai-dau',
  COMMUNICATION: '/truyen-thong',
  FINANCE: '/tai-chinh',
  REPORTS: '/bao-cao',
  SETTINGS: '/cai-dat',
} as const
