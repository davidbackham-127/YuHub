import type { ReactNode } from 'react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card'

interface SectionCardProps {
  title?: string
  description?: string
  action?: ReactNode
  footer?: ReactNode
  children: ReactNode
  className?: string
  contentClassName?: string
}

const SectionCard = ({
  title,
  description,
  action,
  footer,
  children,
  className = '',
  contentClassName = '',
}: SectionCardProps) => {
  return (
    <Card className={className}>
      {(title || description || action) && (
        <CardHeader className={action ? 'flex flex-row items-center justify-between' : ''}>
          <div>
            {title && <CardTitle>{title}</CardTitle>}
            {description && <CardDescription>{description}</CardDescription>}
          </div>
          {action && <div>{action}</div>}
        </CardHeader>
      )}
      <CardContent className={contentClassName}>
        {children}
      </CardContent>
      {footer && (
        <CardFooter>
          {footer}
        </CardFooter>
      )}
    </Card>
  )
}

export default SectionCard
