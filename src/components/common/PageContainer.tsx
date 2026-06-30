import { cn } from '@/lib/utils'

interface PageContainerProps {
  children: React.ReactNode
  className?: string
}

/**
 * Reusable page-level wrapper.
 * Provides consistent max-width, centering, and vertical spacing
 * for every page inside AppLayout.
 */
const PageContainer = ({ children, className }: PageContainerProps) => (
  <div
    className={cn(
      'mx-auto flex w-full max-w-7xl flex-col gap-6',
      className
    )}
  >
    {children}
  </div>
)

export default PageContainer
