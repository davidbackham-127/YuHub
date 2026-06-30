import type { LucideIcon } from 'lucide-react'
import { TrendingDownIcon, TrendingUpIcon } from 'lucide-react'

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { cn } from '@/lib/utils'

interface DashboardCardTrend {
  /** Numeric change value (e.g. 5 for +5, -2 for -2) */
  value: number
  /** Label shown after the number (e.g. "so với tháng trước") */
  label: string
}

export interface DashboardCardProps {
  title: string
  /** Primary metric value to display */
  value: string | number
  /** Optional supporting text below the value */
  description?: string
  /** Lucide icon displayed in the top-right corner */
  icon: LucideIcon
  /** Optional trend indicator */
  trend?: DashboardCardTrend
  className?: string
}

/**
 * Reusable metric stat card for dashboards.
 * Displays an icon, title, value, optional description and trend indicator.
 * Positive trends are shown in green, negative in red.
 */
const DashboardCard = ({
  title,
  value,
  description,
  icon: Icon,
  trend,
  className,
}: DashboardCardProps) => {
  const isPositive = trend ? trend.value >= 0 : undefined

  return (
    <Card className={cn('relative overflow-hidden', className)}>
      <CardHeader className="pb-2">
        <div className="flex items-start justify-between gap-2">
          <CardTitle className="text-sm font-medium text-muted-foreground">
            {title}
          </CardTitle>
          <div className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <Icon className="size-4" aria-hidden="true" />
          </div>
        </div>
      </CardHeader>

      <CardContent className="pt-0">
        <p className="text-2xl font-bold tracking-tight text-foreground">
          {value}
        </p>

        {description && (
          <p className="mt-1 text-xs text-muted-foreground">{description}</p>
        )}

        {trend && (
          <div
            className={cn(
              'mt-2 flex items-center gap-1 text-xs font-medium',
              isPositive ? 'text-emerald-600 dark:text-emerald-400' : 'text-red-600 dark:text-red-400'
            )}
          >
            {isPositive ? (
              <TrendingUpIcon className="size-3" aria-hidden="true" />
            ) : (
              <TrendingDownIcon className="size-3" aria-hidden="true" />
            )}
            <span>
              {isPositive ? '+' : ''}
              {trend.value} {trend.label}
            </span>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

export default DashboardCard
