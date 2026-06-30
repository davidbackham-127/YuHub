import { isToday, isThisWeek, isThisMonth, parseISO, setYear } from 'date-fns'
import { CakeIcon, CalendarHeartIcon, GiftIcon } from 'lucide-react'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import type { BirthdayEvent } from '../birthday.types'

interface BirthdayDashboardProps {
  birthdays: BirthdayEvent[]
}

// Convert birthDate to current year for comparison
const getCurrentYearBirthday = (birthDate: string) => {
  const date = parseISO(birthDate)
  return setYear(date, new Date().getFullYear())
}

const BirthdayDashboard = ({ birthdays }: BirthdayDashboardProps) => {
  const todayBirthdays = birthdays.filter((b) =>
    isToday(getCurrentYearBirthday(b.birthDate))
  )
  const thisWeekBirthdays = birthdays.filter((b) =>
    isThisWeek(getCurrentYearBirthday(b.birthDate))
  )
  const thisMonthBirthdays = birthdays.filter((b) =>
    isThisMonth(getCurrentYearBirthday(b.birthDate))
  )

  const renderList = (list: BirthdayEvent[], emptyMessage: string) => {
    if (list.length === 0) {
      return (
        <div className="flex flex-col items-center justify-center py-8 text-center text-sm text-muted-foreground">
          {emptyMessage}
        </div>
      )
    }

    return (
      <ul className="space-y-4">
        {list.map((b) => (
          <li key={b.id} className="flex items-center gap-4">
            <Avatar className="size-10">
              <AvatarImage src={b.avatarUrl} alt={b.fullName} />
              <AvatarFallback>{b.initials}</AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <span className="font-medium">{b.fullName}</span>
              <span className="text-xs text-muted-foreground">
                {b.department} • Tròn {b.age} tuổi
              </span>
            </div>
          </li>
        ))}
      </ul>
    )
  }

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
      {/* Today */}
      <Card className="border-amber-200 bg-amber-50 dark:border-amber-900/50 dark:bg-amber-900/10">
        <CardHeader className="pb-4">
          <CardTitle className="flex items-center gap-2 text-amber-700 dark:text-amber-500">
            <CakeIcon className="size-5" />
            Hôm nay
          </CardTitle>
        </CardHeader>
        <CardContent>
          {renderList(todayBirthdays, 'Không có sinh nhật nào hôm nay.')}
        </CardContent>
      </Card>

      {/* This Week */}
      <Card>
        <CardHeader className="pb-4">
          <CardTitle className="flex items-center gap-2">
            <GiftIcon className="size-5 text-emerald-500" />
            Trong tuần này
          </CardTitle>
        </CardHeader>
        <CardContent>
          {renderList(thisWeekBirthdays, 'Không có sinh nhật trong tuần này.')}
        </CardContent>
      </Card>

      {/* This Month */}
      <Card>
        <CardHeader className="pb-4">
          <CardTitle className="flex items-center gap-2">
            <CalendarHeartIcon className="size-5 text-blue-500" />
            Tháng này
          </CardTitle>
        </CardHeader>
        <CardContent>
          {renderList(thisMonthBirthdays, 'Không có sinh nhật tháng này.')}
        </CardContent>
      </Card>
    </div>
  )
}

export default BirthdayDashboard
