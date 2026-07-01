import { FlagIcon } from 'lucide-react'

interface PriorityBadgeProps {
  priority: 'High' | 'Medium' | 'Low' | string
  className?: string
}

const getPriorityConfig = (priority: string) => {
  switch (priority) {
    case 'High': return { color: 'text-destructive', label: 'Cao' }
    case 'Medium': return { color: 'text-orange-500', label: 'Trung bình' }
    case 'Low': return { color: 'text-muted-foreground', label: 'Thấp' }
    default: return { color: 'text-muted-foreground', label: priority }
  }
}

const PriorityBadge = ({ priority, className = '' }: PriorityBadgeProps) => {
  const config = getPriorityConfig(priority)
  
  return (
    <div className={`flex items-center gap-1 ${className}`} title="Mức độ ưu tiên">
      <FlagIcon className={`size-3.5 ${config.color}`} />
      <span>{config.label}</span>
    </div>
  )
}

export default PriorityBadge
