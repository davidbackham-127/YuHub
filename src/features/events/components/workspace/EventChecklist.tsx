import { useState } from 'react'
import { CalendarIcon } from 'lucide-react'

import SectionCard from '@/components/common/SectionCard'
import PriorityBadge from '@/components/common/PriorityBadge'
import { Checkbox } from '@/components/ui/checkbox'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

type Priority = 'High' | 'Medium' | 'Low'

interface Task {
  id: string
  title: string
  completed: boolean
  dueDate: string
  assignee: { name: string; avatar?: string }
  priority: Priority
}

const initialTasks: Task[] = [
  { 
    id: '1', 
    title: 'Chốt danh sách khách mời', 
    completed: true,
    dueDate: '2026-06-15',
    assignee: { name: 'Nguyễn Văn A' },
    priority: 'High'
  },
  { 
    id: '2', 
    title: 'Đặt phòng họp / Địa điểm', 
    completed: true,
    dueDate: '2026-06-18',
    assignee: { name: 'Trần Thị B', avatar: 'https://i.pravatar.cc/150?u=2' },
    priority: 'High'
  },
  { 
    id: '3', 
    title: 'Thiết kế banner và poster', 
    completed: false,
    dueDate: '2026-06-25',
    assignee: { name: 'Lê Văn C', avatar: 'https://i.pravatar.cc/150?u=3' },
    priority: 'Medium'
  },
  { 
    id: '4', 
    title: 'Gửi email thư mời', 
    completed: false,
    dueDate: '2026-06-28',
    assignee: { name: 'Phạm Thị D' },
    priority: 'High'
  },
  { 
    id: '5', 
    title: 'Chuẩn bị quà tặng', 
    completed: false,
    dueDate: '2026-07-05',
    assignee: { name: 'Trần Thị B', avatar: 'https://i.pravatar.cc/150?u=2' },
    priority: 'Low'
  },
  { 
    id: '6', 
    title: 'Đặt đồ ăn / Tiệc trà (Teabreak)', 
    completed: false,
    dueDate: '2026-07-10',
    assignee: { name: 'Nguyễn Văn A' },
    priority: 'Medium'
  },
]

const getInitials = (name: string) => {
  return name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase()
}

const EventChecklist = () => {
  const [tasks, setTasks] = useState<Task[]>(initialTasks)

  const toggleTask = (id: string) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t))
  }

  const completedCount = tasks.filter(t => t.completed).length
  const progress = Math.round((completedCount / tasks.length) * 100)

  return (
    <div className="mt-4">
      <SectionCard
        title="Công việc cần làm"
        description="Tiến độ chuẩn bị cho sự kiện"
        action={
          <div className="text-right">
            <span className="text-2xl font-bold text-primary">{progress}%</span>
            <p className="text-xs text-muted-foreground">Hoàn thành</p>
          </div>
        }
      >
        <div className="w-full bg-muted rounded-full h-2 mb-4 overflow-hidden -mt-2">
          <div className="bg-primary h-2 rounded-full transition-all duration-500" style={{ width: `${progress}%` }}></div>
        </div>
        <div className="space-y-4">
          {tasks.map((task) => (
            <div 
              key={task.id} 
              className={`flex flex-col sm:flex-row sm:items-center justify-between p-3 border rounded-md transition-colors ${task.completed ? 'bg-muted/30 border-muted' : 'hover:bg-muted/10'}`}
            >
              <div className="flex items-start space-x-3 mb-3 sm:mb-0">
                <Checkbox 
                  id={`task-${task.id}`} 
                  checked={task.completed} 
                  onCheckedChange={() => toggleTask(task.id)}
                  className="mt-1"
                />
                <div className="grid gap-2">
                  <label
                    htmlFor={`task-${task.id}`}
                    className={`text-sm font-semibold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer ${task.completed ? 'line-through text-muted-foreground' : ''}`}
                  >
                    {task.title}
                  </label>
                  <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1" title="Ngày hết hạn">
                      <CalendarIcon className="size-3.5" />
                      <span className={new Date(task.dueDate) < new Date() && !task.completed ? 'text-destructive font-medium' : ''}>
                        {new Date(task.dueDate).toLocaleDateString('vi-VN')}
                      </span>
                    </div>
                    <PriorityBadge priority={task.priority} />
                  </div>
                </div>
              </div>
              
              <div className="flex items-center space-x-2 self-start sm:self-auto ml-7 sm:ml-0">
                <span className="text-xs text-muted-foreground hidden md:inline-block">Phụ trách:</span>
                <div className="flex items-center gap-2 bg-muted/40 px-2 py-1 rounded-full border">
                  <Avatar className="size-5">
                    <AvatarImage src={task.assignee.avatar} alt={task.assignee.name} />
                    <AvatarFallback className="text-[10px]">{getInitials(task.assignee.name)}</AvatarFallback>
                  </Avatar>
                  <span className="text-xs font-medium pr-1">{task.assignee.name}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </SectionCard>
    </div>
  )
}

export default EventChecklist
