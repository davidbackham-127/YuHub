import { XIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import SearchToolbar from '@/components/common/SearchToolbar'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { EMPLOYEE_DEPARTMENTS, EMPLOYEE_OFFICES, EMPLOYEE_STATUSES } from '@/constants'

interface EmployeeFiltersProps {
  searchTerm: string
  onSearchChange: (value: string) => void
  departmentFilter: string
  onDepartmentChange: (value: string | null) => void
  officeFilter: string
  onOfficeChange: (value: string | null) => void
  statusFilter: string
  onStatusChange: (value: string | null) => void
  onClearFilters: () => void
}

const EmployeeFilters = ({
  searchTerm,
  onSearchChange,
  departmentFilter,
  onDepartmentChange,
  officeFilter,
  onOfficeChange,
  statusFilter,
  onStatusChange,
  onClearFilters,
}: EmployeeFiltersProps) => {
  const hasFilters =
    searchTerm ||
    departmentFilter !== 'all' ||
    officeFilter !== 'all' ||
    statusFilter !== 'all'

  return (
    <div className="flex flex-col gap-4 rounded-xl border bg-card p-4 text-card-foreground shadow-sm lg:flex-row lg:items-center">
      {/* Search Input */}
      <SearchToolbar
        className="flex-1"
        inputClassName="w-full"
        placeholder="Tìm kiếm theo tên hoặc mã NV..."
        value={searchTerm}
        onChange={onSearchChange}
      />

      {/* Select Filters */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:flex lg:shrink-0 lg:items-center">
        <Select value={departmentFilter} onValueChange={onDepartmentChange}>
          <SelectTrigger className="w-full lg:w-[180px]">
            <SelectValue placeholder="Phòng ban" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Tất cả phòng ban</SelectItem>
            {EMPLOYEE_DEPARTMENTS.map((dept) => (
              <SelectItem key={dept} value={dept}>
                {dept}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select value={officeFilter} onValueChange={onOfficeChange}>
          <SelectTrigger className="w-full lg:w-[150px]">
            <SelectValue placeholder="Văn phòng" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Tất cả văn phòng</SelectItem>
            {EMPLOYEE_OFFICES.map((office) => (
              <SelectItem key={office} value={office}>
                {office}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select value={statusFilter} onValueChange={onStatusChange}>
          <SelectTrigger className="w-full sm:col-span-1 lg:w-[160px]">
            <SelectValue placeholder="Trạng thái" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Tất cả trạng thái</SelectItem>
            {EMPLOYEE_STATUSES.map((status) => (
              <SelectItem key={status.value} value={status.value}>
                {status.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {hasFilters && (
          <Button
            variant="ghost"
            onClick={onClearFilters}
            className="col-span-2 sm:col-span-3 lg:col-span-1"
          >
            <XIcon className="mr-1.5 size-4" />
            Xóa bộ lọc
          </Button>
        )}
      </div>
    </div>
  )
}

export default EmployeeFilters
