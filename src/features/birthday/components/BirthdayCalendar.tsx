import { useState } from 'react'
import { isSameDay, parseISO, setYear } from 'date-fns'

import { Calendar } from '@/components/ui/calendar'
import { Card, CardContent } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import type { BirthdayEvent } from '../birthday.types'

interface BirthdayCalendarProps {
  birthdays: BirthdayEvent[]
}

const getCurrentYearBirthday = (birthDate: string) => {
  const date = parseISO(birthDate)
  return setYear(date, new Date().getFullYear())
}

const BirthdayCalendar = ({ birthdays }: BirthdayCalendarProps) => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date())

  // Create a list of dates for the calendar modifier
  const birthdayDates = birthdays.map((b) =>
    getCurrentYearBirthday(b.birthDate)
  )

  // Find birthdays for the selected date
  const selectedBirthdays = selectedDate
    ? birthdays.filter((b) =>
        isSameDay(getCurrentYearBirthday(b.birthDate), selectedDate)
      )
    : []

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
      {/* Calendar */}
      <Card className="lg:col-span-2">
        <CardContent className="flex items-center justify-center p-6">
          <Calendar
            mode="single"
            selected={selectedDate}
            onSelect={setSelectedDate}
            className="rounded-md border shadow-sm"
            modifiers={{
              birthday: birthdayDates,
            }}
            modifiersClassNames={{
              birthday: 'bg-primary/20 font-bold text-primary dark:bg-primary/30',
            }}
          />
        </CardContent>
      </Card>

      {/* Detail panel */}
      <Card>
        <CardContent className="p-6">
          <h3 className="mb-4 text-lg font-medium">
            Sinh nhật ngày{' '}
            {selectedDate ? selectedDate.toLocaleDateString('vi-VN') : '---'}
          </h3>

          {selectedBirthdays.length > 0 ? (
            <ul className="space-y-4">
              {selectedBirthdays.map((b) => (
                <li key={b.id} className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src={b.avatarUrl} alt={b.fullName} />
                    <AvatarFallback>{b.initials}</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col">
                    <span className="font-medium">{b.fullName}</span>
                    <span className="text-sm text-muted-foreground">
                      {b.department} • Tròn {b.age} tuổi
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <div className="flex flex-col items-center justify-center py-8 text-center text-sm text-muted-foreground">
              Không có sinh nhật nào vào ngày này.
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

export default BirthdayCalendar
