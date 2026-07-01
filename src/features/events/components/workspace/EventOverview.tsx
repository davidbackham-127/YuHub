import { CalendarIcon, MapPinIcon, TagIcon, UserIcon, DollarSignIcon, ActivityIcon } from 'lucide-react'
import SectionCard from '@/components/common/SectionCard'
import InfoCard from '@/components/common/InfoCard'
import StatusBadge from '@/components/common/StatusBadge'
import type { Event } from '../../events.types'

interface Props {
  event: Event
}

const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount)
}

const EventOverview = ({ event }: Props) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
      <SectionCard
        title="Thông tin chung"
        description="Chi tiết cơ bản về sự kiện"
        contentClassName="space-y-4"
      >
        <InfoCard icon={<TagIcon />} label="Danh mục" value={event.category} />
        <InfoCard icon={<UserIcon />} label="Ban tổ chức" value={event.organizer} />
        <InfoCard icon={<ActivityIcon />} label="Trạng thái" value={<StatusBadge status={event.status} className="mt-1" />} />
      </SectionCard>

      <SectionCard
        title="Thời gian & Địa điểm"
        description="Chi tiết thời gian và ngân sách"
        contentClassName="space-y-4"
      >
        <InfoCard icon={<CalendarIcon />} label="Ngày diễn ra" value={new Date(event.date).toLocaleDateString('vi-VN')} />
        <InfoCard icon={<MapPinIcon />} label="Địa điểm" value={event.location} />
        <InfoCard icon={<DollarSignIcon />} label="Ngân sách" value={formatCurrency(event.budget)} />
      </SectionCard>
    </div>
  )
}

export default EventOverview
