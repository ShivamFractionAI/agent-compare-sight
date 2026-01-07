import { useNavigate } from 'react-router-dom';
import { Agent } from '@/types/agent';
import { SignatureBadge } from './SignatureBadge';
import { CoreBadge } from './CoreBadge';
import { FeeTooltip } from './FeeTooltip';
import { formatTVL, getApyColor } from '@/lib/formatters';

interface AgentCardCompactProps {
  agent: Agent;
}

export function AgentCardCompact({ agent }: AgentCardCompactProps) {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/agents/${agent.id}`);
  };

  return (
    <div 
      className="flex items-center gap-3 p-3 rounded-lg border border-border/50 bg-card/50 backdrop-blur transition-all hover:border-border hover:bg-card/80 cursor-pointer"
      onClick={handleCardClick}
    >
      {/* Logo */}
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-muted text-lg">
        {agent.logo}
      </div>
      
      {/* Info */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-1.5">
          <h3 className="font-medium text-foreground text-sm truncate">{agent.name}</h3>
          {agent.type === 'signature' ? (
            <SignatureBadge creator={agent.creator} />
          ) : (
            <CoreBadge />
          )}
        </div>
        <p className="text-xs text-muted-foreground truncate">by {agent.creator}</p>
        <div className="flex items-center gap-3 text-xs text-muted-foreground mt-0.5">
          <span className={`font-medium ${getApyColor(agent.apy)}`}>{agent.apy}% APY</span>
          <span>{formatTVL(agent.tvl)} TVL</span>
          <FeeTooltip 
            transactionFee={agent.transactionFee} 
            performanceFee={agent.performanceFee} 
          />
        </div>
      </div>
      
      {/* Position/Instances */}
      <div className="shrink-0 text-right">
        {agent.yourPositions > 0 ? (
          <span className="text-sm font-medium text-foreground">10.40 USDC</span>
        ) : (
          <span className="text-xs text-muted-foreground">{agent.totalInstances} Instances</span>
        )}
      </div>
    </div>
  );
}
