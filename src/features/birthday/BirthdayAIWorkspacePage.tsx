import { ArrowLeftIcon } from 'lucide-react'
import { Link } from 'react-router-dom'

import PageContainer from '@/components/common/PageContainer'
import PageHeader from '@/components/common/PageHeader'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ROUTES } from '@/routes/routes'

import CaptionGenerator from './components/workspace/CaptionGenerator'
import PosterGenerator from './components/workspace/PosterGenerator'
import EmailGenerator from './components/workspace/EmailGenerator'
import GiftSuggestion from './components/workspace/GiftSuggestion'

const BirthdayAIWorkspacePage = () => {
  return (
    <PageContainer>
      <PageHeader
        title="Không gian AI Sinh nhật"
        description="Tạo lời chúc, thiết kế poster, email và gợi ý quà tặng với AI"
        action={
          <Button variant="outline" size="sm" render={<Link to={ROUTES.BIRTHDAY} />}>
            <ArrowLeftIcon className="mr-1.5 size-4" aria-hidden="true" />
            Quay lại Sinh nhật
          </Button>
        }
      />

      <div className="mt-4">
        <Tabs defaultValue="caption" className="w-full space-y-6">
          <TabsList className="grid w-full grid-cols-4 lg:w-[600px]">
            <TabsTrigger value="caption">Tạo Lời Chúc</TabsTrigger>
            <TabsTrigger value="poster">Poster</TabsTrigger>
            <TabsTrigger value="email">Email</TabsTrigger>
            <TabsTrigger value="gift">Gợi ý Quà</TabsTrigger>
          </TabsList>

          <TabsContent value="caption" className="focus-visible:outline-none mt-6">
            <CaptionGenerator />
          </TabsContent>

          <TabsContent value="poster" className="focus-visible:outline-none mt-6">
            <PosterGenerator />
          </TabsContent>

          <TabsContent value="email" className="focus-visible:outline-none mt-6">
            <EmailGenerator />
          </TabsContent>

          <TabsContent value="gift" className="focus-visible:outline-none mt-6">
            <GiftSuggestion />
          </TabsContent>
        </Tabs>
      </div>
    </PageContainer>
  )
}

export default BirthdayAIWorkspacePage
