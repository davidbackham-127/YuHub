import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'

const mockTimeline = [
  { time: '08:00', title: 'Check-in & Đón khách', description: 'Đón tiếp khách mời và ổn định chỗ ngồi.' },
  { time: '09:00', title: 'Phát biểu khai mạc', description: 'Đại diện ban giám đốc phát biểu.' },
  { time: '09:30', title: 'Các hoạt động chính', description: 'Teambuilding hoặc các gameshow nội bộ.' },
  { time: '11:30', title: 'Ăn trưa & Giao lưu', description: 'Tiệc buffet trưa tại nhà hàng.' },
  { time: '14:00', title: 'Bế mạc & Trao giải', description: 'Trao thưởng cho các cá nhân, đội nhóm.' },
]

const EventTimeline = () => {
  return (
    <div className="mt-4">
      <Card>
        <CardHeader>
          <CardTitle>Lịch trình sự kiện</CardTitle>
          <CardDescription>Chi tiết các mốc thời gian trong ngày diễn ra sự kiện</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="relative border-l border-muted-foreground/30 ml-3 space-y-8 pb-4">
            {mockTimeline.map((item, index) => (
              <div key={index} className="relative pl-8">
                <span className="absolute -left-2.5 top-1 h-5 w-5 rounded-full bg-primary flex items-center justify-center ring-4 ring-background">
                  <span className="h-2 w-2 rounded-full bg-primary-foreground"></span>
                </span>
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 mb-1">
                  <h3 className="font-semibold text-lg">{item.title}</h3>
                  <span className="text-sm font-medium text-muted-foreground bg-muted px-2 py-0.5 rounded-md">
                    {item.time}
                  </span>
                </div>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default EventTimeline
