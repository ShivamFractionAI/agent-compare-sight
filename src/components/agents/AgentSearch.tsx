import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

interface AgentSearchProps {
  value: string;
  onChange: (value: string) => void;
}

export function AgentSearch({ value, onChange }: AgentSearchProps) {
  return (
    <div className="relative">
      <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
      <Input
        type="text"
        placeholder="Search agents..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="pl-9 w-full sm:w-[300px] bg-card/50 border-border/50"
      />
    </div>
  );
}
