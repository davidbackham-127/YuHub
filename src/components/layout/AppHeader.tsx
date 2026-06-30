import { BellIcon, SearchIcon } from 'lucide-react'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { SidebarTrigger } from '@/components/ui/sidebar'
import { Separator } from '@/components/ui/separator'
import { usePageTitle } from '@/hooks/use-page-title'

const AppHeader = () => {
  const pageTitle = usePageTitle()

  return (
    <header className="sticky top-0 z-20 flex h-14 shrink-0 items-center gap-2 border-b bg-background/95 px-4 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      {/* Left: sidebar trigger + page title */}
      <div className="flex items-center gap-2">
        <SidebarTrigger className="-ml-1" />
        <Separator orientation="vertical" className="mr-1 h-4" />
        {/*
          Intentionally a <span>, not <h1>.
          Each feature page owns its own <h1> in the content area.
          This is a navigation label, not a document heading.
        */}
        <span className="text-sm font-semibold text-foreground">{pageTitle}</span>
      </div>

      {/* Spacer */}
      <div className="flex-1" />

      {/* Right: search, notifications, user */}
      <div className="flex items-center gap-1">
        {/* Search */}
        <Button variant="ghost" size="icon-sm" aria-label="Tìm kiếm">
          <SearchIcon className="size-4" />
        </Button>

        {/* Notifications */}
        <div className="relative">
          <Button variant="ghost" size="icon-sm" aria-label="Thông báo">
            <BellIcon className="size-4" />
          </Button>
          <Badge
            variant="destructive"
            className="absolute -top-1 -right-1 flex size-4 items-center justify-center rounded-full p-0 text-[10px] leading-none"
          >
            3
          </Badge>
        </div>

        <Separator orientation="vertical" className="mx-1 h-4" />

        {/* User menu */}
        <DropdownMenu>
          <DropdownMenuTrigger
            aria-label="Menu người dùng"
            className="inline-flex h-8 cursor-pointer items-center gap-2 rounded-md px-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none"
          >
            <Avatar size="sm">
              <AvatarImage src="" alt="User" />
              <AvatarFallback>YU</AvatarFallback>
            </Avatar>
            <span className="hidden text-sm font-medium sm:inline-block">
              YU Member
            </span>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-48">
            <DropdownMenuLabel className="font-normal">
              <div className="flex flex-col gap-0.5">
                <span className="text-sm font-medium">YU Member</span>
                <span className="text-xs text-muted-foreground">
                  yu@ivs-eli.com
                </span>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Hồ sơ cá nhân</DropdownMenuItem>
            <DropdownMenuItem>Cài đặt</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-destructive">
              Đăng xuất
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}

export default AppHeader
