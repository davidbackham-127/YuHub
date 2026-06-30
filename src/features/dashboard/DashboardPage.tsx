import {
  Cake,
  CalendarDays,
  DollarSign,
  PlusIcon,
  Users,
} from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'
import DashboardCard from '@/components/common/DashboardCard'
import PageContainer from '@/components/common/PageContainer'
import PageHeader from '@/components/common/PageHeader'

// ─── Stat cards config ────────────────────────────────────────────────────────

const STAT_CARDS = [
  {
    title: 'Tổng nhân viên',
    icon: Users,
    value: '—',
    description: 'Tất cả thành viên YU Team',
  },
  {
    title: 'Sinh nhật sắp tới',
    icon: Cake,
    value: '—',
    description: 'Trong 30 ngày tới',
  },
  {
    title: 'Sự kiện đang diễn ra',
    icon: CalendarDays,
    value: '—',
    description: 'Sự kiện hoạt động',
  },
  {
    title: 'Ngân sách tháng này',
    icon: DollarSign,
    value: '—',
    description: 'Tổng chi tiêu hiện tại',
  },
] as const

// ─── Skeleton placeholder rows ────────────────────────────────────────────────

const SkeletonRows = ({ count = 5 }: { count?: number }) => (
  <div className="flex flex-col gap-3">
    {Array.from({ length: count }).map((_, i) => (
      <div key={i} className="flex items-center gap-3">
        <Skeleton className="size-8 shrink-0 rounded-full" />
        <div className="flex flex-1 flex-col gap-1.5">
          <Skeleton className="h-3.5 w-2/3 rounded" />
          <Skeleton className="h-3 w-1/3 rounded" />
        </div>
        <Skeleton className="h-5 w-14 shrink-0 rounded-full" />
      </div>
    ))}
  </div>
)

// ─── DashboardPage ────────────────────────────────────────────────────────────

const DashboardPage = () => (
  <PageContainer>
    {/* Page header */}
    <PageHeader
      title="Dashboard"
      description="Tổng quan hoạt động nội bộ YU Team"
      action={
        <Button size="sm">
          <PlusIcon className="mr-1.5 size-4" aria-hidden="true" />
          Tạo sự kiện
        </Button>
      }
    />

    {/* Stat cards — 2 cols on mobile, 4 on desktop */}
    <section aria-label="Thống kê tổng quan">
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {STAT_CARDS.map((card) => (
          <DashboardCard
            key={card.title}
            title={card.title}
            icon={card.icon}
            value={card.value}
            description={card.description}
          />
        ))}
      </div>
    </section>

    {/* Main content grid — 1 col mobile, 3-col desktop (2+1) */}
    <section aria-label="Nội dung chính">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">

        {/* Recent activity — takes 2/3 width on desktop */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="text-sm font-medium">
              Hoạt động gần đây
            </CardTitle>
          </CardHeader>
          <CardContent>
            <SkeletonRows count={6} />
          </CardContent>
        </Card>

        {/* Upcoming birthdays — takes 1/3 width on desktop */}
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">
              Sinh nhật sắp tới
            </CardTitle>
          </CardHeader>
          <CardContent>
            <SkeletonRows count={4} />
          </CardContent>
        </Card>
      </div>
    </section>

    {/* Bottom grid — 2 equal columns on desktop */}
    <section aria-label="Sự kiện và tài chính">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">

        {/* Upcoming events */}
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">
              Sự kiện sắp diễn ra
            </CardTitle>
          </CardHeader>
          <CardContent>
            <SkeletonRows count={3} />
          </CardContent>
        </Card>

        {/* Budget overview */}
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">
              Tổng quan ngân sách
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-4">
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="flex flex-col gap-1.5">
                  <div className="flex items-center justify-between">
                    <Skeleton className="h-3 w-24 rounded" />
                    <Skeleton className="h-3 w-12 rounded" />
                  </div>
                  <Skeleton className="h-2 w-full rounded-full" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  </PageContainer>
)

export default DashboardPage
