import { DownloadIcon, PlusIcon } from 'lucide-react'
import PageContainer from '@/components/common/PageContainer'
import PageHeader from '@/components/common/PageHeader'
import { Button } from '@/components/ui/button'

import BudgetSummaryCards from './components/BudgetSummaryCards'
import ExpenseTable from './components/ExpenseTable'
import { MOCK_BUDGET_SUMMARY, MOCK_TRANSACTIONS } from '@/constants'

const FinancePage = () => {
  return (
    <PageContainer>
      <PageHeader
        title="Quản lý Tài chính"
        description="Theo dõi ngân sách, các khoản thu và chi tiêu của tổ chức"
        action={
          <div className="flex space-x-2">
            <Button variant="outline" size="sm">
              <DownloadIcon className="mr-1.5 size-4" aria-hidden="true" />
              Xuất báo cáo
            </Button>
            <Button size="sm">
              <PlusIcon className="mr-1.5 size-4" aria-hidden="true" />
              Tạo giao dịch mới
            </Button>
          </div>
        }
      />

      <div className="mt-6">
        <BudgetSummaryCards summary={MOCK_BUDGET_SUMMARY} />
        <ExpenseTable transactions={MOCK_TRANSACTIONS} />
      </div>
    </PageContainer>
  )
}

export default FinancePage
