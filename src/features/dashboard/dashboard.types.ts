import type { LucideIcon } from 'lucide-react'

export interface StatItem {
  title: string
  value: string | number
  description: string
  icon: LucideIcon
  trend: { value: number; label: string }
}

export interface UpcomingBirthday {
  id: string
  name: string
  team: string
  /** ISO date string */
  birthday: string
  daysUntil: number
  /** 2-character initials fallback */
  initials: string
}

export interface UpcomingEvent {
  id: string
  title: string
  startDate: string
  endDate: string
  location: string
  status: 'upcoming' | 'ongoing'
  type: 'party' | 'meeting' | 'tournament' | 'other'
}

export interface Announcement {
  id: string
  title: string
  excerpt: string
  author: string
  createdAt: string
  category: 'info' | 'warning' | 'success'
}

export interface QuickAction {
  label: string
  icon: LucideIcon
  href: string
  description: string
}
