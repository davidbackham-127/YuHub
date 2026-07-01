import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowLeftIcon, SaveIcon, XIcon } from 'lucide-react'

import PageContainer from '@/components/common/PageContainer'
import PageHeader from '@/components/common/PageHeader'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { EVENT_CATEGORIES } from '@/constants'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { ROUTES } from '@/routes/routes'

const CreateEventPage = () => {
  const navigate = useNavigate()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate API Call
    setTimeout(() => {
      setIsSubmitting(false)
      navigate(ROUTES.EVENTS.ROOT)
    }, 1000)
  }

  return (
    <PageContainer>
      <PageHeader
        title="Tạo sự kiện mới"
        description="Điền thông tin để tạo sự kiện nội bộ mới"
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
              <CardTitle>Thông tin sự kiện</CardTitle>
              <CardDescription>Vui lòng điền đầy đủ các thông tin bắt buộc (*)</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="title">Tên sự kiện <span className="text-destructive">*</span></Label>
                <Input id="title" placeholder="VD: Team Building Quý 3..." required />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label>Danh mục <span className="text-destructive">*</span></Label>
                  <Select required defaultValue="Team Building">
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
                  <Label htmlFor="organizer">Ban tổ chức <span className="text-destructive">*</span></Label>
                  <Input id="organizer" placeholder="VD: YU Team, HR Dept..." required />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="date">Ngày diễn ra <span className="text-destructive">*</span></Label>
                  <Input id="date" type="date" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="budget">Ngân sách dự kiến (VNĐ)</Label>
                  <Input id="budget" type="number" placeholder="VD: 5000000" min="0" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="location">Địa điểm</Label>
                <Input id="location" placeholder="VD: IVS ELI Office, Pantry Tầng 3..." />
              </div>
            </CardContent>
            <CardFooter className="flex justify-end space-x-2 border-t px-6 py-4">
              <Button type="button" variant="outline" onClick={() => navigate(ROUTES.EVENTS.ROOT)}>
                <XIcon className="mr-2 size-4" />
                Hủy bỏ
              </Button>
              <Button type="submit" disabled={isSubmitting}>
                <SaveIcon className="mr-2 size-4" />
                {isSubmitting ? 'Đang lưu...' : 'Lưu sự kiện'}
              </Button>
            </CardFooter>
          </Card>
        </form>
      </div>
    </PageContainer>
  )
}

export default CreateEventPage
