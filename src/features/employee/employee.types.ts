export type EmployeeStatus = 'active' | 'inactive' | 'on_leave'

export interface Employee {
  id: string
  employeeCode: string
  fullName: string
  email: string
  phone: string
  department: string
  position: string
  office: string
  joinDate: string
  status: EmployeeStatus
  avatarUrl?: string
  initials: string
}
