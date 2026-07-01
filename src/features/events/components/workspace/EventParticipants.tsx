import { SearchIcon, UserPlusIcon } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'

const mockParticipants = [
  { id: '1', name: 'Nguyễn Văn A', role: 'Speaker', email: 'nva@company.com', avatar: '' },
  { id: '2', name: 'Trần Thị B', role: 'Organizer', email: 'ttb@company.com', avatar: 'https://i.pravatar.cc/150?u=2' },
  { id: '3', name: 'Lê Văn C', role: 'Attendee', email: 'lvc@company.com', avatar: 'https://i.pravatar.cc/150?u=3' },
  { id: '4', name: 'Phạm Thị D', role: 'Attendee', email: 'ptd@company.com', avatar: '' },
  { id: '5', name: 'Hoàng Văn E', role: 'Sponsor', email: 'hve@company.com', avatar: 'https://i.pravatar.cc/150?u=5' },
]

const getInitials = (name: string) => {
  return name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase()
}

const getRoleBadgeVariant = (role: string) => {
  switch (role) {
    case 'Speaker': return 'default'
    case 'Organizer': return 'destructive'
    case 'Sponsor': return 'outline'
    default: return 'secondary'
  }
}

const EventParticipants = () => {
  return (
    <div className="mt-4">
      <Card>
        <CardHeader>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <CardTitle>Người tham gia</CardTitle>
              <CardDescription>Danh sách khách mời và ban tổ chức ({mockParticipants.length})</CardDescription>
            </div>
            <div className="flex items-center gap-2">
              <div className="relative">
                <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input type="search" placeholder="Tìm kiếm..." className="pl-8 w-[200px]" />
              </div>
              <Button size="sm">
                <UserPlusIcon className="mr-1.5 size-4" /> Mời
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {mockParticipants.map((user) => (
              <div key={user.id} className="flex items-center justify-between p-3 border rounded-md hover:bg-muted/30 transition-colors">
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src={user.avatar} alt={user.name} />
                    <AvatarFallback>{getInitials(user.name)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-sm">{user.name}</p>
                    <p className="text-xs text-muted-foreground">{user.email}</p>
                  </div>
                </div>
                <Badge variant={getRoleBadgeVariant(user.role)}>
                  {user.role}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default EventParticipants
