import { ArrowUpDown, ArrowUp, ArrowDown } from 'lucide-react';
import { Agent, SortField, SortDirection } from '@/types/agent';
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { AgentListRow } from './AgentListRow';
import { cn } from '@/lib/utils';

interface AgentListProps {
  agents: Agent[];
  sortField: SortField;
  sortDirection: SortDirection;
  onSort: (field: SortField) => void;
}

export function AgentList({ agents, sortField, sortDirection, onSort }: AgentListProps) {
  const SortIcon = ({ field }: { field: SortField }) => {
    if (sortField !== field) {
      return <ArrowUpDown className="ml-1 h-3 w-3 opacity-50" />;
    }
    return sortDirection === 'asc' 
      ? <ArrowUp className="ml-1 h-3 w-3" /> 
      : <ArrowDown className="ml-1 h-3 w-3" />;
  };

  const SortableHeader = ({ field, children, className }: { field: SortField; children: React.ReactNode; className?: string }) => (
    <TableHead 
      className={cn("cursor-pointer select-none transition-colors hover:text-foreground", className)}
      onClick={() => onSort(field)}
    >
      <div className="flex items-center">
        {children}
        <SortIcon field={field} />
      </div>
    </TableHead>
  );

  return (
    <div className="rounded-lg border border-border/50 bg-card/30 backdrop-blur">
      <Table>
        <TableHeader>
          <TableRow className="border-border/50 hover:bg-transparent">
            <SortableHeader field="name" className="w-[300px]">Agent</SortableHeader>
            <TableHead className="w-[180px]">Protocols</TableHead>
            <SortableHeader field="apy" className="w-[80px]">APY</SortableHeader>
            <SortableHeader field="totalInstances" className="w-[120px]">Instances</SortableHeader>
            <SortableHeader field="tvl" className="w-[100px]">TVL</SortableHeader>
            <TableHead className="w-[280px]">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {agents.map(agent => (
            <AgentListRow key={agent.id} agent={agent} />
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
