import { SparklesIcon, CopyIcon, MailIcon, Loader2 } from 'lucide-react'
import AIActionCard from '@/components/common/AIActionCard'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Input } from '@/components/ui/input'
import type { Event } from '../../events.types'
import { useAIGenerator } from '@/hooks/use-ai-generator'

interface Props {
  event: Event
}

const EmailGenerator = ({ event }: Props) => {
  const { isGenerating, result, setResult, generate } = useAIGenerator<{ subject: string; body: string }>({
    subject: `[Thư mời] Tham dự sự kiện ${event?.title}`,
    body: `Kính gửi Anh/Chị,\n\nBan tổ chức xin gửi lời mời trân trọng đến Anh/Chị tham dự sự kiện "${event?.title}".\n\nThông tin chi tiết như sau:\n- Thời gian: ${event?.date ? new Date(event.date).toLocaleDateString('vi-VN') : ''}\n- Địa điểm: ${event?.location}\n- Đơn vị tổ chức: ${event?.organizer}\n\nSự hiện diện của Anh/Chị là niềm vinh hạnh của chúng tôi.\n\nVui lòng phản hồi email này để xác nhận tham dự trước ngày [Ngày xác nhận].\n\nTrân trọng,\n${event?.organizer}`
  })

  return (
    <AIActionCard
      configTitle="Tạo Email Sự kiện"
      configDescription="Viết thư mời, thư cảm ơn hoặc thông báo chi tiết"
      configContent={
        <>
          <div className="space-y-2">
            <Label>Loại Email</Label>
            <Select defaultValue="invitation">
              <SelectTrigger>
                <SelectValue placeholder="Chọn loại email" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="invitation">Thư mời tham dự</SelectItem>
                <SelectItem value="reminder">Nhắc nhở trước sự kiện (Reminder)</SelectItem>
                <SelectItem value="thankyou">Thư cảm ơn sau sự kiện</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label>Người nhận</Label>
            <Input placeholder="VD: Toàn thể nhân viên, Khách mời VIP..." />
          </div>
          <div className="space-y-2">
            <Label>Yêu cầu Call-to-action (CTA)</Label>
            <Input placeholder="VD: Yêu cầu điền form xác nhận tham dự..." />
          </div>
        </>
      }
      configAction={
        <Button onClick={generate} disabled={isGenerating} aria-busy={isGenerating}>
          {isGenerating ? <Loader2 className="mr-2 size-4 animate-spin" /> : <SparklesIcon className="mr-2 size-4" />}
          {isGenerating ? 'Đang tạo email...' : 'Tạo Email'}
        </Button>
      }
      resultTitle="Nội dung Email"
      resultContent={
        <>
          <div className="space-y-2">
            <Label>Tiêu đề (Subject)</Label>
            <Input 
              value={result?.subject || ''} 
              onChange={(e) => setResult(prev => ({ subject: e.target.value, body: prev?.body || '' }))} 
              placeholder="Ghi chú ý tưởng email để AI soạn thảo..."
              className="bg-muted/30"
            />
          </div>
          <div className="space-y-2 flex-1 flex flex-col">
            <Label>Nội dung (Body)</Label>
            <Textarea 
              className="flex-1 min-h-[200px] resize-none border-dashed focus-visible:ring-1"
              placeholder="Nội dung chi tiết sẽ xuất hiện ở đây..."
              value={result?.body || ''}
              onChange={(e) => setResult(prev => ({ subject: prev?.subject || '', body: e.target.value }))}
            />
          </div>
        </>
      }
      resultAction={
        <>
          <Button variant="outline" disabled={!result?.body}>
            <CopyIcon className="mr-2 size-4" />
            Sao chép nội dung
          </Button>
          <Button disabled={!result?.body}>
            <MailIcon className="mr-2 size-4" />
            Mở trình gửi mail
          </Button>
        </>
      }
    />
  )
}

export default EmailGenerator
