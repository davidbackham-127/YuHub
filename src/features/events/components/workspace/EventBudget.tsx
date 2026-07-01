import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { createColumnHelper, type ColumnDef } from '@tanstack/react-table'
import { DataTable } from '@/components/common/DataTable'
import type { Event } from '../../events.types'

interface Props {
  event: Event
}

const mockBudgetItems = [
  { id: '1', item: 'Thuê địa điểm', cost: 15000000, note: 'Đã thanh toán cọc 50%' },
  { id: '2', item: 'Ăn uống (F&B)', cost: 20000000, note: 'Buffet 50 người' },
  { id: '3', item: 'Trang trí & In ấn', cost: 5000000, note: 'Banner, standee, backdrop' },
  { id: '4', item: 'Quà tặng', cost: 8000000, note: 'Quà hiện vật cho team thắng giải' },
  { id: '5', item: 'Chi phí dự phòng', cost: 2000000, note: '' },
]

const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount)
}

const columnHelper = createColumnHelper<typeof mockBudgetItems[0]>()

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const columns: ColumnDef<typeof mockBudgetItems[0], any>[] = [
  columnHelper.accessor('item', {
    header: 'Hạng mục',
    cell: (info) => <span className="font-medium">{info.getValue()}</span>,
  }),
  columnHelper.accessor('note', {
    header: 'Ghi chú',
    cell: (info) => <span className="text-muted-foreground">{info.getValue()}</span>,
  }),
  columnHelper.accessor('cost', {
    header: () => <div className="text-right">Số tiền (VNĐ)</div>,
    cell: (info) => <div className="text-right font-medium">{formatCurrency(info.getValue())}</div>,
  }),
]

const EventBudget = ({ event }: Props) => {
  const totalCost = mockBudgetItems.reduce((acc, item) => acc + item.cost, 0)
  const remaining = event.budget - totalCost

  return (
    <div className="mt-4 space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="bg-primary/5 border-primary/20">
          <CardHeader className="pb-2">
            <CardDescription className="font-medium text-foreground">Tổng ngân sách</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold text-primary">{formatCurrency(event.budget)}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Đã chi tiêu (Dự kiến)</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">{formatCurrency(totalCost)}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Còn lại</CardDescription>
          </CardHeader>
          <CardContent>
            <p className={`text-2xl font-bold ${remaining < 0 ? 'text-destructive' : 'text-green-600'}`}>
              {formatCurrency(remaining)}
            </p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Chi tiết hạng mục</CardTitle>
        </CardHeader>
        <CardContent>
          <DataTable
            columns={columns}
            data={mockBudgetItems}
            emptyMessage="Không có hạng mục nào."
          />
        </CardContent>
      </Card>
    </div>
  )
}

export default EventBudget
