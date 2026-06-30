import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import BirthdayDashboard from './BirthdayDashboard'
import BirthdayCalendar from './BirthdayCalendar'
import UpcomingBirthdays from './UpcomingBirthdays'
import type { BirthdayEvent } from '../birthday.types'

interface BirthdayTabsProps {
  birthdays: BirthdayEvent[]
}

const BirthdayTabs = ({ birthdays }: BirthdayTabsProps) => {
  return (
    <Tabs defaultValue="dashboard" className="w-full space-y-6">
      <TabsList className="grid w-full grid-cols-3 sm:w-[400px]">
        <TabsTrigger value="dashboard">Tổng quan</TabsTrigger>
        <TabsTrigger value="calendar">Lịch tháng</TabsTrigger>
        <TabsTrigger value="upcoming">Sắp tới</TabsTrigger>
      </TabsList>

      <TabsContent value="dashboard" className="focus-visible:outline-none">
        <BirthdayDashboard birthdays={birthdays} />
      </TabsContent>

      <TabsContent value="calendar" className="focus-visible:outline-none">
        <BirthdayCalendar birthdays={birthdays} />
      </TabsContent>

      <TabsContent value="upcoming" className="focus-visible:outline-none">
        <UpcomingBirthdays birthdays={birthdays} />
      </TabsContent>
    </Tabs>
  )
}

export default BirthdayTabs
