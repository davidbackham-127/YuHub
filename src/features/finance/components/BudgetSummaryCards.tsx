import { TrendingUpIcon, TrendingDownIcon, WalletIcon } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import MetricCard from '@/components/common/MetricCard'
import type { BudgetSummary } from '../finance.types'

interface Props {
  summary: BudgetSummary
}

const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount)
}

const BudgetSummaryCards = ({ summary }: Props) => {
  const expensePercentage = Math.round((summary.totalExpense / summary.totalIncome) * 100)

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <MetricCard
          title="Tổng thu (Ngân sách cấp)"
          icon={<TrendingUpIcon className="size-4 text-green-500" />}
          value={formatCurrency(summary.totalIncome)}
          subtitle="Đã cấp quý này"
        />
        <MetricCard
          title="Tổng chi"
          icon={<TrendingDownIcon className="size-4 text-destructive" />}
          value={formatCurrency(summary.totalExpense)}
          subtitle="Đã chi tiêu thực tế"
        />
        <MetricCard
          title="Ngân sách còn lại"
          icon={<WalletIcon className="size-4 text-primary" />}
          value={formatCurrency(summary.remaining)}
          subtitle="Sẵn sàng sử dụng"
          className="bg-primary/5 border-primary/20"
          valueClassName="text-primary"
        />
      </div>

      <Card>
        <CardContent className="pt-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-muted-foreground">Mức độ sử dụng ngân sách</span>
            <span className="text-sm font-bold">{expensePercentage}%</span>
          </div>
          <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
            <div 
              className={`h-3 rounded-full transition-all duration-500 ${expensePercentage > 80 ? 'bg-destructive' : expensePercentage > 50 ? 'bg-orange-500' : 'bg-green-500'}`} 
              style={{ width: `${expensePercentage}%` }}
            ></div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default BudgetSummaryCards
