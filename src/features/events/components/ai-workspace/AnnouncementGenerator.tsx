import { SparklesIcon, CopyIcon, SendIcon, Loader2 } from 'lucide-react'
import AIActionCard from '@/components/common/AIActionCard'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import type { Event } from '../../events.types'
import { useAIGenerator } from '@/hooks/use-ai-generator'

interface Props {
  event: Event
}

const AnnouncementGenerator = ({ event }: Props) => {
  const { isGenerating, result, setResult, generate } = useAIGenerator<string>(
    `📢 THÔNG BÁO CHÍNH THỨC: ${event?.title?.toUpperCase()} 📢\n\nKính gửi toàn thể anh chị em,\n\nBan tổ chức xin trân trọng thông báo sự kiện "${event?.title}" sẽ chính thức diễn ra vào ngày ${event?.date ? new Date(event.date).toLocaleDateString('vi-VN') : ''} tại ${event?.location}.\n\nĐây là sự kiện thuộc chuỗi hoạt động ${event?.category} do ${event?.organizer} tổ chức nhằm mang đến những trải nghiệm tuyệt vời cho mọi người.\n\nĐừng quên theo dõi các cập nhật tiếp theo nhé!\n\nTrân trọng,\nBan Tổ Chức`
  )

  return (
    <AIActionCard
      configTitle="Cấu hình tạo thông báo"
      configDescription="Điền các thông tin để AI viết thông báo chính thức"
      configContent={
        <>
          <div className="space-y-2">
            <Label>Sự kiện áp dụng</Label>
            <div className="p-2 bg-muted rounded-md text-sm font-medium">{event?.title}</div>
          </div>
          <div className="space-y-2">
            <Label>Giọng văn</Label>
            <Select defaultValue="professional">
              <SelectTrigger>
                <SelectValue placeholder="Chọn giọng văn" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="professional">Trang trọng, chuyên nghiệp</SelectItem>
                <SelectItem value="friendly">Gần gũi, thân thiện</SelectItem>
                <SelectItem value="energetic">Sôi động, hào hứng</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label>Thông điệp chính bổ sung</Label>
            <Textarea placeholder="VD: Nhấn mạnh vào giải thưởng hấp dẫn..." className="resize-none h-24" />
          </div>
        </>
      }
      configAction={
        <Button onClick={generate} disabled={isGenerating} aria-busy={isGenerating}>
          {isGenerating ? <Loader2 className="mr-2 size-4 animate-spin" /> : <SparklesIcon className="mr-2 size-4" />}
          {isGenerating ? 'Đang tạo thông báo...' : 'Viết thông báo'}
        </Button>
      }
      resultTitle="Kết quả sinh ra"
      resultDescription="Bạn có thể chỉnh sửa trực tiếp nội dung dưới đây"
      resultContent={
        <Textarea 
          className="flex-1 min-h-[300px] resize-none border-dashed focus-visible:ring-1"
          placeholder="Nhập thông điệp cốt lõi để AI soạn thông báo..."
          value={result || ''}
          onChange={(e) => setResult(e.target.value)}
        />
      }
      resultAction={
        <>
          <Button variant="outline" disabled={!result}>
            <CopyIcon className="mr-2 size-4" />
            Sao chép thông báo
          </Button>
          <Button disabled={!result}>
            <SendIcon className="mr-2 size-4" />
            Đăng ngay
          </Button>
        </>
      }
    />
  )
}

export default AnnouncementGenerator
