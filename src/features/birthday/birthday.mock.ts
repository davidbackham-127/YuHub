import { addDays, format, subYears } from 'date-fns'
import type { BirthdayEvent } from './birthday.types'

const today = new Date()

// Helper to generate a birthDate that ensures a specific age and relative day
const generateBirthDate = (age: number, daysOffset: number) => {
  const targetDay = addDays(today, daysOffset)
  const birthDate = subYears(targetDay, age)
  return format(birthDate, 'yyyy-MM-dd')
}

export const BIRTHDAYS_MOCK: BirthdayEvent[] = [
  {
    id: 'bday-1',
    employeeId: 'emp-1',
    fullName: 'Lê Văn A',
    initials: 'LA',
    department: 'Ban Giám Đốc',
    position: 'CEO',
    birthDate: generateBirthDate(35, 0), // Hôm nay
    age: 35,
  },
  {
    id: 'bday-2',
    employeeId: 'emp-2',
    fullName: 'Nguyễn Thị Lan',
    initials: 'NL',
    department: 'Design',
    position: 'Lead Designer',
    birthDate: generateBirthDate(28, 2), // Trong tuần này
    age: 28,
  },
  {
    id: 'bday-3',
    employeeId: 'emp-3',
    fullName: 'Trần Văn Minh',
    initials: 'TM',
    department: 'Engineering',
    position: 'Senior Developer',
    birthDate: generateBirthDate(30, 5), // Tuần này / Tháng này
    age: 30,
  },
  {
    id: 'bday-4',
    employeeId: 'emp-4',
    fullName: 'Lê Thị Hoa',
    initials: 'LH',
    department: 'Marketing',
    position: 'Marketing Manager',
    birthDate: generateBirthDate(26, 15), // Tháng này
    age: 26,
  },
  {
    id: 'bday-5',
    employeeId: 'emp-5',
    fullName: 'Phạm Quốc Bảo',
    initials: 'PB',
    department: 'HR',
    position: 'HR Specialist',
    birthDate: generateBirthDate(29, 35), // Tháng tới
    age: 29,
  },
  {
    id: 'bday-6',
    employeeId: 'emp-6',
    fullName: 'Võ Thị Kim Anh',
    initials: 'VA',
    department: 'Finance',
    position: 'Accountant',
    birthDate: generateBirthDate(32, 45), // Tháng tới nữa
    age: 32,
  },
]
