import { useParams, useNavigate } from 'react-router-dom'
import { ArrowLeftIcon, CalendarIcon, PenToolIcon, MicIcon, MailIcon, Image as ImageIcon, BellIcon } from 'lucide-react'

import PageContainer from '@/components/common/PageContainer'
import PageHeader from '@/components/common/PageHeader'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

import { ROUTES } from '@/routes/routes'
import { EVENTS_MOCK as MOCK_EVENTS } from '@/constants'

import AnnouncementGenerator from './components/ai-workspace/AnnouncementGenerator'
import WorkplacePostGenerator from './components/ai-workspace/WorkplacePostGenerator'
import EmailGenerator from './components/ai-workspace/EmailGenerator'
import PosterPromptGenerator from './components/ai-workspace/PosterPromptGenerator'
import MCScriptGenerator from './components/ai-workspace/MCScriptGenerator'
import TimelineGenerator from './components/ai-workspace/TimelineGenerator'

const EventAIWorkspacePage = () => {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  
  const event = MOCK_EVENTS.find(e => e.id === id)

  if (!event) {
    return (
      <PageContainer>
        <PageHeader title="Không tìm thấy sự kiện" />
        <Button variant="outline" className="mt-4" onClick={() => navigate(ROUTES.EVENTS.ROOT)}>
          <ArrowLeftIcon className="mr-2 size-4" /> Quay lại
        </Button>
      </PageContainer>
    )
  }

  return (
    <PageContainer>
      <PageHeader
        title="Trợ lý AI Sự kiện"
        description={`Tạo nội dung tự động cho sự kiện: ${event.title}`}
        action={
          <Button variant="outline" size="sm" onClick={() => navigate(ROUTES.EVENTS.DETAIL.replace(':id', event.id))}>
            <ArrowLeftIcon className="mr-1.5 size-4" aria-hidden="true" />
            Trở lại chi tiết sự kiện
          </Button>
        }
      />

      <div className="mt-6">
        <Tabs defaultValue="announcement" className="w-full">
          <div className="overflow-x-auto pb-2 scrollbar-hide">
            <TabsList className="inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground w-max sm:w-full sm:grid sm:grid-cols-3 lg:grid-cols-6">
              <TabsTrigger value="announcement" className="flex gap-2"><BellIcon className="size-4"/> Thông báo</TabsTrigger>
              <TabsTrigger value="workplace" className="flex gap-2"><PenToolIcon className="size-4"/> Bài đăng mạng MXH</TabsTrigger>
              <TabsTrigger value="email" className="flex gap-2"><MailIcon className="size-4"/> Email / Thư mời</TabsTrigger>
              <TabsTrigger value="poster" className="flex gap-2"><ImageIcon className="size-4"/> Prompt Poster</TabsTrigger>
              <TabsTrigger value="mc" className="flex gap-2"><MicIcon className="size-4"/> Kịch bản MC</TabsTrigger>
              <TabsTrigger value="timeline" className="flex gap-2"><CalendarIcon className="size-4"/> Gợi ý Lịch trình</TabsTrigger>
            </TabsList>
          </div>

          <div className="mt-4 focus-visible:outline-none">
            <TabsContent value="announcement" className="m-0 focus-visible:outline-none"><AnnouncementGenerator event={event} /></TabsContent>
            <TabsContent value="workplace" className="m-0 focus-visible:outline-none"><WorkplacePostGenerator event={event} /></TabsContent>
            <TabsContent value="email" className="m-0 focus-visible:outline-none"><EmailGenerator event={event} /></TabsContent>
            <TabsContent value="poster" className="m-0 focus-visible:outline-none"><PosterPromptGenerator event={event} /></TabsContent>
            <TabsContent value="mc" className="m-0 focus-visible:outline-none"><MCScriptGenerator event={event} /></TabsContent>
            <TabsContent value="timeline" className="m-0 focus-visible:outline-none"><TimelineGenerator event={event} /></TabsContent>
          </div>
        </Tabs>
      </div>
    </PageContainer>
  )
}

export default EventAIWorkspacePage
