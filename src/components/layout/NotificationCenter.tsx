import { useState } from 'react'
import { BellIcon, CheckIcon, CakeIcon, CalendarIcon, MegaphoneIcon, DollarSignIcon, MessageSquareIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

type NotificationType = 'mention' | 'birthday' | 'event' | 'announcement' | 'budget' | 'system'

interface Notification {
  id: string
  title: string
  description: string
  time: string
  read: boolean
  type: NotificationType
}

const MOCK_NOTIFICATIONS: Notification[] = [
  {
    id: '1',
    title: 'Nhắc đến bạn',
    description: 'Nguyễn Văn A đã nhắc đến bạn trong sự kiện "Teambuilding 2026".',
    time: '5 phút trước',
    read: false,
    type: 'mention',
  },
  {
    id: '2',
    title: 'Sinh nhật sắp tới',
    description: 'Hôm nay là sinh nhật của Trần Thị B. Hãy gửi lời chúc nhé!',
    time: '1 giờ trước',
    read: false,
    type: 'birthday',
  },
  {
    id: '3',
    title: 'Thông báo sự kiện',
    description: 'Sự kiện "Company Trip" sẽ bắt đầu vào ngày mai.',
    time: '2 giờ trước',
    read: false,
    type: 'event',
  },
  {
    id: '4',
    title: 'Cập nhật ngân sách',
    description: 'Ngân sách cho dự án X đã được phê duyệt.',
    time: '1 ngày trước',
    read: true,
    type: 'budget',
  },
  {
    id: '5',
    title: 'Thông báo toàn công ty',
    description: 'Quy định mới về thời gian làm việc sẽ áp dụng từ tháng sau.',
    time: '2 ngày trước',
    read: true,
    type: 'announcement',
  },
]

const getIconForType = (type: NotificationType) => {
  switch (type) {
    case 'mention':
      return <MessageSquareIcon className="size-4 text-blue-500" />
    case 'birthday':
      return <CakeIcon className="size-4 text-pink-500" />
    case 'event':
      return <CalendarIcon className="size-4 text-green-500" />
    case 'announcement':
      return <MegaphoneIcon className="size-4 text-orange-500" />
    case 'budget':
      return <DollarSignIcon className="size-4 text-yellow-500" />
    default:
      return <BellIcon className="size-4 text-muted-foreground" />
  }
}

export const NotificationCenter = () => {
  const [notifications, setNotifications] = useState<Notification[]>(MOCK_NOTIFICATIONS)
  const unreadCount = notifications.filter((n) => !n.read).length

  const markAllAsRead = () => {
    setNotifications(notifications.map(n => ({ ...n, read: true })))
  }

  const markAsRead = (id: string) => {
    setNotifications(notifications.map(n => n.id === id ? { ...n, read: true } : n))
  }

  const renderNotificationList = (list: Notification[]) => {
    if (list.length === 0) {
      return (
        <div className="flex flex-col items-center justify-center py-10 text-center">
          <BellIcon className="size-10 text-muted-foreground/30 mb-4" />
          <p className="text-sm text-muted-foreground">Không có thông báo nào.</p>
        </div>
      )
    }

    return (
      <div className="space-y-4 mt-4">
        {list.map((item) => (
          <div
            key={item.id}
            className={`flex gap-3 items-start p-3 rounded-lg transition-colors ${item.read ? 'bg-transparent' : 'bg-muted/50'}`}
            onClick={() => markAsRead(item.id)}
            role="button"
            tabIndex={0}
          >
            <div className="mt-1 bg-background p-2 rounded-full shadow-sm border shrink-0">
              {getIconForType(item.type)}
            </div>
            <div className="flex-1 space-y-1">
              <p className={`text-sm ${item.read ? 'text-foreground' : 'font-semibold text-foreground'}`}>
                {item.title}
              </p>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {item.description}
              </p>
              <p className="text-[10px] text-muted-foreground mt-2">
                {item.time}
              </p>
            </div>
            {!item.read && (
              <div className="size-2 rounded-full bg-blue-500 shrink-0 mt-1.5" />
            )}
          </div>
        ))}
      </div>
    )
  }

  return (
    <Sheet>
      <div className="relative">
        <SheetTrigger render={<Button variant="ghost" size="icon-sm" aria-label="Thông báo" />}>
          <BellIcon className="size-4" />
        </SheetTrigger>
        {unreadCount > 0 && (
          <Badge
            variant="destructive"
            className="absolute -top-1 -right-1 flex size-4 items-center justify-center rounded-full p-0 text-[10px] leading-none pointer-events-none"
          >
            {unreadCount}
          </Badge>
        )}
      </div>
      <SheetContent className="w-full sm:max-w-md p-0 overflow-y-auto hidden-scrollbar">
        <div className="p-6 pb-2 sticky top-0 bg-background z-10 border-b">
          <SheetHeader className="mb-4">
            <div className="flex items-center justify-between">
              <SheetTitle>Thông báo</SheetTitle>
              {unreadCount > 0 && (
                <Button variant="ghost" size="sm" onClick={markAllAsRead} className="h-8 text-xs text-blue-500 hover:text-blue-600">
                  <CheckIcon className="size-3 mr-1" /> Đánh dấu đã đọc
                </Button>
              )}
            </div>
            <SheetDescription className="sr-only">
              Quản lý và theo dõi các thông báo của bạn.
            </SheetDescription>
          </SheetHeader>
        </div>

        <div className="px-6 py-4">
          <Tabs defaultValue="unread" className="w-full">
            <TabsList className="w-full h-auto flex flex-wrap justify-start gap-1 p-1 bg-transparent border-b rounded-none mb-4">
              <TabsTrigger value="unread" className="data-[state=active]:bg-muted rounded-full">Chưa đọc</TabsTrigger>
              <TabsTrigger value="read" className="data-[state=active]:bg-muted rounded-full">Đã đọc</TabsTrigger>
              <TabsTrigger value="mentions" className="data-[state=active]:bg-muted rounded-full">Nhắc đến</TabsTrigger>
              <TabsTrigger value="birthdays" className="data-[state=active]:bg-muted rounded-full">Sinh nhật</TabsTrigger>
              <TabsTrigger value="events" className="data-[state=active]:bg-muted rounded-full">Sự kiện</TabsTrigger>
              <TabsTrigger value="announcements" className="data-[state=active]:bg-muted rounded-full">Thông báo</TabsTrigger>
              <TabsTrigger value="budget" className="data-[state=active]:bg-muted rounded-full">Ngân sách</TabsTrigger>
            </TabsList>

            <TabsContent value="unread">
              {renderNotificationList(notifications.filter(n => !n.read))}
            </TabsContent>
            <TabsContent value="read">
              {renderNotificationList(notifications.filter(n => n.read))}
            </TabsContent>
            <TabsContent value="mentions">
              {renderNotificationList(notifications.filter(n => n.type === 'mention'))}
            </TabsContent>
            <TabsContent value="birthdays">
              {renderNotificationList(notifications.filter(n => n.type === 'birthday'))}
            </TabsContent>
            <TabsContent value="events">
              {renderNotificationList(notifications.filter(n => n.type === 'event'))}
            </TabsContent>
            <TabsContent value="announcements">
              {renderNotificationList(notifications.filter(n => n.type === 'announcement'))}
            </TabsContent>
            <TabsContent value="budget">
              {renderNotificationList(notifications.filter(n => n.type === 'budget'))}
            </TabsContent>
          </Tabs>
        </div>
      </SheetContent>
    </Sheet>
  )
}
