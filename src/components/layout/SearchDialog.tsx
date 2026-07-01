import { useState, useEffect } from 'react'
import {
  SearchIcon,
  UserIcon,
  CakeIcon,
  CalendarIcon,
  TrophyIcon,
  MegaphoneIcon,
  MessageSquareIcon,
} from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from '@/components/ui/command'

/**
 * Search button that opens a modal search dialog using shadcn CommandDialog.
 * Keyboard shortcut: Ctrl+K / ⌘K
 * Searches through: Employee, Birthday, Event, Tournament, Announcement, Communication
 */
const SearchDialog = () => {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }
    document.addEventListener('keydown', down)
    return () => document.removeEventListener('keydown', down)
  }, [])

  return (
    <>
      <Button
        variant="ghost"
        size="icon-sm"
        aria-label="Tìm kiếm (Ctrl+K)"
        aria-keyshortcuts="Control+k Meta+k"
        onClick={() => setOpen(true)}
      >
        <SearchIcon className="size-4" />
      </Button>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Tìm kiếm nhân viên, sự kiện, giải đấu..." />
        <CommandList>
          <CommandEmpty>Không tìm thấy kết quả nào.</CommandEmpty>
          
          <CommandGroup heading="Nhân viên">
            <CommandItem>
              <UserIcon className="mr-2 h-4 w-4" />
              <span>Tìm kiếm danh bạ nhân viên</span>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          
          <CommandGroup heading="Sinh nhật">
            <CommandItem>
              <CakeIcon className="mr-2 h-4 w-4" />
              <span>Tra cứu sinh nhật tháng này</span>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />

          <CommandGroup heading="Sự kiện">
            <CommandItem>
              <CalendarIcon className="mr-2 h-4 w-4" />
              <span>Danh sách sự kiện sắp tới</span>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />

          <CommandGroup heading="Giải đấu">
            <CommandItem>
              <TrophyIcon className="mr-2 h-4 w-4" />
              <span>Tra cứu bảng xếp hạng giải đấu</span>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />

          <CommandGroup heading="Thông báo">
            <CommandItem>
              <MegaphoneIcon className="mr-2 h-4 w-4" />
              <span>Các thông báo nội bộ mới nhất</span>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />

          <CommandGroup heading="Giao tiếp">
            <CommandItem>
              <MessageSquareIcon className="mr-2 h-4 w-4" />
              <span>Thảo luận và tin nhắn</span>
            </CommandItem>
          </CommandGroup>
          
        </CommandList>
      </CommandDialog>
    </>
  )
}

export default SearchDialog
