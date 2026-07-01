import { SparklesIcon, ListIcon, SaveIcon, Loader2 } from 'lucide-react'
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

const TimelineGenerator = ({ event }: Props) => {
  const { isGenerating, result, setResult, generate } = useAIGenerator<string>(
    `LỊCH TRÌNH ĐỀ XUẤT: ${event?.title}\n\n08:00 - 08:30 | Đón khách & Check-in\n08:30 - 08:45 | Khai mạc, Tuyên bố lý do\n08:45 - 09:00 | Đại diện Ban lãnh đạo phát biểu\n09:00 - 10:30 | Hoạt động chính (Chia team & Chơi games)\n10:30 - 11:00 | Teabreak & Giao lưu tự do\n11:00 - 11:45 | Tổng kết & Trao giải\n11:45 - 12:00 | Bế mạc & Chụp ảnh lưu niệm\n\n*Lưu ý: Ban tổ chức cần có mặt từ 07:00 để setup.*`
  )

  return (
    <AIActionCard
      configTitle="Gợi ý Lịch trình (Timeline)"
      configDescription="AI sẽ sắp xếp khung thời gian hợp lý cho sự kiện"
      configContent={
        <>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Thời gian bắt đầu dự kiến</Label>
              <Select defaultValue="08:00">
                <SelectTrigger>
                  <SelectValue placeholder="Chọn giờ" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="08:00">08:00 AM</SelectItem>
                  <SelectItem value="13:30">01:30 PM</SelectItem>
                  <SelectItem value="18:00">06:00 PM</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Tổng thời lượng</Label>
              <Select defaultValue="half-day">
                <SelectTrigger>
                  <SelectValue placeholder="Chọn thời lượng" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="2-hours">2 tiếng</SelectItem>
                  <SelectItem value="half-day">Nửa ngày (4 tiếng)</SelectItem>
                  <SelectItem value="full-day">Cả ngày (8 tiếng)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="space-y-2">
            <Label>Các phần bắt buộc phải có</Label>
            <Textarea placeholder="VD: Khai mạc, Phát biểu, Teabreak, Bế mạc..." className="resize-none h-24" />
          </div>
        </>
      }
      configAction={
        <Button onClick={generate} disabled={isGenerating} aria-busy={isGenerating}>
          {isGenerating ? <Loader2 className="mr-2 size-4 animate-spin" /> : <SparklesIcon className="mr-2 size-4" />}
          {isGenerating ? 'Đang sắp xếp...' : 'Sắp xếp Lịch trình'}
        </Button>
      }
      resultTitle="Kết quả Lịch trình"
      resultContent={
        <Textarea 
          className="flex-1 min-h-[300px] resize-none border-dashed focus-visible:ring-1"
          placeholder="Ghi chú thêm yêu cầu để AI gợi ý lịch trình..."
          value={result || ''}
          onChange={(e) => setResult(e.target.value)}
        />
      }
      resultAction={
        <>
          <Button variant="outline" disabled={!result}>
            <ListIcon className="mr-2 size-4" />
            Sao chép Lịch trình
          </Button>
          <Button disabled={!result}>
            <SaveIcon className="mr-2 size-4" />
            Lưu vào sự kiện
          </Button>
        </>
      }
    />
  )
}

export default TimelineGenerator
