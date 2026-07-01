import { SparklesIcon, CopyIcon, ImageIcon, Loader2 } from 'lucide-react'
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

const PosterPromptGenerator = ({ event }: Props) => {
  const { isGenerating, result, setResult, generate } = useAIGenerator<string>(
    `A high-quality, professional event poster for "${event?.title}", category: ${event?.category}, location: ${event?.location}. The design should feature vibrant colors, modern typography, and a dynamic composition. Include placeholder text blocks for date and time. Aesthetic: futuristic, clean corporate, highly detailed, 8k resolution, cinematic lighting --ar 3:4 --v 6.0`
  )

  return (
    <AIActionCard
      configTitle="Tạo Prompt thiết kế Poster"
      configDescription="Sinh ra câu lệnh (prompt) tối ưu cho Midjourney / DALL-E"
      configContent={
        <>
          <div className="space-y-2">
            <Label>Phong cách thiết kế (Style)</Label>
            <Select defaultValue="modern">
              <SelectTrigger>
                <SelectValue placeholder="Chọn phong cách" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="modern">Modern Corporate (Hiện đại, chuyên nghiệp)</SelectItem>
                <SelectItem value="minimalist">Minimalist (Tối giản)</SelectItem>
                <SelectItem value="cyberpunk">Cyberpunk / Neon (Công nghệ, cá tính)</SelectItem>
                <SelectItem value="elegant">Elegant / Luxury (Sang trọng)</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label>Màu sắc chủ đạo</Label>
            <Select defaultValue="brand">
              <SelectTrigger>
                <SelectValue placeholder="Chọn màu sắc" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="brand">Màu thương hiệu (Xanh/Cam)</SelectItem>
                <SelectItem value="dark">Dark mode (Đen/Vàng)</SelectItem>
                <SelectItem value="vibrant">Vibrant (Sặc sỡ, lễ hội)</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label>Chi tiết cần nhấn mạnh (Optional)</Label>
            <Textarea placeholder="VD: Khách mời đặc biệt, giải thưởng lớn..." className="resize-none h-24" />
          </div>
        </>
      }
      configAction={
        <Button onClick={generate} disabled={isGenerating} aria-busy={isGenerating}>
          {isGenerating ? <Loader2 className="mr-2 size-4 animate-spin" /> : <SparklesIcon className="mr-2 size-4" />}
          {isGenerating ? 'Đang tạo prompt...' : 'Tạo Prompt thiết kế'}
        </Button>
      }
      resultTitle="Kết quả Prompt (Tiếng Anh)"
      resultDescription="Copy đoạn này dán vào Midjourney hoặc AI tạo ảnh tương tự"
      resultContent={
        <Textarea 
          className="flex-1 min-h-[300px] resize-none border-dashed focus-visible:ring-1"
          placeholder="Mô tả ý tưởng của bạn để trợ lý AI bắt đầu sáng tạo..."
          value={result || ''}
          onChange={(e) => setResult(e.target.value)}
        />
      }
      resultAction={
        <>
          <Button variant="outline" disabled={!result}>
            <CopyIcon className="mr-2 size-4" />
            Sao chép Prompt
          </Button>
          <Button disabled={!result}>
            <ImageIcon className="mr-2 size-4" />
            Mở Midjourney
          </Button>
        </>
      }
    />
  )
}

export default PosterPromptGenerator
