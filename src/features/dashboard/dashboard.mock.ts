import {
  BarChart3Icon,
  Cake,
  CalendarDays,
  DollarSign,
  PlusCircleIcon,
  UserPlusIcon,
  Users,
} from 'lucide-react'

import { ROUTES } from '@/routes/routes'
import type {
  Announcement,
  QuickAction,
  StatItem,
  UpcomingBirthday,
  UpcomingEvent,
} from './dashboard.types'

// ─── Stats ────────────────────────────────────────────────────────────────────

export const STATS_MOCK: StatItem[] = [
  {
    title: 'Tổng nhân viên',
    value: 48,
    description: 'Tất cả thành viên YU Team',
    icon: Users,
    trend: { value: 2, label: 'thành viên mới tháng này' },
  },
  {
    title: 'Sinh nhật sắp tới',
    value: 5,
    description: 'Trong 30 ngày tới',
    icon: Cake,
    trend: { value: 1, label: 'so với tháng trước' },
  },
  {
    title: 'Sự kiện đang diễn ra',
    value: 3,
    description: 'Sự kiện đang hoạt động',
    icon: CalendarDays,
    trend: { value: 1, label: 'so với tháng trước' },
  },
  {
    title: 'Ngân sách tháng này',
    value: '₫120M',
    description: 'Tổng ngân sách đã phân bổ',
    icon: DollarSign,
    trend: { value: 15, label: '% so với tháng trước' },
  },
]

// ─── Birthdays ────────────────────────────────────────────────────────────────

export const BIRTHDAYS_MOCK: UpcomingBirthday[] = [
  {
    id: 'b1',
    name: 'Nguyễn Thị Lan',
    team: 'Design',
    birthday: '2026-07-02',
    daysUntil: 2,
    initials: 'NL',
  },
  {
    id: 'b2',
    name: 'Trần Văn Minh',
    team: 'Engineering',
    birthday: '2026-07-08',
    daysUntil: 8,
    initials: 'TM',
  },
  {
    id: 'b3',
    name: 'Lê Thị Hoa',
    team: 'Marketing',
    birthday: '2026-07-15',
    daysUntil: 15,
    initials: 'LH',
  },
  {
    id: 'b4',
    name: 'Phạm Quốc Bảo',
    team: 'HR',
    birthday: '2026-07-22',
    daysUntil: 22,
    initials: 'PB',
  },
  {
    id: 'b5',
    name: 'Võ Thị Kim Anh',
    team: 'Finance',
    birthday: '2026-07-28',
    daysUntil: 28,
    initials: 'VA',
  },
]

// ─── Events ───────────────────────────────────────────────────────────────────

export const EVENTS_MOCK: UpcomingEvent[] = [
  {
    id: 'e1',
    title: 'Họp tổng kết tháng 7',
    startDate: '01/07/2026',
    endDate: '01/07/2026',
    location: 'Phòng họp A - Tầng 3',
    status: 'upcoming',
    type: 'meeting',
  },
  {
    id: 'e2',
    title: 'Team Building Q3 2026',
    startDate: '05/07/2026',
    endDate: '06/07/2026',
    location: 'Bà Nà Hills, Đà Nẵng',
    status: 'upcoming',
    type: 'party',
  },
  {
    id: 'e3',
    title: 'Giải Cầu Lông Nội Bộ',
    startDate: '15/07/2026',
    endDate: '15/07/2026',
    location: 'Nhà thi đấu Phú Thọ',
    status: 'upcoming',
    type: 'tournament',
  },
  {
    id: 'e4',
    title: 'Tiệc Sinh Nhật Tập Thể Q3',
    startDate: '20/07/2026',
    endDate: '20/07/2026',
    location: 'Sân thượng văn phòng',
    status: 'ongoing',
    type: 'party',
  },
]

// ─── Announcements ────────────────────────────────────────────────────────────

export const ANNOUNCEMENTS_MOCK: Announcement[] = [
  {
    id: 'a1',
    title: 'Lịch họp thường niên Q3 đã được cập nhật',
    excerpt:
      'Ban lãnh đạo thông báo lịch họp tổng kết Q3 sẽ diễn ra vào ngày 01/07/2026. Toàn thể nhân viên vui lòng sắp xếp lịch tham dự.',
    author: 'Ban Giám Đốc',
    createdAt: '28/06/2026',
    category: 'info',
  },
  {
    id: 'a2',
    title: 'Cập nhật chính sách nghỉ phép năm 2026',
    excerpt:
      'Chính sách nghỉ phép năm 2026 đã được điều chỉnh. Nhân viên được bổ sung thêm 2 ngày nghỉ cá nhân có hưởng lương.',
    author: 'Phòng Nhân Sự',
    createdAt: '25/06/2026',
    category: 'success',
  },
  {
    id: 'a3',
    title: 'Nhắc nhở: Nộp báo cáo công việc tuần',
    excerpt:
      'Nhắc nhở toàn thể nhân viên hoàn thành báo cáo công việc tuần trước 17:00 thứ Sáu hàng tuần.',
    author: 'Phòng Hành Chính',
    createdAt: '23/06/2026',
    category: 'warning',
  },
  {
    id: 'a4',
    title: 'Chào mừng thành viên mới tháng 7',
    excerpt:
      'YU Team trân trọng giới thiệu 2 thành viên mới gia nhập đội ngũ trong tháng 7: Nguyễn Hữu Đức (Engineering) và Trần Thị Mai (Design).',
    author: 'Phòng Nhân Sự',
    createdAt: '01/07/2026',
    category: 'success',
  },
]

// ─── Quick actions ────────────────────────────────────────────────────────────

export const QUICK_ACTIONS_MOCK: QuickAction[] = [
  {
    label: 'Thêm nhân viên',
    icon: UserPlusIcon,
    href: ROUTES.EMPLOYEE.ROOT,
    description: 'Thêm thành viên mới vào hệ thống',
  },
  {
    label: 'Tạo sự kiện',
    icon: PlusCircleIcon,
    href: ROUTES.EVENTS.CREATE,
    description: 'Tạo và quản lý sự kiện mới',
  },
  {
    label: 'Xem báo cáo',
    icon: BarChart3Icon,
    href: ROUTES.REPORTS,
    description: 'Xem báo cáo thống kê chi tiết',
  },
  {
    label: 'Quản lý ngân sách',
    icon: DollarSign,
    href: ROUTES.FINANCE,
    description: 'Theo dõi và phân bổ ngân sách',
  },
]
