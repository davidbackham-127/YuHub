import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ArrowLeftIcon, SaveIcon, XIcon } from 'lucide-react'

import PageContainer from '@/components/common/PageContainer'
import PageHeader from '@/components/common/PageHeader'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { ROUTES } from '@/routes/routes'
import { EVENT_CATEGORIES, EVENT_STATUSES, EVENTS_MOCK as MOCK_EVENTS } from '@/constants'

const EditEventPage = () => {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const event = MOCK_EVENTS.find(e => e.id === id)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate API Call
    setTimeout(() => {
      setIsSubmitting(false)
      navigate(ROUTES.EVENTS.ROOT)
    }, 1000)
  }

  if (!event) {
    return (
      <PageContainer>
        <PageHeader title="Không tìm thấy sự kiện" />
        <Button variant="outline" className="mt-4" onClick={() => navigate(ROUTES.EVENTS.ROOT)}>
          <ArrowLeftIcon className="mr-2 size-4" /> Quay lại
        </Button>
      </PageContainer>
    )
  }

  return (
    <PageContainer>
      <PageHeader
        title="Chỉnh sửa sự kiện"
        description={`Cập nhật thông tin cho sự kiện ${event.id}`}
        action={
          <Button variant="outline" size="sm" onClick={() => navigate(ROUTES.EVENTS.ROOT)}>
            <ArrowLeftIcon className="mr-1.5 size-4" aria-hidden="true" />
            Hủy và quay lại
          </Button>
        }
      />

      <div className="mt-6 max-w-3xl">
        <form onSubmit={handleSubmit}>
          <Card>
            <CardHeader>
              <CardTitle>Cập nhật thông tin</CardTitle>
              <CardDescription>Thay đổi thông tin sự kiện và nhấn Lưu</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="title">Tên sự kiện <span className="text-destructive">*</span></Label>
                <Input id="title" defaultValue={event.title} required />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label>Danh mục <span className="text-destructive">*</span></Label>
                  <Select required defaultValue={event.category}>
                    <SelectTrigger>
                      <SelectValue placeholder="Chọn danh mục" />
                    </SelectTrigger>
                    <SelectContent>
                    {EVENT_CATEGORIES.map((cat) => (
                      <SelectItem key={cat} value={cat}>
                        {cat}
                      </SelectItem>
                    ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Trạng thái</Label>
                  <Select defaultValue={event.status}>
                    <SelectTrigger>
                      <SelectValue placeholder="Chọn trạng thái" />
                    </SelectTrigger>
                    <SelectContent>
                    {EVENT_STATUSES.map((status) => (
                      <SelectItem key={status} value={status}>
                        {status}
                      </SelectItem>
                    ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="organizer">Ban tổ chức <span className="text-destructive">*</span></Label>
                  <Input id="organizer" defaultValue={event.organizer} required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="date">Ngày diễn ra <span className="text-destructive">*</span></Label>
                  <Input id="date" type="date" defaultValue={event.date} required />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="budget">Ngân sách (VNĐ)</Label>
                  <Input id="budget" type="number" defaultValue={event.budget} min="0" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="location">Địa điểm</Label>
                  <Input id="location" defaultValue={event.location} />
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end space-x-2 border-t px-6 py-4">
              <Button type="button" variant="outline" onClick={() => navigate(ROUTES.EVENTS.ROOT)}>
                <XIcon className="mr-2 size-4" />
                Hủy bỏ
              </Button>
              <Button type="submit" disabled={isSubmitting}>
                <SaveIcon className="mr-2 size-4" />
                {isSubmitting ? 'Đang lưu...' : 'Lưu thay đổi'}
              </Button>
            </CardFooter>
          </Card>
        </form>
      </div>
    </PageContainer>
  )
}

export default EditEventPage
