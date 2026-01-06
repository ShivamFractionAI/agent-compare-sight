import { Agent } from '@/types/agent';
import { TableCell, TableRow } from '@/components/ui/table';
import { StatusBadge } from './StatusBadge';
import { ProtocolBadge } from './ProtocolBadge';
import { AgentActions } from './AgentActions';
import { formatTVL, getApyColor } from '@/lib/formatters';

interface AgentListRowProps {
  agent: Agent;
}

export function AgentListRow({ agent }: AgentListRowProps) {
  return (
    <TableRow className="group border-border/50 transition-colors hover:bg-muted/30">
      <TableCell className="py-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted text-xl">
            {agent.logo}
          </div>
          <div>
            <p className="font-medium text-foreground">{agent.name}</p>
            <p className="text-xs text-muted-foreground">by {agent.creator}</p>
          </div>
        </div>
      </TableCell>
      <TableCell>
        <StatusBadge status={agent.status} />
      </TableCell>
      <TableCell>
        <div className="flex flex-wrap gap-1">
          {agent.protocols.slice(0, 3).map(protocol => (
            <ProtocolBadge key={protocol} protocol={protocol} compact />
          ))}
          {agent.protocols.length > 3 && (
            <span className="text-xs text-muted-foreground">
              +{agent.protocols.length - 3}
            </span>
          )}
        </div>
      </TableCell>
      <TableCell>
        <span className={`font-semibold ${getApyColor(agent.apy)}`}>
          {agent.apy}%
        </span>
      </TableCell>
      <TableCell>
        <span className="text-foreground">{agent.totalInstances}</span>
        {agent.yourPositions > 0 && (
          <span className="ml-1 text-muted-foreground">
            / {agent.yourPositions}
          </span>
        )}
      </TableCell>
      <TableCell>
        <span className="font-medium text-foreground">{formatTVL(agent.tvl)}</span>
      </TableCell>
      <TableCell>
        <AgentActions agentId={agent.id} />
      </TableCell>
    </TableRow>
  );
}
