export const EVENT_CATEGORIES = [
  'Sinh nhật',
  'Team Building',
  'Workshop',
  'Giải đấu',
  'Lễ hội',
] as const

export const EVENT_STATUSES = [
  'Draft',
  'Upcoming',
  'Ongoing',
  'Completed',
  'Cancelled',
] as const

export const EMPLOYEE_DEPARTMENTS = [
  'Ban Giám Đốc',
  'Engineering',
  'Design',
  'Marketing',
  'HR',
  'Finance',
  'Sales',
] as const

export const EMPLOYEE_OFFICES = ['Hồ Chí Minh', 'Hà Nội', 'Đà Nẵng'] as const

export const EMPLOYEE_STATUSES = [
  { value: 'active', label: 'Đang làm việc' },
  { value: 'on_leave', label: 'Nghỉ phép' },
  { value: 'inactive', label: 'Đã nghỉ' },
] as const

export const BUDGET_CATEGORIES = [
  'Ngân sách công ty',
  'Sự kiện',
  'Team Building',
  'Sinh nhật',
  'Giải thưởng',
  'Workshop',
  'Cơ sở vật chất',
] as const

export const TRANSACTION_TYPES = ['Income', 'Expense'] as const

// AI Workspace Options
export const AI_OPTIONS = {
  TONES: [
    { value: 'professional', label: 'Trang trọng, chuyên nghiệp' },
    { value: 'friendly', label: 'Gần gũi, thân thiện' },
    { value: 'energetic', label: 'Sôi động, hào hứng' },
    { value: 'formal', label: 'Trang trọng, chuẩn mực' },
    { value: 'humorous', label: 'Hài hước, duyên dáng' },
  ],
  POSTER_STYLES: [
    { value: 'modern', label: 'Modern Corporate (Hiện đại, chuyên nghiệp)' },
    { value: 'minimalist', label: 'Minimalist (Tối giản)' },
    { value: 'cyberpunk', label: 'Cyberpunk / Neon (Công nghệ, cá tính)' },
    { value: 'elegant', label: 'Elegant / Luxury (Sang trọng)' },
    { value: 'yu', label: 'YU Style (Đỏ/Đen)' },
    { value: 'festive', label: 'Lễ hội sôi động' },
    { value: 'cute', label: 'Dễ thương (Cute 3D)' },
  ],
  POSTER_COLORS: [
    { value: 'brand', label: 'Màu thương hiệu (Xanh/Cam)' },
    { value: 'dark', label: 'Dark mode (Đen/Vàng)' },
    { value: 'vibrant', label: 'Vibrant (Sặc sỡ, lễ hội)' },
  ],
  EMAIL_TYPES: [
    { value: 'invitation', label: 'Thư mời tham dự' },
    { value: 'reminder', label: 'Nhắc nhở trước sự kiện (Reminder)' },
    { value: 'thankyou', label: 'Thư cảm ơn sau sự kiện' },
    { value: 'birthday', label: 'Chúc mừng sinh nhật' },
  ],
  POST_TYPES: [
    { value: 'teaser', label: 'Teaser (nhá hàng trước sự kiện)' },
    { value: 'reminder', label: 'Nhắc nhở tham gia' },
    { value: 'recap', label: 'Tổng kết sau sự kiện' },
  ],
}
