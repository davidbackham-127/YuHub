import { useParams, Link } from 'react-router-dom'
import { ArrowLeftIcon } from 'lucide-react'

import PageContainer from '@/components/common/PageContainer'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'
import { ROUTES } from '@/routes/routes'
import { EMPLOYEES_MOCK } from './employee.mock'
import EmployeeProfileCard from './components/EmployeeProfileCard'

const EmployeeDetailPage = () => {
  const { id } = useParams<{ id: string }>()
  const employee = EMPLOYEES_MOCK.find((emp) => emp.id === id)

  if (!employee) {
    return (
      <PageContainer>
        <div className="flex flex-col items-center justify-center py-24 text-center">
          <h2 className="text-xl font-semibold">Không tìm thấy nhân viên</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Nhân viên bạn đang tìm kiếm không tồn tại hoặc đã bị xóa.
          </p>
          <Button className="mt-6" render={<Link to={ROUTES.EMPLOYEE.ROOT} />}>
            Quay lại danh sách
          </Button>
        </div>
      </PageContainer>
    )
  }

  return (
    <PageContainer>
      {/* Back button */}
      <div>
        <Button
          variant="ghost"
          size="sm"
          className="-ml-2 text-muted-foreground"
          render={<Link to={ROUTES.EMPLOYEE.ROOT} />}
        >
          <ArrowLeftIcon className="mr-1 size-4" />
          Quay lại danh sách
        </Button>
      </div>

      {/* Profile Card */}
      <EmployeeProfileCard employee={employee} />

      {/* Placeholders for future tabs */}
      <section aria-label="Chi tiết thông tin" className="mt-4">
        {/* Fake Tabs header */}
        <div className="mb-4 flex items-center gap-6 border-b pb-2 text-sm font-medium">
          <span className="border-b-2 border-primary pb-2 text-foreground">
            Thông tin cá nhân
          </span>
          <span className="pb-2 text-muted-foreground">Hợp đồng</span>
          <span className="pb-2 text-muted-foreground">Lịch sử đánh giá</span>
          <span className="pb-2 text-muted-foreground">Tài sản</span>
        </div>

        {/* Fake Tab content skeleton */}
        <Card>
          <CardContent className="flex flex-col gap-6 p-6">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="flex flex-col gap-2">
                <Skeleton className="h-4 w-32" />
                <Skeleton className="h-10 w-full" />
              </div>
              <div className="flex flex-col gap-2">
                <Skeleton className="h-4 w-32" />
                <Skeleton className="h-10 w-full" />
              </div>
              <div className="flex flex-col gap-2">
                <Skeleton className="h-4 w-24" />
                <Skeleton className="h-10 w-full" />
              </div>
              <div className="flex flex-col gap-2">
                <Skeleton className="h-4 w-40" />
                <Skeleton className="h-10 w-full" />
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </PageContainer>
  )
}

export default EmployeeDetailPage
