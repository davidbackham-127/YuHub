import { ArrowDownIcon, ArrowUpIcon, FilterIcon } from 'lucide-react'
import SectionCard from '@/components/common/SectionCard'
import SearchToolbar from '@/components/common/SearchToolbar'
import StatusBadge from '@/components/common/StatusBadge'
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import { createColumnHelper, type ColumnDef } from '@tanstack/react-table'

import { DataTable } from '@/components/common/DataTable'
import type { Transaction, TransactionType } from '../finance.types'

interface Props {
  transactions: Transaction[]
}

const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount)
}

const getTypeIcon = (type: TransactionType) => {
  if (type === 'Income') {
    return <ArrowUpIcon className="size-4 text-green-500 mr-1" />
  }
  return <ArrowDownIcon className="size-4 text-destructive mr-1" />
}

const getTypeLabel = (type: TransactionType) => {
  return type === 'Income' ? 'Thu' : 'Chi'
}

const columnHelper = createColumnHelper<Transaction>()

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const columns: ColumnDef<Transaction, any>[] = [
  columnHelper.accessor('id', {
    header: 'Mã GD',
    cell: (info) => <span className="font-mono text-xs text-muted-foreground">{info.getValue()}</span>,
  }),
  columnHelper.accessor('date', {
    header: 'Ngày',
    cell: (info) => <span className="whitespace-nowrap">{new Date(info.getValue()).toLocaleDateString('vi-VN')}</span>,
  }),
  columnHelper.accessor('title', {
    header: 'Mô tả',
    cell: (info) => <span className="font-medium max-w-[200px] truncate" title={info.getValue()}>{info.getValue()}</span>,
  }),
  columnHelper.accessor('category', {
    header: 'Danh mục',
  }),
  columnHelper.accessor('type', {
    header: 'Loại',
    cell: (info) => {
      const type = info.getValue()
      return (
        <div className="flex items-center">
          {getTypeIcon(type)}
          <span className={type === 'Income' ? 'text-green-600 font-medium' : 'text-destructive font-medium'}>
            {getTypeLabel(type)}
          </span>
        </div>
      )
    },
  }),
  columnHelper.accessor('amount', {
    header: () => <div className="text-right">Số tiền</div>,
    cell: (info) => {
      const type = info.row.original.type
      const amount = info.getValue()
      return (
        <div className="text-right font-semibold whitespace-nowrap">
          {type === 'Income' ? '+' : '-'}{formatCurrency(amount)}
        </div>
      )
    },
  }),
  columnHelper.accessor('status', {
    header: 'Trạng thái',
    cell: (info) => <StatusBadge status={info.getValue()} className="whitespace-nowrap" />,
  }),
]

const ExpenseTable = ({ transactions }: Props) => {
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <SectionCard
      className="mt-6"
      title="Lịch sử giao dịch"
      description="Chi tiết các khoản thu chi nội bộ"
      action={
        <div className="flex items-center gap-2">
          <SearchToolbar 
            placeholder="Tìm kiếm giao dịch..." 
            inputClassName="w-full sm:w-[250px]" 
            value={searchTerm}
            onChange={setSearchTerm}
          />
          <Button variant="outline" size="icon" title="Lọc">
            <FilterIcon className="size-4" />
          </Button>
        </div>
      }
    >
      <DataTable
        columns={columns}
        data={transactions}
        globalFilter={searchTerm}
        emptyMessage="Chưa có khoản thu chi nào được ghi nhận."
      />
    </SectionCard>
  )
}

export default ExpenseTable
