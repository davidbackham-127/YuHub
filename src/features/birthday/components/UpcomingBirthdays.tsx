import { isAfter, parseISO, setYear, format, compareAsc } from 'date-fns'
import { vi } from 'date-fns/locale'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import type { BirthdayEvent } from '../birthday.types'

interface UpcomingBirthdaysProps {
  birthdays: BirthdayEvent[]
}

const getCurrentYearBirthday = (birthDate: string) => {
  const date = parseISO(birthDate)
  return setYear(date, new Date().getFullYear())
}

const UpcomingBirthdays = ({ birthdays }: UpcomingBirthdaysProps) => {
  const today = new Date()

  // Lọc ra các sinh nhật trong tương lai (trong năm nay)
  const upcoming = birthdays
    .map((b) => ({
      ...b,
      currentYearDate: getCurrentYearBirthday(b.birthDate),
    }))
    .filter((b) => isAfter(b.currentYearDate, today))
    .sort((a, b) => compareAsc(a.currentYearDate, b.currentYearDate))

  // Nhóm theo tháng
  const groupedByMonth = upcoming.reduce((acc, b) => {
    const monthKey = format(b.currentYearDate, 'MMMM, yyyy', { locale: vi })
    if (!acc[monthKey]) {
      acc[monthKey] = []
    }
    acc[monthKey].push(b)
    return acc
  }, {} as Record<string, typeof upcoming>)

  if (upcoming.length === 0) {
    return (
      <Card>
        <CardContent className="flex items-center justify-center py-12 text-muted-foreground">
          Không có sinh nhật nào sắp tới trong năm nay.
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="space-y-6">
      {Object.entries(groupedByMonth).map(([month, list]) => (
        <Card key={month}>
          <CardHeader className="bg-muted/30 pb-3 pt-4">
            <CardTitle className="text-base font-semibold capitalize">
              {month}
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {list.map((b) => (
                <div
                  key={b.id}
                  className="flex items-center gap-4 rounded-xl border p-4 shadow-sm"
                >
                  <div className="flex h-14 w-12 flex-col items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <span className="text-xs font-medium">Tháng {format(b.currentYearDate, 'MM')}</span>
                    <span className="text-xl font-bold leading-none">
                      {format(b.currentYearDate, 'dd')}
                    </span>
                  </div>
                  <Avatar className="size-10">
                    <AvatarImage src={b.avatarUrl} alt={b.fullName} />
                    <AvatarFallback>{b.initials}</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col">
                    <span className="font-medium">{b.fullName}</span>
                    <span className="text-xs text-muted-foreground">
                      Tròn {b.age} tuổi
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

export default UpcomingBirthdays
