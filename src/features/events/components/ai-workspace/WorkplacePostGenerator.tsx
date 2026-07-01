import { SparklesIcon, CopyIcon, Loader2 } from 'lucide-react'
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

const WorkplacePostGenerator = ({ event }: Props) => {
  const { isGenerating, result, setResult, generate } = useAIGenerator<string>(
    `🎉 BÙNG NỔ CÙNG ${event?.title?.toUpperCase()}! 🎉\n\nAnh em ơi, hãy sẵn sàng cho một sự kiện cực cháy vào ngày ${event?.date ? new Date(event.date).toLocaleDateString('vi-VN') : ''} này nhé! 🔥\n\n📍 Địa điểm quẩy: ${event?.location}\n\nĐừng bỏ lỡ cơ hội tham gia chuỗi hoạt động siêu vui nhộn. Nhanh tay tag đồng đội vào đây để lên kèo nào! 👇\n\n#${event?.category?.replace(' ', '')} #${event?.title?.replace(/\\s+/g, '')} #YUEvents`
  )

  return (
    <AIActionCard
      configTitle="Tạo bài đăng Workplace / Mạng xã hội"
      configDescription="Viết nội dung ngắn gọn, thu hút tương tác"
      configContent={
        <>
          <div className="space-y-2">
            <Label>Mục đích bài đăng</Label>
            <Select defaultValue="teaser">
              <SelectTrigger>
                <SelectValue placeholder="Chọn mục đích" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="teaser">Teaser (nhá hàng trước sự kiện)</SelectItem>
                <SelectItem value="reminder">Nhắc nhở tham gia</SelectItem>
                <SelectItem value="recap">Tổng kết sau sự kiện</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label>Số lượng hashtag đề xuất</Label>
            <Select defaultValue="3">
              <SelectTrigger>
                <SelectValue placeholder="Chọn số hashtag" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">1-2 hashtag</SelectItem>
                <SelectItem value="3">3-5 hashtag</SelectItem>
                <SelectItem value="many">Nhiều hashtag</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label>Phong cách emoji</Label>
            <Select defaultValue="many">
              <SelectTrigger>
                <SelectValue placeholder="Chọn mức độ sử dụng emoji" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="none">Không dùng</SelectItem>
                <SelectItem value="few">Dùng ít</SelectItem>
                <SelectItem value="many">Dùng nhiều (Sôi động)</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </>
      }
      configAction={
        <Button onClick={generate} disabled={isGenerating} aria-busy={isGenerating}>
          {isGenerating ? <Loader2 className="mr-2 size-4 animate-spin" /> : <SparklesIcon className="mr-2 size-4" />}
          {isGenerating ? 'Đang tạo bài đăng...' : 'Tạo bài đăng mạng xã hội'}
        </Button>
      }
      resultTitle="Nội dung sinh ra"
      resultContent={
        <Textarea 
          className="flex-1 min-h-[300px] resize-none border-dashed focus-visible:ring-1"
          placeholder="Mô tả mục đích bài đăng để AI bắt đầu viết..."
          value={result || ''}
          onChange={(e) => setResult(e.target.value)}
        />
      }
      resultAction={
        <Button variant="outline" disabled={!result}>
          <CopyIcon className="mr-2 size-4" />
          Sao chép bài đăng
        </Button>
      }
    />
  )
}

export default WorkplacePostGenerator
