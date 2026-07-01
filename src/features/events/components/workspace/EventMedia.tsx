import { ImageIcon, PlusIcon } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const mockMedia = [
  'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=500&q=80',
  'https://images.unsplash.com/photo-1511556532299-8f662fc26c06?w=500&q=80',
  'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=500&q=80',
  'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=500&q=80',
]

const EventMedia = () => {
  return (
    <div className="mt-4">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Hình ảnh & Video</CardTitle>
              <CardDescription>Kho lưu trữ media của sự kiện</CardDescription>
            </div>
            <Button size="sm" variant="outline">
              <PlusIcon className="mr-1.5 size-4" /> Thêm ảnh
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {mockMedia.map((url, idx) => (
              <div key={idx} className="group relative aspect-square overflow-hidden rounded-md border bg-muted">
                <img 
                  src={url} 
                  alt={`Event media ${idx + 1}`} 
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <ImageIcon className="text-white size-6" />
                </div>
              </div>
            ))}
            <div className="aspect-square flex flex-col items-center justify-center rounded-md border border-dashed text-muted-foreground hover:bg-muted/50 cursor-pointer transition-colors">
              <PlusIcon className="size-8 mb-2 opacity-50" />
              <span className="text-sm font-medium">Tải lên media</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default EventMedia
