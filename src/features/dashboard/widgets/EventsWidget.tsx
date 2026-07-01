import { CalendarDaysIcon, MapPinIcon } from 'lucide-react'
import { Link } from 'react-router-dom'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { ROUTES } from '@/routes/routes'
import { DASHBOARD_EVENTS_MOCK as EVENTS_MOCK } from '@/constants'
import type { UpcomingEvent } from '../dashboard.types'

const EVENT_TYPE_LABELS: Record<UpcomingEvent['type'], string> = {
  party: 'Tiệc',
  meeting: 'Họp',
  tournament: 'Giải đấu',
  other: 'Khác',
}

const STATUS_LABELS: Record<UpcomingEvent['status'], string> = {
  upcoming: 'Sắp diễn ra',
  ongoing: 'Đang diễn ra',
}

const EventRow = ({ event }: { event: UpcomingEvent }) => (
  <div className="flex flex-col gap-1.5 rounded-lg border p-3">
    <div className="flex items-start justify-between gap-2">
      <p className="text-sm font-medium text-foreground leading-snug">
        {event.title}
      </p>
      <div className="flex shrink-0 flex-col items-end gap-1">
        <Badge variant={event.status === 'ongoing' ? 'default' : 'secondary'}>
          {STATUS_LABELS[event.status]}
        </Badge>
        <Badge variant="outline">{EVENT_TYPE_LABELS[event.type]}</Badge>
      </div>
    </div>
    <div className="flex items-center gap-1 text-xs text-muted-foreground">
      <CalendarDaysIcon className="size-3 shrink-0" aria-hidden="true" />
      <span>{event.startDate}</span>
      {event.startDate !== event.endDate && <span>→ {event.endDate}</span>}
    </div>
    <div className="flex items-center gap-1 text-xs text-muted-foreground">
      <MapPinIcon className="size-3 shrink-0" aria-hidden="true" />
      <span className="truncate">{event.location}</span>
    </div>
  </div>
)

/**
 * Upcoming Events widget.
 * Displays the next 4 events with status badge, date and location.
 */
const EventsWidget = () => (
  <Card className="flex flex-col">
    <CardHeader className="flex-row items-center justify-between">
      <div className="flex items-center gap-2">
        <CalendarDaysIcon
          className="size-4 text-muted-foreground"
          aria-hidden="true"
        />
        <CardTitle className="text-sm font-medium">Sự kiện sắp diễn ra</CardTitle>
      </div>
      <Button variant="ghost" size="sm" className="h-7 text-xs" render={<Link to={ROUTES.EVENTS.ROOT} />}>
        Xem tất cả
      </Button>
    </CardHeader>
    <CardContent className="flex flex-1 flex-col gap-3">
      {EVENTS_MOCK.map((event) => (
        <EventRow key={event.id} event={event} />
      ))}
    </CardContent>
  </Card>
)

export default EventsWidget
