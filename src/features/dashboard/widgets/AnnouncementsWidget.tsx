import { MegaphoneIcon } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { ANNOUNCEMENTS_MOCK } from '../dashboard.mock'
import type { Announcement } from '../dashboard.types'

const CATEGORY_CONFIG: Record<
  Announcement['category'],
  { label: string; variant: 'default' | 'destructive' | 'secondary' | 'outline' }
> = {
  info: { label: 'Thông tin', variant: 'secondary' },
  warning: { label: 'Nhắc nhở', variant: 'outline' },
  success: { label: 'Mới', variant: 'default' },
}

const AnnouncementRow = ({
  announcement,
}: {
  announcement: Announcement
}) => {
  const config = CATEGORY_CONFIG[announcement.category]

  return (
    <article className="flex flex-col gap-1.5 border-b pb-3 last:border-0 last:pb-0">
      <div className="flex items-start justify-between gap-2">
        <p className="text-sm font-medium text-foreground leading-snug">
          {announcement.title}
        </p>
        <Badge variant={config.variant} className="shrink-0">
          {config.label}
        </Badge>
      </div>
      <p className="text-xs text-muted-foreground line-clamp-2">
        {announcement.excerpt}
      </p>
      <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
        <span className="font-medium">{announcement.author}</span>
        <span>·</span>
        <time dateTime={announcement.createdAt}>{announcement.createdAt}</time>
      </div>
    </article>
  )
}

/**
 * Recent Announcements widget.
 * Shows the 4 most recent announcements with category, excerpt, and author.
 */
const AnnouncementsWidget = () => (
  <Card className="flex flex-col lg:col-span-2">
    <CardHeader>
      <div className="flex items-center gap-2">
        <MegaphoneIcon
          className="size-4 text-muted-foreground"
          aria-hidden="true"
        />
        <CardTitle className="text-sm font-medium">Thông báo gần đây</CardTitle>
      </div>
    </CardHeader>
    <CardContent className="flex flex-1 flex-col gap-3">
      {ANNOUNCEMENTS_MOCK.map((announcement) => (
        <AnnouncementRow key={announcement.id} announcement={announcement} />
      ))}
    </CardContent>
  </Card>
)

export default AnnouncementsWidget
