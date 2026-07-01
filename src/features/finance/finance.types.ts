export type TransactionType = 'Income' | 'Expense'

export interface Transaction {
  id: string
  title: string
  category: string
  type: TransactionType
  amount: number
  date: string
  status: 'Completed' | 'Pending' | 'Failed'
}

export interface BudgetSummary {
  totalIncome: number
  totalExpense: number
  remaining: number
}
