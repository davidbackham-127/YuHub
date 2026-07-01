import { GiftIcon } from 'lucide-react'

import PageContainer from '@/components/common/PageContainer'
import PageHeader from '@/components/common/PageHeader'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import { ROUTES } from '@/routes/routes'
import BirthdayTabs from './components/BirthdayTabs'
import { BIRTHDAYS_MOCK } from '@/constants'

const BirthdayPage = () => {
  return (
    <PageContainer>
      <PageHeader
        title="Sinh nhật"
        description="Gửi lời chúc mừng đến những đồng nghiệp tuyệt vời"
        action={
          <Button size="sm" render={<Link to={ROUTES.BIRTHDAY_WORKSPACE} />}>
            <GiftIcon className="mr-1.5 size-4" aria-hidden="true" />
            Tạo thiệp chúc mừng
          </Button>
        }
      />

      <div className="mt-4">
        <BirthdayTabs birthdays={BIRTHDAYS_MOCK} />
      </div>
    </PageContainer>
  )
}

export default BirthdayPage
