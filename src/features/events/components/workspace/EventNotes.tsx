import { SaveIcon } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'

const EventNotes = () => {
  return (
    <div className="mt-4">
      <Card className="flex flex-col min-h-[500px]">
        <CardHeader>
          <CardTitle>Ghi chú nội bộ</CardTitle>
          <CardDescription>Ghi chú nhanh, biên bản họp hoặc thông tin lưu ý cho Ban tổ chức</CardDescription>
        </CardHeader>
        <CardContent className="flex-1 flex flex-col">
          <Textarea 
            className="flex-1 min-h-[300px] resize-none border-dashed focus-visible:ring-1 bg-muted/20"
            placeholder="Nhập nội dung ghi chú ở đây..."
            defaultValue="1. Cần xác nhận lại số lượng người tham gia trước ngày 20/06.&#10;2. Đã liên hệ với bên cung cấp teabreak, chờ báo giá.&#10;3. Lưu ý: có 2 khách mời ăn chay."
          />
        </CardContent>
        <CardFooter className="justify-end border-t pt-4 px-6">
          <Button>
            <SaveIcon className="mr-2 size-4" />
            Lưu ghi chú
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

export default EventNotes
