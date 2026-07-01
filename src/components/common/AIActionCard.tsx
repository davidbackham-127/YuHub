import type { ReactNode } from 'react'
import SectionCard from './SectionCard'

interface AIActionCardProps {
  configTitle: string
  configDescription?: string
  configContent: ReactNode
  configAction: ReactNode
  resultTitle: string
  resultDescription?: string
  resultContent: ReactNode
  resultAction: ReactNode
}

const AIActionCard = ({
  configTitle,
  configDescription,
  configContent,
  configAction,
  resultTitle,
  resultDescription,
  resultContent,
  resultAction,
}: AIActionCardProps) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-4">
      <SectionCard 
        title={configTitle} 
        description={configDescription}
        className="flex flex-col"
        contentClassName="space-y-4 flex-1"
        footer={<div className="flex w-full justify-end pt-4 border-t">{configAction}</div>}
      >
        {configContent}
      </SectionCard>

      <SectionCard 
        title={resultTitle} 
        description={resultDescription}
        className="flex flex-col"
        contentClassName="flex-1 flex flex-col space-y-4"
        footer={<div className="flex w-full justify-end space-x-2 pt-4 border-t">{resultAction}</div>}
      >
        {resultContent}
      </SectionCard>
    </div>
  )
}

export default AIActionCard
