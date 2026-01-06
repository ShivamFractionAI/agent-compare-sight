import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Agent } from '@/types/agent';
import { SignatureBadge } from './SignatureBadge';
import { CoreBadge } from './CoreBadge';
import { ProtocolBadge } from './ProtocolBadge';
import { FeeTooltip } from './FeeTooltip';
import { AgentActions } from './AgentActions';
import { formatTVL, getApyColor } from '@/lib/formatters';

interface AgentCardProps {
  agent: Agent;
}

export function AgentCard({ agent }: AgentCardProps) {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/agents/${agent.id}`);
  };

  return (
    <Card 
      className="group relative overflow-hidden border-border/50 bg-card/50 backdrop-blur transition-all hover:border-border hover:bg-card/80 cursor-pointer"
      onClick={handleCardClick}
    >
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-muted text-2xl">
              {agent.logo}
            </div>
            <div>
              <h3 className="font-semibold text-foreground">{agent.name}</h3>
              <p className="text-sm text-muted-foreground">by {agent.creator}</p>
            </div>
          </div>
          {agent.type === 'signature' ? (
            <SignatureBadge creator={agent.creator} />
          ) : (
            <CoreBadge />
          )}
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex flex-wrap gap-1.5">
          {agent.protocols.map(protocol => (
            <ProtocolBadge key={protocol} protocol={protocol} />
          ))}
        </div>
        
        <div className="grid grid-cols-4 gap-4">
          <div>
            <p className="text-xs text-muted-foreground">APY</p>
            <p className={`text-lg font-semibold ${getApyColor(agent.apy)}`}>
              {agent.apy}%
            </p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground">Instances</p>
            <p className="text-lg font-semibold text-foreground">
              {agent.totalInstances}
              {agent.yourPositions > 0 && (
                <span className="ml-1 text-sm text-muted-foreground">
                  / {agent.yourPositions} yours
                </span>
              )}
            </p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground">TVL</p>
            <p className="text-lg font-semibold text-foreground">
              {formatTVL(agent.tvl)}
            </p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground">Fees</p>
            <p className="text-lg font-semibold">
              <FeeTooltip 
                transactionFee={agent.transactionFee} 
                performanceFee={agent.performanceFee} 
              />
            </p>
          </div>
        </div>
        
        <div className="flex justify-end pt-2">
          <AgentActions hasDeposit={agent.hasDeposit} />
        </div>
      </CardContent>
    </Card>
  );
}
