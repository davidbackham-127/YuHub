import { cn } from '@/lib/utils'

interface PageHeaderProps {
  /** Main page title — rendered as an h1 */
  title: string
  /** Supporting description text */
  description?: string
  /** Optional action slot (e.g. a Button or ButtonGroup) */
  action?: React.ReactNode
  className?: string
}

/**
 * Reusable page header.
 * Renders the page <h1>, optional description, and an optional action area.
 * Use inside PageContainer as the first child of every feature page.
 */
const PageHeader = ({
  title,
  description,
  action,
  className,
}: PageHeaderProps) => (
  <div
    className={cn(
      'flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-4',
      className
    )}
  >
    <div className="min-w-0 flex-1">
      <h1 className="truncate text-2xl font-semibold tracking-tight text-foreground">
        {title}
      </h1>
      {description && (
        <p className="mt-1 text-sm text-muted-foreground">{description}</p>
      )}
    </div>

    {action && (
      <div className="flex shrink-0 items-center gap-2">{action}</div>
    )}
  </div>
)

export default PageHeader
