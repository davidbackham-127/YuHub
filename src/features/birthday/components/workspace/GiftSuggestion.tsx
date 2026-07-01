import { GiftIcon, SparklesIcon, ExternalLinkIcon, Loader2 } from 'lucide-react'
import AIActionCard from '@/components/common/AIActionCard'
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { useAIGenerator } from '@/hooks/use-ai-generator'

interface GiftIdea {
  title: string
  description: string
  price: string
}

const GiftSuggestion = () => {
  const { isGenerating, result, generate } = useAIGenerator<GiftIdea[]>([
    {
      title: 'Bàn phím cơ không dây',
      description: 'Phù hợp với sở thích code và chơi game, thiết kế gọn gàng, gõ êm.',
      price: '~1.500.000 VNĐ'
    },
    {
      title: 'Sách "Clean Architecture"',
      description: 'Bổ sung kiến thức chuyên môn, rất hữu ích cho một Software Engineer.',
      price: '~400.000 VNĐ'
    },
    {
      title: 'Cốc giữ nhiệt YETI',
      description: 'Giữ đá lâu, phù hợp cho những ngày dài làm việc tại văn phòng.',
      price: '~800.000 VNĐ'
    }
  ])

  const suggestions = result || []

  return (
    <AIActionCard
      configTitle="Cài đặt Gợi ý"
      configDescription="Nhập sở thích để AI tìm quà phù hợp"
      configContent={
        <>
          <div className="space-y-2">
            <Label htmlFor="hobbies">Sở thích / Mối quan tâm</Label>
            <Textarea 
              id="hobbies" 
              placeholder="Ví dụ: Đọc sách, chơi game, uống cà phê..." 
              className="resize-none"
            />
          </div>

          <div className="space-y-2">
            <Label>Ngân sách</Label>
            <Select defaultValue="medium">
              <SelectTrigger>
                <SelectValue placeholder="Chọn ngân sách" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="low">Dưới 500.000 VNĐ</SelectItem>
                <SelectItem value="medium">500.000 - 1.000.000 VNĐ</SelectItem>
                <SelectItem value="high">Trên 1.000.000 VNĐ</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </>
      }
      configAction={
        <Button onClick={generate} disabled={isGenerating} aria-busy={isGenerating}>
          {isGenerating ? <Loader2 className="mr-2 size-4 animate-spin" /> : <SparklesIcon className="mr-2 size-4" />}
          {isGenerating ? 'Đang phân tích...' : 'Phân tích quà tặng'}
        </Button>
      }
      resultTitle="Gợi ý từ AI"
      resultDescription="Các món quà phù hợp nhất với thông tin cung cấp"
      resultContent={
        <>
          {suggestions.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {suggestions.map((item, idx) => (
                <Card key={idx} className="bg-muted/40">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base flex items-center justify-between">
                      {item.title}
                      <GiftIcon className="size-4 text-muted-foreground" />
                    </CardTitle>
                    <CardDescription className="font-medium text-primary">
                      {item.price}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pb-2 text-sm text-muted-foreground">
                    {item.description}
                  </CardContent>
                  <CardFooter className="pt-2 pb-4">
                    <Button variant="link" className="p-0 h-auto w-full justify-start text-xs">
                      Tìm kiếm trên Shopee <ExternalLinkIcon className="ml-1 size-3" />
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          ) : (
            <div className="h-[250px] flex flex-col items-center justify-center text-center text-muted-foreground bg-muted/30 rounded-md border border-dashed p-4">
              <GiftIcon className="size-12 opacity-50 mb-2" />
              <p>Chưa có gợi ý nào.</p>
              <p className="text-sm mt-1">Mời bạn nhập sở thích và nhấn <strong>Phân tích quà tặng</strong> để nhận kết quả.</p>
            </div>
          )}
        </>
      }
      resultAction={null}
    />
  )
}

export default GiftSuggestion
