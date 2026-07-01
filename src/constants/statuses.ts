export type StatusVariant = 'default' | 'secondary' | 'destructive' | 'outline'

export const getStatusConfig = (
  status: string
): { variant: StatusVariant; label: string } => {
  const s = status.toLowerCase()
  switch (s) {
    case 'draft':
      return { variant: 'secondary', label: 'Bản nháp' }
    case 'upcoming':
      return { variant: 'default', label: 'Sắp tới' }
    case 'ongoing':
      return { variant: 'destructive', label: 'Đang diễn ra' }
    case 'completed':
      return { variant: 'outline', label: 'Đã hoàn thành' }
    case 'cancelled':
      return { variant: 'destructive', label: 'Đã hủy' }
    case 'pending':
      return { variant: 'secondary', label: 'Đang xử lý' }
    case 'failed':
      return { variant: 'destructive', label: 'Thất bại' }
    case 'success':
      return { variant: 'default', label: 'Thành công' }
    case 'active':
      return { variant: 'default', label: 'Đang làm việc' }
    case 'on_leave':
      return { variant: 'outline', label: 'Nghỉ phép' }
    case 'inactive':
      return { variant: 'secondary', label: 'Đã nghỉ' }
    default:
      return { variant: 'outline', label: status }
  }
}
