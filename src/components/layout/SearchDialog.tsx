import { useState } from 'react'
import { SearchIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'

/**
 * Search button that opens a modal search dialog.
 * Keyboard shortcut: Ctrl+K / ⌘K (shown in trigger button).
 * Actual search logic will be implemented as a feature later.
 */
const SearchDialog = () => {
  const [open, setOpen] = useState(false)

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

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-md" showCloseButton={false}>
          <DialogHeader>
            <DialogTitle className="sr-only">Tìm kiếm</DialogTitle>
          </DialogHeader>
          <div className="flex items-center gap-2 border-b pb-3">
            <SearchIcon className="size-4 shrink-0 text-muted-foreground" />
            <Input
              placeholder="Tìm kiếm nhân viên, sự kiện..."
              className="border-0 p-0 shadow-none focus-visible:ring-0"
              autoFocus
            />
            <kbd className="hidden shrink-0 rounded border bg-muted px-1.5 py-0.5 font-mono text-[10px] text-muted-foreground sm:inline-flex">
              ESC
            </kbd>
          </div>
          <p className="text-center text-xs text-muted-foreground">
            Nhập từ khóa để tìm kiếm
          </p>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default SearchDialog
