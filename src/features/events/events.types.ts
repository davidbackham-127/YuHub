export type EventStatus = 'Draft' | 'Upcoming' | 'Ongoing' | 'Completed' | 'Cancelled'

export interface Event {
  id: string
  title: string
  category: string
  organizer: string
  date: string
  status: EventStatus
  budget: number
  location: string
}
