import { useState } from 'react'
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
  createColumnHelper,
  getSortedRowModel,
  getPaginationRowModel,
  getFilteredRowModel,
  type SortingState,
  type VisibilityState,
} from '@tanstack/react-table'
import { Link } from 'react-router-dom'
import {
  ArrowUpDownIcon,
  ChevronDownIcon,
  MoreHorizontalIcon,
} from 'lucide-react'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { ROUTES } from '@/routes/routes'
import type { Employee } from '../employee.types'

const columnHelper = createColumnHelper<Employee>()

const STATUS_CONFIG: Record<
  Employee['status'],
  { label: string; variant: 'default' | 'secondary' | 'outline' }
> = {
  active: { label: 'Đang làm việc', variant: 'default' },
  on_leave: { label: 'Nghỉ phép', variant: 'outline' },
  inactive: { label: 'Đã nghỉ', variant: 'secondary' },
}

const columns = [
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
      const config = STATUS_CONFIG[status]
      return <Badge variant={config.variant}>{config.label}</Badge>
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
  const [sorting, setSorting] = useState<SortingState>([])
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = useState({})


  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
      columnVisibility,
      rowSelection,
      globalFilter,
    },
    enableRowSelection: true,
    onRowSelectionChange: setRowSelection,
    onSortingChange: setSorting,
    onColumnVisibilityChange: setColumnVisibility,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
  })

  return (
    <div className="space-y-4">
      {/* Table Toolbar */}
      <div className="flex items-center justify-between">
        <div className="flex-1 text-sm text-muted-foreground">
          Đã chọn {table.getFilteredSelectedRowModel().rows.length} trong số{' '}
          {table.getFilteredRowModel().rows.length} nhân viên.
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger render={<Button variant="outline" className="ml-auto" />}>
            Hiển thị cột <ChevronDownIcon className="ml-2 size-4" />
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {typeof column.columnDef.header === 'string'
                      ? column.columnDef.header
                      : column.id}
                  </DropdownMenuCheckboxItem>
                )
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Table Content */}
      <div className="rounded-xl border bg-card shadow-sm">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <TableHead
                      key={header.id}
                      className="whitespace-nowrap text-xs uppercase"
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  ))}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody>
              {table.getRowModel().rows?.length ? (
                table.getRowModel().rows.map((row) => (
                  <TableRow
                    key={row.id}
                    data-state={row.getIsSelected() && 'selected'}
                  >
                    {row.getVisibleCells().map((cell) => (
                      <TableCell key={cell.id} className="whitespace-nowrap">
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={columns.length}
                    className="h-24 text-center text-muted-foreground"
                  >
                    Không tìm thấy nhân viên nào.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </div>

      {/* Pagination Controls */}
      <div className="flex items-center justify-end space-x-2 py-4">
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          Trước
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          Sau
        </Button>
      </div>
    </div>
  )
}

export default EmployeeTable
