import { PlusIcon, EyeIcon, EditIcon } from 'lucide-react'
import { Link } from 'react-router-dom'

import PageContainer from '@/components/common/PageContainer'
import PageHeader from '@/components/common/PageHeader'
import StatusBadge from '@/components/common/StatusBadge'
import SearchToolbar from '@/components/common/SearchToolbar'
import { useState } from 'react'
import { createColumnHelper, type ColumnDef } from '@tanstack/react-table'
import { DataTable } from '@/components/common/DataTable'
import { Button } from '@/components/ui/button'
import type { Event } from '@/features/events/events.types'

import { ROUTES } from '@/routes/routes'
import { EVENTS_MOCK as MOCK_EVENTS } from '@/constants'

const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount)
}

const columnHelper = createColumnHelper<Event>()

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const columns: ColumnDef<Event, any>[] = [
  columnHelper.accessor('title', {
    header: 'Tên sự kiện',
    cell: (info) => <span className="font-medium">{info.getValue()}</span>,
  }),
  columnHelper.accessor('category', {
    header: 'Danh mục',
  }),
  columnHelper.accessor('organizer', {
    header: 'Ban tổ chức',
  }),
  columnHelper.accessor('date', {
    header: 'Ngày diễn ra',
    cell: (info) => new Date(info.getValue()).toLocaleDateString('vi-VN'),
  }),
  columnHelper.accessor('location', {
    header: 'Địa điểm',
  }),
  columnHelper.accessor('budget', {
    header: () => <div className="text-right">Ngân sách</div>,
    cell: (info) => <div className="text-right">{formatCurrency(info.getValue())}</div>,
  }),
  columnHelper.accessor('status', {
    header: 'Trạng thái',
    cell: (info) => <StatusBadge status={info.getValue()} />,
  }),
  columnHelper.display({
    id: 'actions',
    header: () => <div className="text-right">Thao tác</div>,
    cell: (info) => {
      const id = info.row.original.id
      return (
        <div className="text-right space-x-2">
          <Button variant="ghost" size="icon" render={<Link to={ROUTES.EVENTS.DETAIL.replace(':id', id)} />} title="Xem chi tiết">
            <EyeIcon className="size-4" />
          </Button>
          <Button variant="ghost" size="icon" render={<Link to={ROUTES.EVENTS.EDIT.replace(':id', id)} />} title="Chỉnh sửa">
            <EditIcon className="size-4" />
          </Button>
        </div>
      )
    },
  }),
]

const EventsPage = () => {
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <PageContainer>
      <PageHeader
        title="Quản lý Sự kiện"
        description="Danh sách các sự kiện của YU Team"
        action={
          <Button size="sm" render={<Link to={ROUTES.EVENTS.CREATE} />}>
            <PlusIcon className="mr-1.5 size-4" aria-hidden="true" />
            Tạo sự kiện mới
          </Button>
        }
      />

      <div className="mt-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4">
          <SearchToolbar 
            placeholder="Tìm kiếm sự kiện..." 
            inputClassName="w-full sm:w-[300px]" 
            value={searchTerm}
            onChange={setSearchTerm}
          />
        </div>

        <DataTable
          columns={columns}
          data={MOCK_EVENTS}
          globalFilter={searchTerm}
          emptyMessage="Bạn chưa tạo sự kiện nào trong hệ thống."
        />
      </div>
    </PageContainer>
  )
}

export default EventsPage
