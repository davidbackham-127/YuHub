export interface BirthdayEvent {
  id: string
  employeeId: string
  fullName: string
  avatarUrl?: string
  initials: string
  department: string
  position: string
  birthDate: string // YYYY-MM-DD
  age: number
}
