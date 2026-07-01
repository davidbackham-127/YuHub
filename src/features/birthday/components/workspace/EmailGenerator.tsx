import { CopyIcon, SendIcon, SparklesIcon, Loader2 } from 'lucide-react'
import AIActionCard from '@/components/common/AIActionCard'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { useAIGenerator } from '@/hooks/use-ai-generator'

const EmailGenerator = () => {
  const { isGenerating, result, setResult, generate } = useAIGenerator<{ subject: string; body: string }>({
    subject: 'Chúc mừng sinh nhật, [Tên Nhân Viên]! 🎂',
    body: 'Thân gửi [Tên Nhân Viên],\n\nThay mặt toàn thể YU Team, xin gửi tới bạn những lời chúc mừng tốt đẹp nhất nhân dịp sinh nhật.\n\nChúc bạn một tuổi mới đầy ắp niềm vui, luôn giữ vững nhiệt huyết và gặt hái thêm nhiều thành công trên chặng đường sắp tới cùng YU Hub.\n\nTrân trọng,\nYU Team'
  })

  return (
    <AIActionCard
      configTitle="Cài đặt Email"
      configDescription="Tuỳ chỉnh nội dung email chúc mừng sinh nhật"
      configContent={
        <>
          <div className="space-y-2">
            <Label>Mục đích</Label>
            <Select defaultValue="individual">
              <SelectTrigger>
                <SelectValue placeholder="Chọn mục đích" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="individual">Gửi email cá nhân</SelectItem>
                <SelectItem value="department">Gửi email từ phòng ban</SelectItem>
                <SelectItem value="company">Gửi email đại diện công ty</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label>Lời nhắc (Prompt)</Label>
            <Textarea 
              placeholder="Ví dụ: Viết một email ngắn gọn, chuyên nghiệp..."
              className="resize-none h-24"
            />
          </div>
        </>
      }
      configAction={
        <Button onClick={generate} disabled={isGenerating} aria-busy={isGenerating}>
          {isGenerating ? <Loader2 className="mr-2 size-4 animate-spin" /> : <SparklesIcon className="mr-2 size-4" />}
          {isGenerating ? 'Đang soạn thảo...' : 'Soạn Email AI'}
        </Button>
      }
      resultTitle="Kết quả Email"
      resultContent={
        <>
          <div className="space-y-2 mb-4">
            <Label>Tiêu đề</Label>
            <Input 
              value={result?.subject || ''} 
              onChange={(e) => setResult(prev => ({ subject: e.target.value, body: prev?.body || '' }))} 
              placeholder="Tiêu đề email sẽ hiển thị ở đây..."
            />
          </div>
          <div className="space-y-2 flex-1 flex flex-col">
            <Label>Nội dung</Label>
            <Textarea 
              className="flex-1 min-h-[200px] resize-none border-dashed focus-visible:ring-1"
              placeholder="Ghi chú ý tưởng email để AI soạn thảo..."
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
            <SendIcon className="mr-2 size-4" />
            Mở Mail App
          </Button>
        </>
      }
    />
  )
}

export default EmailGenerator
