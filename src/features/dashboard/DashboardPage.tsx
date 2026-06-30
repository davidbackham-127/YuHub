import { PlusIcon } from 'lucide-react'
import { Link } from 'react-router-dom'

import { Button } from '@/components/ui/button'
import PageContainer from '@/components/common/PageContainer'
import PageHeader from '@/components/common/PageHeader'
import { ROUTES } from '@/routes/routes'

import StatsWidget from './widgets/StatsWidget'
import BirthdayWidget from './widgets/BirthdayWidget'
import EventsWidget from './widgets/EventsWidget'
import AnnouncementsWidget from './widgets/AnnouncementsWidget'
import QuickActionsWidget from './widgets/QuickActionsWidget'

const DashboardPage = () => (
  <PageContainer>
    <PageHeader
      title="Dashboard"
      description="Tổng quan hoạt động nội bộ YU Team"
      action={
        <Button size="sm" render={<Link to={ROUTES.EVENTS.CREATE} />}>
          <PlusIcon className="mr-1.5 size-4" aria-hidden="true" />
          Tạo sự kiện
        </Button>
      }
    />

    {/* Row 1: Stat cards */}
    <StatsWidget />

    {/* Row 2: Announcements (2/3) + Birthdays (1/3) */}
    <section
      aria-label="Thông báo và sinh nhật"
      className="grid grid-cols-1 gap-4 lg:grid-cols-3"
    >
      <AnnouncementsWidget />
      <BirthdayWidget />
    </section>

    {/* Row 3: Events (2/3) + Quick Actions (1/3) */}
    <section
      aria-label="Sự kiện và thao tác nhanh"
      className="grid grid-cols-1 gap-4 lg:grid-cols-3"
    >
      <div className="lg:col-span-2">
        <EventsWidget />
      </div>
      <QuickActionsWidget />
    </section>
  </PageContainer>
)

export default DashboardPage
