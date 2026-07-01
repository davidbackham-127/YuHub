import {
  createColumnHelper,
  type ColumnDef,
} from '@tanstack/react-table'
import { Link } from 'react-router-dom'
import {
  ArrowUpDownIcon,
  MoreHorizontalIcon,
} from 'lucide-react'

import { DataTable } from '@/components/common/DataTable'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import StatusBadge from '@/components/common/StatusBadge'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'

import { ROUTES } from '@/routes/routes'
import type { Employee } from '../employee.types'

const columnHelper = createColumnHelper<Employee>()

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const columns: ColumnDef<Employee, any>[] = [
  columnHelper.display({
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Chọn tất cả"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Chọn hàng"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  }),
  columnHelper.accessor('fullName', {
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
          className="-ml-3"
        >
          Nhân viên
          <ArrowUpDownIcon className="ml-2 size-4" />
        </Button>
      )
    },
    cell: (info) => {
      const emp = info.row.original
      return (
        <div className="flex items-center gap-3">
          <Avatar size="sm">
            <AvatarImage src={emp.avatarUrl} alt={emp.fullName} />
            <AvatarFallback>{emp.initials}</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <span className="font-medium">{emp.fullName}</span>
            <span className="text-xs text-muted-foreground">{emp.email}</span>
          </div>
        </div>
      )
    },
  }),
  columnHelper.accessor('employeeCode', {
    header: 'Mã NV',
    cell: (info) => (
      <span className="text-muted-foreground">{info.getValue()}</span>
    ),
  }),
  columnHelper.accessor('department', {
    header: 'Phòng ban',
  }),
  columnHelper.accessor('position', {
    header: 'Chức vụ',
  }),
  columnHelper.accessor('office', {
    header: 'Chi nhánh',
  }),
  columnHelper.accessor('status', {
    header: 'Trạng thái',
    cell: (info) => {
      const status = info.getValue()
      return <StatusBadge status={status} />
    },
  }),
  columnHelper.display({
    id: 'actions',
    cell: (info) => {
      const id = info.row.original.id
      return (
        <Button
          variant="ghost"
          size="icon"
          render={<Link to={ROUTES.EMPLOYEE.DETAIL.replace(':id', id)} />}
        >
          <MoreHorizontalIcon className="size-4" />
          <span className="sr-only">Xem chi tiết</span>
        </Button>
      )
    },
  }),
]

interface EmployeeTableProps {
  data: Employee[]
  globalFilter?: string
}

const EmployeeTable = ({ data, globalFilter }: EmployeeTableProps) => {
  return (
    <DataTable
      columns={columns}
      data={data}
      globalFilter={globalFilter}
      enableRowSelection={true}
      emptyMessage="Không tìm thấy nhân viên nào."
    />
  )
}

export default EmployeeTable
