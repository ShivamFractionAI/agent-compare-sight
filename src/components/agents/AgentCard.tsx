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
      <CardHeader className="p-4 sm:pb-3 sm:p-6">
        <div className="flex items-start justify-between gap-2">
          <div className="flex items-center gap-2 sm:gap-3 min-w-0">
            <div className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-xl bg-muted text-xl sm:text-2xl">
              {agent.logo}
            </div>
            <div className="min-w-0">
              <h3 className="font-semibold text-foreground text-sm sm:text-base truncate">{agent.name}</h3>
              <p className="text-xs sm:text-sm text-muted-foreground truncate">by {agent.creator}</p>
            </div>
          </div>
          {agent.type === 'signature' ? (
            <SignatureBadge creator={agent.creator} />
          ) : (
            <CoreBadge />
          )}
        </div>
      </CardHeader>
      <CardContent className="p-4 pt-0 sm:p-6 sm:pt-0 space-y-3 sm:space-y-4">
        <div className="flex flex-wrap gap-1 sm:gap-1.5">
          {agent.protocols.slice(0, 4).map(protocol => (
            <ProtocolBadge key={protocol} protocol={protocol} />
          ))}
          {agent.protocols.length > 4 && (
            <span className="text-xs text-muted-foreground">+{agent.protocols.length - 4}</span>
          )}
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
          <div>
            <p className="text-xs text-muted-foreground">APY</p>
            <p className={`text-base sm:text-lg font-semibold ${getApyColor(agent.apy)}`}>
              {agent.apy}%
            </p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground">TVL</p>
            <p className="text-base sm:text-lg font-semibold text-foreground">
              {formatTVL(agent.tvl)}
            </p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground">Instances</p>
            <p className="text-base sm:text-lg font-semibold text-foreground">
              {agent.totalInstances}
              {agent.yourPositions > 0 && (
                <span className="ml-1 text-xs sm:text-sm text-muted-foreground">
                  / {agent.yourPositions}
                </span>
              )}
            </p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground">Fees</p>
            <p className="text-base sm:text-lg font-semibold">
              <FeeTooltip 
                transactionFee={agent.transactionFee} 
                performanceFee={agent.performanceFee} 
              />
            </p>
          </div>
        </div>
        
        <div className="flex justify-end pt-1 sm:pt-2">
          <AgentActions hasDeposit={agent.hasDeposit} />
        </div>
      </CardContent>
    </Card>
  );
}

