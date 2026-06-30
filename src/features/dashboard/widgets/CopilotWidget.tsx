import {
  CakeIcon,
  ChevronRightIcon,
  MegaphoneIcon,
  PartyPopperIcon,
  SparklesIcon,
  WalletIcon,
} from 'lucide-react'
import { Link } from 'react-router-dom'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ROUTES } from '@/routes/routes'

/**
 * YU Copilot Widget.
 * An AI assistant style widget that summarizes today's status
 * and provides high-priority actionable recommendations.
 */
const CopilotWidget = () => (
  <Card className="col-span-full overflow-hidden border-primary/20 bg-primary/5 shadow-sm dark:bg-primary/10">
    <CardHeader className="pb-3">
      <div className="flex items-center gap-2">
        <SparklesIcon className="size-5 text-primary" aria-hidden="true" />
        <CardTitle className="text-base font-semibold text-primary">
          YU Copilot
        </CardTitle>
      </div>
    </CardHeader>
    <CardContent>
      <div className="flex flex-col gap-6 md:flex-row md:items-start md:gap-8">
        {/* Left: Tình hình hôm nay */}
        <div className="flex-1 space-y-3">
          <p className="text-sm font-medium text-foreground">
            Chào Bách 👋 Hôm nay có:
          </p>
          <ul className="space-y-2.5 text-sm text-muted-foreground">
            <li className="flex items-center gap-2.5">
              <span className="flex size-6 shrink-0 items-center justify-center rounded-md bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-500">
                <CakeIcon className="size-3.5" aria-hidden="true" />
              </span>
              <span>
                <strong className="font-medium text-foreground">
                  1 sinh nhật
                </strong>{' '}
                trong 2 ngày tới.
              </span>
            </li>
            <li className="flex items-center gap-2.5">
              <span className="flex size-6 shrink-0 items-center justify-center rounded-md bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-500">
                <PartyPopperIcon className="size-3.5" aria-hidden="true" />
              </span>
              <span>
                <strong className="font-medium text-foreground">
                  1 sự kiện
                </strong>{' '}
                còn 3 ngày.
              </span>
            </li>
            <li className="flex items-center gap-2.5">
              <span className="flex size-6 shrink-0 items-center justify-center rounded-md bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-500">
                <MegaphoneIcon className="size-3.5" aria-hidden="true" />
              </span>
              <span>
                <strong className="font-medium text-foreground">
                  2 bài Workplace
                </strong>{' '}
                chưa đăng.
              </span>
            </li>
            <li className="flex items-center gap-2.5">
              <span className="flex size-6 shrink-0 items-center justify-center rounded-md bg-rose-100 text-rose-600 dark:bg-rose-900/30 dark:text-rose-500">
                <WalletIcon className="size-3.5" aria-hidden="true" />
              </span>
              <span>
                <strong className="font-medium text-foreground">
                  1 khoản ngân sách
                </strong>{' '}
                chưa quyết toán.
              </span>
            </li>
          </ul>
        </div>

        {/* Right: Gợi ý ưu tiên */}
        <div className="flex-1 space-y-3 rounded-xl bg-background/60 p-4 ring-1 ring-border/50 backdrop-blur-sm dark:bg-background/40">
          <p className="text-sm font-medium text-foreground">
            Gợi ý ưu tiên hôm nay:
          </p>
          <div className="flex flex-col gap-2">
            <Button
              variant="outline"
              className="h-auto justify-between bg-background py-2 text-left hover:bg-muted"
              render={<Link to={ROUTES.BIRTHDAY} />}
            >
              <span className="truncate">Tạo bài chúc mừng sinh nhật</span>
              <ChevronRightIcon
                className="size-4 shrink-0 text-muted-foreground"
                aria-hidden="true"
              />
            </Button>
            <Button
              variant="outline"
              className="h-auto justify-between bg-background py-2 text-left hover:bg-muted"
              render={<Link to={ROUTES.EVENTS.ROOT} />}
            >
              <span className="truncate">Hoàn tất checklist sự kiện</span>
              <ChevronRightIcon
                className="size-4 shrink-0 text-muted-foreground"
                aria-hidden="true"
              />
            </Button>
            <Button
              variant="outline"
              className="h-auto justify-between bg-background py-2 text-left hover:bg-muted"
              render={<Link to={ROUTES.COMMUNICATION} />}
            >
              <span className="truncate">Đăng thông báo Workplace</span>
              <ChevronRightIcon
                className="size-4 shrink-0 text-muted-foreground"
                aria-hidden="true"
              />
            </Button>
          </div>
        </div>
      </div>
    </CardContent>
  </Card>
)

export default CopilotWidget
