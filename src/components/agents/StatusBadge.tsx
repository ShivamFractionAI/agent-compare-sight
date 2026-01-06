import { Badge } from '@/components/ui/badge';

interface StatusBadgeProps {
  status: 'active' | 'inactive';
}

export function StatusBadge({ status }: StatusBadgeProps) {
  return (
    <Badge 
      variant={status === 'active' ? 'default' : 'secondary'}
      className={
        status === 'active' 
          ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' 
          : 'bg-muted text-muted-foreground'
      }
    >
      <span className={`mr-1.5 h-1.5 w-1.5 rounded-full ${status === 'active' ? 'bg-emerald-400' : 'bg-muted-foreground'}`} />
      {status === 'active' ? 'Active' : 'Inactive'}
    </Badge>
  );
}
