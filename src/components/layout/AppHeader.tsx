import { Link } from 'react-router-dom'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
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
import { useBreadcrumbs } from '@/hooks/use-breadcrumbs'
import SearchDialog from './SearchDialog'
import ThemeToggle from './ThemeToggle'
import { NotificationCenter } from './NotificationCenter'
// ─── AppBreadcrumb ────────────────────────────────────────────────────────────

const AppBreadcrumb = () => {
  const items = useBreadcrumbs()

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {items.map((item, index) => {
          const isLast = index === items.length - 1
          return (
            <BreadcrumbItem key={`${item.label}-${index}`}>
              {!isLast ? (
                <>
                  <BreadcrumbLink>
                    <Link
                      to={item.href!}
                      className="transition-colors hover:text-foreground"
                    >
                      {item.label}
                    </Link>
                  </BreadcrumbLink>
                  <BreadcrumbSeparator />
                </>
              ) : (
                <BreadcrumbPage>{item.label}</BreadcrumbPage>
              )}
            </BreadcrumbItem>
          )
        })}
      </BreadcrumbList>
    </Breadcrumb>
  )
}

// ─── UserMenu ─────────────────────────────────────────────────────────────────

const UserMenu = () => (
  <DropdownMenu>
    <DropdownMenuTrigger
      aria-label="Menu người dùng"
      className="inline-flex h-8 cursor-pointer items-center gap-2 rounded-md px-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
    >
      <Avatar size="sm">
        <AvatarImage src="" alt="" />
        <AvatarFallback aria-hidden="true">YU</AvatarFallback>
      </Avatar>
      <span className="hidden text-sm font-medium sm:inline-block">
        YU Member
      </span>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end" className="w-52">
      <DropdownMenuLabel className="font-normal">
        <div className="flex flex-col gap-0.5">
          <span className="text-sm font-medium">YU Member</span>
          <span className="text-xs text-muted-foreground">yu@ivs-eli.com</span>
        </div>
      </DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuItem>Hồ sơ cá nhân</DropdownMenuItem>
      <DropdownMenuItem>Cài đặt</DropdownMenuItem>
      <DropdownMenuSeparator />
      <DropdownMenuItem className="text-destructive focus:text-destructive">
        Đăng xuất
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
)

// ─── AppHeader ────────────────────────────────────────────────────────────────

const AppHeader = () => (
  <header className="sticky top-0 z-20 flex h-14 shrink-0 items-center gap-2 border-b bg-background/95 px-4 backdrop-blur supports-[backdrop-filter]:bg-background/60">
    {/* Left: sidebar toggle + breadcrumb */}
    <div className="flex min-w-0 flex-1 items-center gap-2">
      <SidebarTrigger className="-ml-1 shrink-0" />
      <Separator orientation="vertical" className="mr-1 h-4 shrink-0" />
      <AppBreadcrumb />
    </div>

    {/* Right: actions */}
    <div className="flex shrink-0 items-center gap-1">
      <SearchDialog />
      <NotificationCenter />
      <ThemeToggle />
      <Separator orientation="vertical" className="mx-1 h-4" />
      <UserMenu />
    </div>
  </header>
)

export default AppHeader
