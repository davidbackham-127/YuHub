import { Loader2Icon } from 'lucide-react'

interface LoadingStateProps {
  message?: string
  className?: string
}

const LoadingState = ({ message = 'Đang tải dữ liệu...', className = '' }: LoadingStateProps) => {
  return (
    <div className={`flex flex-col items-center justify-center p-8 ${className}`}>
      <Loader2Icon className="h-8 w-8 animate-spin text-primary opacity-50 mb-4" />
      <p className="text-sm text-muted-foreground">{message}</p>
    </div>
  )
}

export default LoadingState
