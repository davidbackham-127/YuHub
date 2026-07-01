import { FileTextIcon, DownloadIcon } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const mockDocuments = [
  { id: '1', name: 'Ke_hoach_to_chuc.pdf', size: '2.4 MB', type: 'PDF' },
  { id: '2', name: 'Danh_sach_khach_moi.xlsx', size: '1.1 MB', type: 'Excel' },
  { id: '3', name: 'Kich_ban_MC.docx', size: '850 KB', type: 'Word' },
]

const EventDocuments = () => {
  return (
    <div className="mt-4">
      <Card>
        <CardHeader>
          <CardTitle>Tài liệu đính kèm</CardTitle>
          <CardDescription>Các biểu mẫu, kế hoạch và tài liệu liên quan đến sự kiện</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {mockDocuments.map((doc) => (
              <div key={doc.id} className="flex items-center p-4 border rounded-md hover:bg-muted/50 transition-colors">
                <div className="bg-primary/10 p-3 rounded-full mr-4 text-primary">
                  <FileTextIcon className="size-6" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-sm truncate">{doc.name}</p>
                  <p className="text-xs text-muted-foreground">{doc.size} • {doc.type}</p>
                </div>
                <Button variant="ghost" size="icon" title="Tải xuống">
                  <DownloadIcon className="size-4" />
                </Button>
              </div>
            ))}
          </div>
          <div className="mt-6 flex justify-center">
            <Button variant="outline" className="border-dashed w-full sm:w-auto">
              <FileTextIcon className="mr-2 size-4" />
              Tải lên tài liệu mới
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default EventDocuments
