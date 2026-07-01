import { CopyIcon, SparklesIcon, Loader2 } from 'lucide-react'
import AIActionCard from '@/components/common/AIActionCard'

import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { useAIGenerator } from '@/hooks/use-ai-generator'

const CaptionGenerator = () => {
  const { isGenerating, result, setResult, generate } = useAIGenerator<string>(
    'Chúc mừng sinh nhật bạn! Chúc bạn tuổi mới nhiều sức khỏe, niềm vui và gặt hái thêm nhiều thành công trong công việc cũng như cuộc sống nhé! 🎉🎂'
  )

  return (
    <AIActionCard
      configTitle="Cài đặt"
      configDescription="Tuỳ chỉnh lời chúc sinh nhật"
      configContent={
        <>
          <div className="space-y-2">
            <Label>Giọng văn</Label>
            <Select defaultValue="friendly">
              <SelectTrigger>
                <SelectValue placeholder="Chọn giọng văn" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="formal">Trang trọng, chuyên nghiệp</SelectItem>
                <SelectItem value="friendly">Gần gũi, thân thiện</SelectItem>
                <SelectItem value="humorous">Hài hước, vui nhộn</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label>Độ dài</Label>
            <Select defaultValue="medium">
              <SelectTrigger>
                <SelectValue placeholder="Chọn độ dài" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="short">Ngắn gọn (1-2 câu)</SelectItem>
                <SelectItem value="medium">Vừa phải (1 đoạn)</SelectItem>
                <SelectItem value="long">Dài (Nhiều đoạn)</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label>Thông tin thêm (Tuỳ chọn)</Label>
            <Textarea 
              placeholder="Ví dụ: Chúc bạn thành công trong dự án mới..."
              className="resize-none h-20"
            />
          </div>
        </>
      }
      configAction={
        <Button onClick={generate} disabled={isGenerating} aria-busy={isGenerating}>
          {isGenerating ? <Loader2 className="mr-2 size-4 animate-spin" /> : <SparklesIcon className="mr-2 size-4" />}
          {isGenerating ? 'Đang tạo lời chúc...' : 'Tạo lời chúc'}
        </Button>
      }
      resultTitle="Kết quả"
      resultContent={
        <Textarea 
          className="flex-1 min-h-[250px] resize-none border-dashed focus-visible:ring-1"
          placeholder="Mô tả ý tưởng hoặc chọn cài đặt để AI gợi ý lời chúc sinh nhật..."
          value={result || ''}
          onChange={(e) => setResult(e.target.value)}
        />
      }
      resultAction={
        <Button variant="outline" disabled={!result}>
          <CopyIcon className="mr-2 size-4" />
          Sao chép lời chúc
        </Button>
      }
    />
  )
}

export default CaptionGenerator
