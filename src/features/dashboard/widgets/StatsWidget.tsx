import DashboardCard from '@/components/common/DashboardCard'
import { STATS_MOCK } from '../dashboard.mock'

/**
 * Statistics Cards widget.
 * Renders 4 metric cards in a responsive 2→4 column grid.
 */
const StatsWidget = () => (
  <section aria-label="Thống kê tổng quan">
    <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
      {STATS_MOCK.map((stat) => (
        <DashboardCard
          key={stat.title}
          title={stat.title}
          value={stat.value}
          description={stat.description}
          icon={stat.icon}
          trend={stat.trend}
        />
      ))}
    </div>
  </section>
)

export default StatsWidget
