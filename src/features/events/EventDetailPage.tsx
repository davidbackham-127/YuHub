import { useParams, Link, useNavigate } from 'react-router-dom'
import { ArrowLeftIcon, EditIcon, SparklesIcon } from 'lucide-react'

import PageContainer from '@/components/common/PageContainer'
import PageHeader from '@/components/common/PageHeader'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ROUTES } from '@/routes/routes'
import { EVENTS_MOCK as MOCK_EVENTS } from '@/constants'

// Import Workspace Components
import EventOverview from './components/workspace/EventOverview'
import EventTimeline from './components/workspace/EventTimeline'
import EventChecklist from './components/workspace/EventChecklist'
import EventBudget from './components/workspace/EventBudget'
import EventDocuments from './components/workspace/EventDocuments'
import EventMedia from './components/workspace/EventMedia'
import EventParticipants from './components/workspace/EventParticipants'
import EventNotes from './components/workspace/EventNotes'

const EventDetailPage = () => {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  
  const event = MOCK_EVENTS.find((e) => e.id === id)

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
        title={event.title}
        description={`Không gian làm việc cho sự kiện ${event.id}`}
        action={
          <div className="flex space-x-2">
            <Button variant="secondary" size="sm" render={<Link to={ROUTES.EVENTS.AI_WORKSPACE.replace(':id', event.id)} />}>
              <SparklesIcon className="mr-1.5 size-4 text-purple-500" aria-hidden="true" />
              Trợ lý AI
            </Button>
            <Button variant="outline" size="sm" onClick={() => navigate(ROUTES.EVENTS.ROOT)}>
              <ArrowLeftIcon className="mr-1.5 size-4" aria-hidden="true" />
              Quay lại
            </Button>
            <Button size="sm" render={<Link to={ROUTES.EVENTS.EDIT.replace(':id', event.id)} />}>
              <EditIcon className="mr-1.5 size-4" aria-hidden="true" />
              Chỉnh sửa
            </Button>
          </div>
        }
      />

      <div className="mt-6">
        <Tabs defaultValue="overview" className="w-full">
          <div className="overflow-x-auto pb-2 scrollbar-hide">
            <TabsList className="inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground w-max sm:w-full sm:grid sm:grid-cols-4 lg:grid-cols-8">
              <TabsTrigger value="overview">Tổng quan</TabsTrigger>
              <TabsTrigger value="timeline">Lịch trình</TabsTrigger>
              <TabsTrigger value="checklist">Công việc</TabsTrigger>
              <TabsTrigger value="budget">Ngân sách</TabsTrigger>
              <TabsTrigger value="documents">Tài liệu</TabsTrigger>
              <TabsTrigger value="media">Media</TabsTrigger>
              <TabsTrigger value="participants">Tham gia</TabsTrigger>
              <TabsTrigger value="notes">Ghi chú</TabsTrigger>
            </TabsList>
          </div>

          <div className="mt-4 focus-visible:outline-none">
            <TabsContent value="overview" className="m-0 focus-visible:outline-none"><EventOverview event={event} /></TabsContent>
            <TabsContent value="timeline" className="m-0 focus-visible:outline-none"><EventTimeline /></TabsContent>
            <TabsContent value="checklist" className="m-0 focus-visible:outline-none"><EventChecklist /></TabsContent>
            <TabsContent value="budget" className="m-0 focus-visible:outline-none"><EventBudget event={event} /></TabsContent>
            <TabsContent value="documents" className="m-0 focus-visible:outline-none"><EventDocuments /></TabsContent>
            <TabsContent value="media" className="m-0 focus-visible:outline-none"><EventMedia /></TabsContent>
            <TabsContent value="participants" className="m-0 focus-visible:outline-none"><EventParticipants /></TabsContent>
            <TabsContent value="notes" className="m-0 focus-visible:outline-none"><EventNotes /></TabsContent>
          </div>
        </Tabs>
      </div>
    </PageContainer>
  )
}

export default EventDetailPage
