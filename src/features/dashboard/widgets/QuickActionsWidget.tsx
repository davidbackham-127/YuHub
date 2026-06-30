import { Link } from 'react-router-dom'
import { ZapIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { QUICK_ACTIONS_MOCK } from '../dashboard.mock'
import type { QuickAction } from '../dashboard.types'

const QuickActionButton = ({ action }: { action: QuickAction }) => (
  <Button
    variant="outline"
    className="h-auto w-full justify-start gap-3 px-3 py-2.5 text-left"
    render={<Link to={action.href} />}
  >
    <div className="flex size-8 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
      <action.icon className="size-4" aria-hidden="true" />
    </div>
    <div className="min-w-0">
      <p className="text-sm font-medium">{action.label}</p>
      <p className="truncate text-xs text-muted-foreground">
        {action.description}
      </p>
    </div>
  </Button>
)

/**
 * Quick Actions widget.
 * A set of shortcut buttons linking to the most common operations.
 */
const QuickActionsWidget = () => (
  <Card>
    <CardHeader>
      <div className="flex items-center gap-2">
        <ZapIcon className="size-4 text-muted-foreground" aria-hidden="true" />
        <CardTitle className="text-sm font-medium">Thao tác nhanh</CardTitle>
      </div>
    </CardHeader>
    <CardContent className="flex flex-col gap-2">
      {QUICK_ACTIONS_MOCK.map((action) => (
        <QuickActionButton key={action.label} action={action} />
      ))}
    </CardContent>
  </Card>
)

export default QuickActionsWidget
