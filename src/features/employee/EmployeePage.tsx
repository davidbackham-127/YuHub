import { useMemo } from 'react'
import { PlusIcon } from 'lucide-react'
import { useSearchParams } from 'react-router-dom'

import PageContainer from '@/components/common/PageContainer'
import PageHeader from '@/components/common/PageHeader'
import { Button } from '@/components/ui/button'
import EmployeeFilters from './components/EmployeeFilters'
import EmployeeTable from './components/EmployeeTable'
import { EMPLOYEES_MOCK } from '@/constants'

const EmployeePage = () => {
  const [searchParams, setSearchParams] = useSearchParams()

  const searchTerm = searchParams.get('q') || ''
  const departmentFilter = searchParams.get('dept') || 'all'
  const officeFilter = searchParams.get('office') || 'all'
  const statusFilter = searchParams.get('status') || 'all'

  const handleFilterChange = (key: string, value: string | null) => {
    const newParams = new URLSearchParams(searchParams)
    if (value && value !== 'all') {
      newParams.set(key, value)
    } else {
      newParams.delete(key)
    }
    setSearchParams(newParams)
  }

  const handleClearFilters = () => {
    setSearchParams(new URLSearchParams())
  }

  const filteredEmployees = useMemo(() => {
    return EMPLOYEES_MOCK.filter((emp) => {
      const matchDept = departmentFilter === 'all' || emp.department === departmentFilter
      const matchOffice = officeFilter === 'all' || emp.office === officeFilter
      const matchStatus = statusFilter === 'all' || emp.status === statusFilter

      return matchDept && matchOffice && matchStatus
    })
  }, [departmentFilter, officeFilter, statusFilter])

  return (
    <PageContainer>
      <PageHeader
        title="Nhân viên"
        description="Quản lý danh sách nhân sự YU Team"
        action={
          <Button size="sm">
            <PlusIcon className="mr-1.5 size-4" aria-hidden="true" />
            Thêm nhân viên
          </Button>
        }
      />

      <EmployeeFilters
        searchTerm={searchTerm}
        onSearchChange={(v) => handleFilterChange('q', v)}
        departmentFilter={departmentFilter}
        onDepartmentChange={(v) => handleFilterChange('dept', v)}
        officeFilter={officeFilter}
        onOfficeChange={(v) => handleFilterChange('office', v)}
        statusFilter={statusFilter}
        onStatusChange={(v) => handleFilterChange('status', v)}
        onClearFilters={handleClearFilters}
      />

      <EmployeeTable data={filteredEmployees} globalFilter={searchTerm} />
    </PageContainer>
  )
}

export default EmployeePage
