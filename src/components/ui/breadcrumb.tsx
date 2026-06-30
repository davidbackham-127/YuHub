import * as React from 'react'
import { ChevronRightIcon, MoreHorizontalIcon } from 'lucide-react'

import { cn } from '@/lib/utils'

function Breadcrumb({ ...props }: React.ComponentProps<'nav'>) {
  return <nav aria-label="breadcrumb" data-slot="breadcrumb" {...props} />
}

function BreadcrumbList({
  className,
  ...props
}: React.ComponentProps<'ol'>) {
  return (
    <ol
      data-slot="breadcrumb-list"
      className={cn(
        'flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground sm:gap-2',
        className
      )}
      {...props}
    />
  )
}

function BreadcrumbItem({
  className,
  ...props
}: React.ComponentProps<'li'>) {
  return (
    <li
      data-slot="breadcrumb-item"
      className={cn('inline-flex items-center gap-1.5', className)}
      {...props}
    />
  )
}

/**
 * Wrap your routing Link component (e.g. React Router <Link>) inside this
 * to get breadcrumb link styling without coupling to a specific router.
 */
function BreadcrumbLink({
  className,
  ...props
}: React.ComponentProps<'span'>) {
  return (
    <span
      data-slot="breadcrumb-link"
      className={cn(
        'cursor-pointer transition-colors hover:text-foreground',
        className
      )}
      {...props}
    />
  )
}

/** The current (last) page in the breadcrumb — not a link. */
function BreadcrumbPage({
  className,
  ...props
}: React.ComponentProps<'span'>) {
  return (
    <span
      data-slot="breadcrumb-page"
      role="link"
      aria-current="page"
      aria-disabled="true"
      className={cn('font-medium text-foreground', className)}
      {...props}
    />
  )
}

function BreadcrumbSeparator({
  children,
  className,
  ...props
}: React.ComponentProps<'li'>) {
  return (
    <li
      data-slot="breadcrumb-separator"
      role="presentation"
      aria-hidden="true"
      className={cn('[&>svg]:size-3.5', className)}
      {...props}
    >
      {children ?? <ChevronRightIcon />}
    </li>
  )
}

function BreadcrumbEllipsis({
  className,
  ...props
}: React.ComponentProps<'span'>) {
  return (
    <span
      data-slot="breadcrumb-ellipsis"
      role="presentation"
      aria-hidden="true"
      className={cn('flex size-9 items-center justify-center', className)}
      {...props}
    >
      <MoreHorizontalIcon className="size-4" />
      <span className="sr-only">More</span>
    </span>
  )
}

export {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
}
