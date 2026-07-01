import { DownloadIcon, ImagePlusIcon, SparklesIcon, Loader2 } from 'lucide-react'
import AIActionCard from '@/components/common/AIActionCard'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { useAIGenerator } from '@/hooks/use-ai-generator'

const PosterGenerator = () => {
  const { isGenerating, result, generate } = useAIGenerator<string>(
    'https://images.unsplash.com/photo-1530103862676-de389de4ada8?w=800&q=80',
    2000
  )

  const resultImage = result

  return (
    <AIActionCard
      configTitle="Cài đặt Thiết kế"
      configDescription="Chọn phong cách để AI thiết kế poster"
      configContent={
        <>
          <div className="space-y-2">
            <Label htmlFor="employeeName">Tên nhân viên trên Poster</Label>
            <Input id="employeeName" placeholder="Tên muốn in..." />
          </div>

          <div className="space-y-2">
            <Label>Phong cách thiết kế (Theme)</Label>
            <Select defaultValue="yu">
              <SelectTrigger>
                <SelectValue placeholder="Chọn phong cách" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="yu">YU Style (Đỏ/Đen)</SelectItem>
                <SelectItem value="minimalist">Tối giản (Minimalist)</SelectItem>
                <SelectItem value="festive">Lễ hội sôi động</SelectItem>
                <SelectItem value="cyberpunk">Cyberpunk</SelectItem>
                <SelectItem value="cute">Dễ thương (Cute 3D)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>Tỉ lệ ảnh</Label>
            <Select defaultValue="16:9">
              <SelectTrigger>
                <SelectValue placeholder="Chọn tỉ lệ" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="16:9">16:9 (Màn hình ngang)</SelectItem>
                <SelectItem value="1:1">1:1 (Vuông, Avatar)</SelectItem>
                <SelectItem value="9:16">9:16 (Dọc, Story)</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </>
      }
      configAction={
        <Button onClick={generate} disabled={isGenerating} aria-busy={isGenerating}>
          {isGenerating ? <Loader2 className="mr-2 size-4 animate-spin" /> : <SparklesIcon className="mr-2 size-4" />}
          {isGenerating ? 'Đang vẽ poster...' : 'Vẽ Poster'}
        </Button>
      }
      resultTitle="Bản xem trước"
      resultDescription="Poster do AI vẽ sẽ hiển thị ở đây"
      resultContent={
        <div className="flex-1 flex flex-col items-center justify-center gap-4 bg-muted/30 rounded-md border border-dashed min-h-[400px] w-full p-4 text-center">
          {resultImage ? (
            <div className="w-full h-full flex flex-col gap-4 items-center justify-center">
              <div className="relative aspect-video w-full max-w-[600px] overflow-hidden rounded-md shadow-md bg-black">
                <img src={resultImage} alt="Generated Poster" className="object-cover w-full h-full opacity-90" />
              </div>
              <Button variant="default">
                <DownloadIcon className="mr-2 size-4" />
                Tải xuống PNG
              </Button>
            </div>
          ) : (
            <div className="text-muted-foreground flex flex-col items-center gap-2 py-10">
              <ImagePlusIcon className="size-12 opacity-50" />
              <p>Chưa có hình ảnh nào được tạo.</p>
              <p className="text-sm">Hãy điều chỉnh thông số và nhấn <strong>Vẽ Poster</strong>.</p>
            </div>
          )}
        </div>
      }
      resultAction={null}
    />
  )
}

export default PosterGenerator
