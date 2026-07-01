import { CakeIcon } from 'lucide-react'
import { Link } from 'react-router-dom'

import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { ROUTES } from '@/routes/routes'
import { DASHBOARD_BIRTHDAYS_MOCK as BIRTHDAYS_MOCK } from '@/constants'
import type { UpcomingBirthday } from '../dashboard.types'

const getDaysLabel = (days: number): string => {
  if (days === 0) return 'Hôm nay'
  if (days === 1) return 'Ngày mai'
  return `${days} ngày nữa`
}

const BirthdayRow = ({ person }: { person: UpcomingBirthday }) => (
  <div className="flex items-center gap-3">
    <Avatar size="sm" className="shrink-0">
      <AvatarFallback className="text-xs">{person.initials}</AvatarFallback>
    </Avatar>
    <div className="min-w-0 flex-1">
      <p className="truncate text-sm font-medium text-foreground">
        {person.name}
      </p>
      <p className="truncate text-xs text-muted-foreground">{person.team}</p>
    </div>
    <Badge
      variant={person.daysUntil <= 3 ? 'destructive' : 'secondary'}
      className="shrink-0"
    >
      {getDaysLabel(person.daysUntil)}
    </Badge>
  </div>
)

/**
 * Upcoming Birthdays widget.
 * Shows the next 5 birthdays with avatar, name, team, and days until.
 */
const BirthdayWidget = () => (
  <Card className="flex flex-col">
    <CardHeader className="flex-row items-center justify-between">
      <div className="flex items-center gap-2">
        <CakeIcon className="size-4 text-muted-foreground" aria-hidden="true" />
        <CardTitle className="text-sm font-medium">Sinh nhật sắp tới</CardTitle>
      </div>
      <Button variant="ghost" size="sm" className="h-7 text-xs" render={<Link to={ROUTES.BIRTHDAY} />}>
        Xem tất cả
      </Button>
    </CardHeader>
    <CardContent className="flex flex-1 flex-col gap-3">
      {BIRTHDAYS_MOCK.map((person) => (
        <BirthdayRow key={person.id} person={person} />
      ))}
    </CardContent>
  </Card>
)

export default BirthdayWidget
