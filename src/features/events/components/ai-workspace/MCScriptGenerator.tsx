import { SparklesIcon, CopyIcon, MicIcon, Loader2 } from 'lucide-react'
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

const MCScriptGenerator = ({ event }: Props) => {
  const { isGenerating, result, setResult, generate } = useAIGenerator<string>(
    `[KỊCH BẢN MC: ${event?.title?.toUpperCase()}]\n\n*Nhạc nền nổi lên, MC bước ra sân khấu*\n\n[08:00 - Khai mạc]\nMC: Xin hân hoan chào đón toàn thể quý vị đại biểu, các vị khách quý và toàn thể anh chị em đã có mặt tại sự kiện ${event?.title} ngày hôm nay! (Vỗ tay)\n\nMC: Kính thưa quý vị, được tổ chức bởi ${event?.organizer}, sự kiện hôm nay hứa hẹn sẽ mang đến những phút giây bùng nổ và đáng nhớ nhất tại ${event?.location}.\n\n[08:15 - Giới thiệu đại biểu]\nMC: Về dự với chương trình hôm nay, xin trân trọng kính giới thiệu sự hiện diện của Ban lãnh đạo công ty...\n\n[08:30 - Mời phát biểu]\nMC: Và không để quý vị phải chờ đợi lâu hơn nữa, xin trân trọng kính mời ông/bà [Tên Lãnh đạo] lên sân khấu có đôi lời phát biểu khai mạc. Xin trân trọng kính mời!`,
    2000
  )

  return (
    <AIActionCard
      configTitle="Tạo Kịch bản MC"
      configDescription="AI sẽ tự động soạn kịch bản dẫn chương trình dựa trên Timeline"
      configContent={
        <>
          <div className="space-y-2">
            <Label>Phong cách dẫn (Tone)</Label>
            <Select defaultValue="formal">
              <SelectTrigger>
                <SelectValue placeholder="Chọn phong cách" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="formal">Trang trọng, chuẩn mực</SelectItem>
                <SelectItem value="humorous">Hài hước, duyên dáng</SelectItem>
                <SelectItem value="energetic">Máu lửa, khuấy động</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label>Đại biểu / Khách mời VIP cần nhắc đến</Label>
            <Textarea placeholder="VD: Anh Nam (CEO), Chị Lan (HR Director)..." className="resize-none h-24" />
          </div>
          <div className="space-y-2">
            <Label>Trò chơi / Hoạt động tương tác</Label>
            <Textarea placeholder="VD: Minigame bốc thăm trúng thưởng ở giữa giờ..." className="resize-none h-24" />
          </div>
        </>
      }
      configAction={
        <Button onClick={generate} disabled={isGenerating} aria-busy={isGenerating}>
          {isGenerating ? <Loader2 className="mr-2 size-4 animate-spin" /> : <SparklesIcon className="mr-2 size-4" />}
          {isGenerating ? 'Đang viết kịch bản...' : 'Viết kịch bản MC'}
        </Button>
      }
      resultTitle="Kịch bản MC"
      resultDescription="Bạn có thể chỉnh sửa lại các placeholder (Ví dụ: [Tên Lãnh đạo])"
      resultContent={
        <Textarea 
          className="flex-1 min-h-[300px] resize-none border-dashed focus-visible:ring-1 bg-muted/20"
          placeholder="Ghi chú ý tưởng hoặc các phần quan trọng để AI viết kịch bản..."
          value={result || ''}
          onChange={(e) => setResult(e.target.value)}
        />
      }
      resultAction={
        <>
          <Button variant="outline" disabled={!result}>
            <CopyIcon className="mr-2 size-4" />
            Sao chép Kịch bản
          </Button>
          <Button disabled={!result}>
            <MicIcon className="mr-2 size-4" />
            Lưu thành tài liệu
          </Button>
        </>
      }
    />
  )
}

export default MCScriptGenerator
