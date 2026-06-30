import { MailIcon, MapPinIcon, PhoneIcon } from 'lucide-react'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import type { Employee } from '../employee.types'

const STATUS_CONFIG: Record<
  Employee['status'],
  { label: string; variant: 'default' | 'secondary' | 'outline' }
> = {
  active: { label: 'Đang làm việc', variant: 'default' },
  on_leave: { label: 'Nghỉ phép', variant: 'outline' },
  inactive: { label: 'Đã nghỉ', variant: 'secondary' },
}

interface EmployeeProfileCardProps {
  employee: Employee
}

const EmployeeProfileCard = ({ employee }: EmployeeProfileCardProps) => {
  const statusConfig = STATUS_CONFIG[employee.status]

  return (
    <Card className="overflow-hidden">
      {/* Cover / Header background */}
      <div className="h-32 bg-primary/10 dark:bg-primary/5" />
      <CardContent className="relative px-6 pb-6 pt-0 sm:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between sm:gap-6">
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-end">
            <Avatar className="-mt-12 size-24 border-4 border-card shadow-sm sm:-mt-16 sm:size-32">
              <AvatarImage src={employee.avatarUrl} alt={employee.fullName} />
              <AvatarFallback className="text-2xl sm:text-4xl">
                {employee.initials}
              </AvatarFallback>
            </Avatar>

            <div className="flex flex-col items-center pb-2 sm:items-start">
              <div className="flex flex-col items-center gap-2 sm:flex-row">
                <h1 className="text-2xl font-bold tracking-tight text-foreground">
                  {employee.fullName}
                </h1>
                <Badge variant={statusConfig.variant} className="rounded-full">
                  {statusConfig.label}
                </Badge>
              </div>
              <p className="text-sm font-medium text-muted-foreground">
                {employee.position} · {employee.department}
              </p>
            </div>
          </div>
        </div>

        {/* Contact info grid */}
        <div className="mt-6 grid grid-cols-1 gap-4 rounded-xl border bg-muted/30 p-4 text-sm sm:grid-cols-3">
          <div className="flex items-center gap-2 text-muted-foreground">
            <MailIcon className="size-4 shrink-0" aria-hidden="true" />
            <span className="truncate">{employee.email}</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <PhoneIcon className="size-4 shrink-0" aria-hidden="true" />
            <span>{employee.phone}</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <MapPinIcon className="size-4 shrink-0" aria-hidden="true" />
            <span>Văn phòng {employee.office}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default EmployeeProfileCard
