import type { ReactNode } from 'react'
import { SearchIcon } from 'lucide-react'
import { Input } from '@/components/ui/input'

interface SearchToolbarProps {
  placeholder?: string
  value?: string
  onChange?: (val: string) => void
  action?: ReactNode
  className?: string
  inputClassName?: string
}

const SearchToolbar = ({
  placeholder = 'Tìm kiếm...',
  value,
  onChange,
  action,
  className = '',
  inputClassName = 'w-[200px]'
}: SearchToolbarProps) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="relative">
        <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input 
          type="search" 
          placeholder={placeholder} 
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
          className={`pl-8 ${inputClassName}`} 
        />
      </div>
      {action && <div>{action}</div>}
    </div>
  )
}

export default SearchToolbar
