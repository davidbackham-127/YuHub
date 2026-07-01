import { Badge } from '@/components/ui/badge'
import { getStatusConfig } from '@/constants'

interface StatusBadgeProps {
  status: string
  className?: string
}

const StatusBadge = ({ status, className = '' }: StatusBadgeProps) => {
  const config = getStatusConfig(status)
  
  return (
    <Badge variant={config.variant} className={className}>
      {config.label}
    </Badge>
  )
}

export default StatusBadge
