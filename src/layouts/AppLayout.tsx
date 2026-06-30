import { Outlet } from 'react-router-dom'

import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar'
import AppSidebar from '@/components/layout/AppSidebar'
import AppHeader from '@/components/layout/AppHeader'

const AppLayout = () => {
  return (
    <SidebarProvider>
      <AppSidebar />
      {/*
        SidebarInset renders a <main> element.
        min-h-0 + overflow-y-auto confine scrolling to this column,
        so the sticky header stays fixed relative to the content area.
      */}
      <SidebarInset className="min-h-0 overflow-y-auto">
        <AppHeader />
        {/*
          Use <div> here — SidebarInset already renders the semantic <main>.
          Two nested <main> elements are invalid HTML.
        */}
        <div className="flex flex-1 flex-col gap-4 p-4 md:p-6">
          <Outlet />
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}

export default AppLayout
