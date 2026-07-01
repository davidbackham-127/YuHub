import type { ReactNode } from 'react'

interface InfoCardProps {
  icon: ReactNode
  label: string
  value: ReactNode
}

const InfoCard = ({ icon, label, value }: InfoCardProps) => {
  return (
    <div className="flex items-center space-x-4">
      <div className="size-5 text-muted-foreground flex-shrink-0">
        {icon}
      </div>
      <div>
        <p className="text-sm font-medium text-muted-foreground">{label}</p>
        <div className="text-base font-semibold">{value}</div>
      </div>
    </div>
  )
}

export default InfoCard
