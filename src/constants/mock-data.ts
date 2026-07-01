import { addDays, format, subYears } from 'date-fns'
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
import type { Employee } from '@/features/employee/employee.types'
import type {
  Announcement,
  QuickAction,
  StatItem,
  UpcomingBirthday,
  UpcomingEvent,
} from '@/features/dashboard/dashboard.types'
import type { BirthdayEvent } from '@/features/birthday/birthday.types'
import type { Event } from '@/features/events/events.types'
import type { Transaction, BudgetSummary } from '@/features/finance/finance.types'

const today = new Date()

// Helper to generate a birthDate that ensures a specific age and relative day
const generateBirthDate = (age: number, daysOffset: number) => {
  const targetDay = addDays(today, daysOffset)
  const birthDate = subYears(targetDay, age)
  return format(birthDate, 'yyyy-MM-dd')
}

// ─── Dashboard ────────────────────────────────────────────────────────────────

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

export const DASHBOARD_BIRTHDAYS_MOCK: UpcomingBirthday[] = [
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

export const DASHBOARD_EVENTS_MOCK: UpcomingEvent[] = [
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

// ─── Events ───────────────────────────────────────────────────────────────────

export const EVENTS_MOCK: Event[] = [
  {
    id: 'EVT-001',
    title: 'Giải đấu PES Thường niên 2026',
    category: 'Giải đấu',
    organizer: 'YU Team',
    date: '2026-07-15',
    status: 'Upcoming',
    budget: 5000000,
    location: 'IVS ELI Office',
  },
  {
    id: 'EVT-002',
    title: 'Sinh nhật tháng 6',
    category: 'Sinh nhật',
    organizer: 'HR Dept',
    date: '2026-06-25',
    status: 'Completed',
    budget: 2000000,
    location: 'Tầng 3 Pantry',
  },
  {
    id: 'EVT-003',
    title: 'Team Building Quý 3',
    category: 'Team Building',
    organizer: 'YU Team',
    date: '2026-08-10',
    status: 'Draft',
    budget: 50000000,
    location: 'Nha Trang',
  },
  {
    id: 'EVT-004',
    title: 'Workshop: Clean Architecture',
    category: 'Workshop',
    organizer: 'Technical Committee',
    date: '2026-07-05',
    status: 'Upcoming',
    budget: 1000000,
    location: 'Meeting Room A',
  },
  {
    id: 'EVT-005',
    title: 'Halloween Party',
    category: 'Lễ hội',
    organizer: 'YU Team',
    date: '2026-10-31',
    status: 'Draft',
    budget: 10000000,
    location: 'Toàn văn phòng',
  },
]

// ─── Birthdays ────────────────────────────────────────────────────────────────

export const BIRTHDAYS_MOCK: BirthdayEvent[] = [
  {
    id: 'bday-1',
    employeeId: 'emp-1',
    fullName: 'Lê Văn A',
    initials: 'LA',
    department: 'Ban Giám Đốc',
    position: 'CEO',
    birthDate: generateBirthDate(35, 0),
    age: 35,
  },
  {
    id: 'bday-2',
    employeeId: 'emp-2',
    fullName: 'Nguyễn Thị Lan',
    initials: 'NL',
    department: 'Design',
    position: 'Lead Designer',
    birthDate: generateBirthDate(28, 2),
    age: 28,
  },
  {
    id: 'bday-3',
    employeeId: 'emp-3',
    fullName: 'Trần Văn Minh',
    initials: 'TM',
    department: 'Engineering',
    position: 'Senior Developer',
    birthDate: generateBirthDate(30, 5),
    age: 30,
  },
  {
    id: 'bday-4',
    employeeId: 'emp-4',
    fullName: 'Lê Thị Hoa',
    initials: 'LH',
    department: 'Marketing',
    position: 'Marketing Manager',
    birthDate: generateBirthDate(26, 15),
    age: 26,
  },
  {
    id: 'bday-5',
    employeeId: 'emp-5',
    fullName: 'Phạm Quốc Bảo',
    initials: 'PB',
    department: 'HR',
    position: 'HR Specialist',
    birthDate: generateBirthDate(29, 35),
    age: 29,
  },
  {
    id: 'bday-6',
    employeeId: 'emp-6',
    fullName: 'Võ Thị Kim Anh',
    initials: 'VA',
    department: 'Finance',
    position: 'Accountant',
    birthDate: generateBirthDate(32, 45),
    age: 32,
  },
]

// ─── Employees ────────────────────────────────────────────────────────────────

export const EMPLOYEES_MOCK: Employee[] = [
  {
    id: 'emp-1',
    employeeCode: 'YU-001',
    fullName: 'Lê Văn A',
    email: 'a.le@yuhub.vn',
    phone: '0901234567',
    department: 'Ban Giám Đốc',
    position: 'CEO',
    office: 'Hồ Chí Minh',
    joinDate: '2023-01-01',
    status: 'active',
    initials: 'LA',
  },
  {
    id: 'emp-2',
    employeeCode: 'YU-002',
    fullName: 'Nguyễn Thị Lan',
    email: 'lan.nguyen@yuhub.vn',
    phone: '0912345678',
    department: 'Design',
    position: 'Lead Designer',
    office: 'Hồ Chí Minh',
    joinDate: '2023-02-15',
    status: 'active',
    initials: 'NL',
  },
  {
    id: 'emp-3',
    employeeCode: 'YU-003',
    fullName: 'Trần Văn Minh',
    email: 'minh.tran@yuhub.vn',
    phone: '0987654321',
    department: 'Engineering',
    position: 'Senior Developer',
    office: 'Hà Nội',
    joinDate: '2023-03-10',
    status: 'active',
    initials: 'TM',
  },
  {
    id: 'emp-4',
    employeeCode: 'YU-004',
    fullName: 'Lê Thị Hoa',
    email: 'hoa.le@yuhub.vn',
    phone: '0978123456',
    department: 'Marketing',
    position: 'Marketing Manager',
    office: 'Đà Nẵng',
    joinDate: '2023-04-20',
    status: 'on_leave',
    initials: 'LH',
  },
  {
    id: 'emp-5',
    employeeCode: 'YU-005',
    fullName: 'Phạm Quốc Bảo',
    email: 'bao.pham@yuhub.vn',
    phone: '0934567890',
    department: 'HR',
    position: 'HR Specialist',
    office: 'Hồ Chí Minh',
    joinDate: '2023-05-05',
    status: 'active',
    initials: 'PB',
  },
  {
    id: 'emp-6',
    employeeCode: 'YU-006',
    fullName: 'Võ Thị Kim Anh',
    email: 'anh.vo@yuhub.vn',
    phone: '0945678901',
    department: 'Finance',
    position: 'Accountant',
    office: 'Hà Nội',
    joinDate: '2023-06-12',
    status: 'inactive',
    initials: 'VA',
  },
  {
    id: 'emp-7',
    employeeCode: 'YU-007',
    fullName: 'Đặng Nhật Huy',
    email: 'huy.dang@yuhub.vn',
    phone: '0967890123',
    department: 'Engineering',
    position: 'Frontend Developer',
    office: 'Hồ Chí Minh',
    joinDate: '2023-08-01',
    status: 'active',
    initials: 'ĐH',
  },
  {
    id: 'emp-8',
    employeeCode: 'YU-008',
    fullName: 'Bùi Thị Hà',
    email: 'ha.bui@yuhub.vn',
    phone: '0956789012',
    department: 'Sales',
    position: 'Sales Executive',
    office: 'Đà Nẵng',
    joinDate: '2023-09-15',
    status: 'active',
    initials: 'BH',
  },
]

// ─── Finance ──────────────────────────────────────────────────────────────────

export const MOCK_BUDGET_SUMMARY: BudgetSummary = {
  totalIncome: 150000000,
  totalExpense: 65000000,
  remaining: 85000000,
}

export const MOCK_TRANSACTIONS: Transaction[] = [
  {
    id: 'TXN-101',
    title: 'Quỹ hoạt động Q3/2026',
    category: 'Ngân sách công ty',
    type: 'Income',
    amount: 150000000,
    date: '2026-06-01',
    status: 'Completed',
  },
  {
    id: 'TXN-102',
    title: 'Thanh toán Teabreak tháng 6',
    category: 'Sự kiện',
    type: 'Expense',
    amount: 3500000,
    date: '2026-06-05',
    status: 'Completed',
  },
  {
    id: 'TXN-103',
    title: 'Chi phí Team Building Nha Trang (Cọc 50%)',
    category: 'Team Building',
    type: 'Expense',
    amount: 25000000,
    date: '2026-06-10',
    status: 'Completed',
  },
  {
    id: 'TXN-104',
    title: 'Mua quà sinh nhật tháng 6',
    category: 'Sinh nhật',
    type: 'Expense',
    amount: 2000000,
    date: '2026-06-15',
    status: 'Completed',
  },
  {
    id: 'TXN-105',
    title: 'Giải thưởng PES Thường niên',
    category: 'Giải thưởng',
    type: 'Expense',
    amount: 5000000,
    date: '2026-06-20',
    status: 'Pending',
  },
  {
    id: 'TXN-106',
    title: 'Thanh toán Workshop',
    category: 'Workshop',
    type: 'Expense',
    amount: 1000000,
    date: '2026-06-25',
    status: 'Completed',
  },
  {
    id: 'TXN-107',
    title: 'Mua thiết bị văn phòng (Bàn phím, Chuột)',
    category: 'Cơ sở vật chất',
    type: 'Expense',
    amount: 28500000,
    date: '2026-06-28',
    status: 'Completed',
  },
]
