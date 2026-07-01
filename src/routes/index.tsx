import { createBrowserRouter, Navigate } from 'react-router-dom'
import AppLayout from '@/layouts/AppLayout'
import { ROUTES } from './routes'
import DashboardPage from '@/features/dashboard/DashboardPage'
import EmployeePage from '@/features/employee/EmployeePage'
import EmployeeDetailPage from '@/features/employee/EmployeeDetailPage'
import BirthdayPage from '@/features/birthday/BirthdayPage'
import BirthdayAIWorkspacePage from '@/features/birthday/BirthdayAIWorkspacePage'
import EventsPage from '@/features/events/EventsPage'
import EventDetailPage from '@/features/events/EventDetailPage'
import CreateEventPage from '@/features/events/CreateEventPage'
import EditEventPage from '@/features/events/EditEventPage'
import EventAIWorkspacePage from '@/features/events/EventAIWorkspacePage'
import TournamentPage from '@/features/tournament/TournamentPage'
import CommunicationPage from '@/features/communication/CommunicationPage'
import FinancePage from '@/features/finance/FinancePage'
import ReportsPage from '@/features/reports/ReportsPage'
import SettingsPage from '@/features/settings/SettingsPage'

export const router = createBrowserRouter([
  {
    path: ROUTES.ROOT,
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <Navigate to={ROUTES.DASHBOARD} replace />,
      },
      {
        path: ROUTES.DASHBOARD,
        element: <DashboardPage />,
      },
      {
        path: ROUTES.EMPLOYEE.ROOT,
        element: <EmployeePage />,
      },
      {
        path: ROUTES.EMPLOYEE.DETAIL,
        element: <EmployeeDetailPage />,
      },
      {
        path: ROUTES.BIRTHDAY,
        element: <BirthdayPage />,
      },
      {
        path: ROUTES.BIRTHDAY_WORKSPACE,
        element: <BirthdayAIWorkspacePage />,
      },
      {
        path: ROUTES.EVENTS.ROOT,
        element: <EventsPage />,
      },
      {
        path: ROUTES.EVENTS.CREATE,
        element: <CreateEventPage />,
      },
      {
        path: ROUTES.EVENTS.DETAIL,
        element: <EventDetailPage />,
      },
      {
        path: ROUTES.EVENTS.EDIT,
        element: <EditEventPage />,
      },
      {
        path: ROUTES.EVENTS.AI_WORKSPACE,
        element: <EventAIWorkspacePage />,
      },
      {
        path: ROUTES.TOURNAMENT,
        element: <TournamentPage />,
      },
      {
        path: ROUTES.COMMUNICATION,
        element: <CommunicationPage />,
      },
      {
        path: ROUTES.FINANCE,
        element: <FinancePage />,
      },
      {
        path: ROUTES.REPORTS,
        element: <ReportsPage />,
      },
      {
        path: ROUTES.SETTINGS,
        element: <SettingsPage />,
      },
    ],
  },
])
