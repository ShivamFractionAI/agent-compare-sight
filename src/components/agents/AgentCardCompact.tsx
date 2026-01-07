import { useNavigate } from 'react-router-dom';
import { Power, User } from 'lucide-react';
import { Agent } from '@/types/agent';
import { SignatureBadge } from './SignatureBadge';
import { CoreBadge } from './CoreBadge';
import { FeeTooltip } from './FeeTooltip';
import { Button } from '@/components/ui/button';
import { formatTVL, getApyColor } from '@/lib/formatters';

interface AgentCardCompactProps {
  agent: Agent;
  isExpanded?: boolean;
  onToggleExpand?: () => void;
}

export function AgentCardCompact({ agent, isExpanded, onToggleExpand }: AgentCardCompactProps) {
  const navigate = useNavigate();

  const handleCardClick = () => {
    onToggleExpand?.();
  };

  const handleViewProfile = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigate(`/agents/${agent.id}`);
  };

  const handleManage = (e: React.MouseEvent) => {
    e.stopPropagation();
    // Handle manage action
  };

  const handleAddFunds = (e: React.MouseEvent) => {
    e.stopPropagation();
    // Handle add funds action
  };

  const handleDeactivate = (e: React.MouseEvent) => {
    e.stopPropagation();
    // Handle deactivate action
  };

  return (
    <div 
      className={`rounded-lg border border-border/50 bg-card/50 backdrop-blur transition-all hover:border-border hover:bg-card/80 cursor-pointer ${isExpanded ? 'border-border bg-card/80' : ''}`}
      onClick={handleCardClick}
    >
      <div className="flex items-center gap-3 p-3">
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
      
      {/* Expanded Actions */}
      {isExpanded && (
        <div className="px-3 pb-3 pt-1 space-y-2 border-t border-border/30">
          {agent.hasDeposit ? (
            <div className="flex gap-2">
              <Button 
                size="sm" 
                onClick={handleAddFunds}
                className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90 text-sm h-9"
              >
                Add Funds
              </Button>
              <Button 
                size="sm" 
                variant="outline"
                onClick={handleDeactivate}
                className="flex-1 border-destructive/50 text-destructive hover:bg-destructive/10 text-sm h-9"
              >
                <Power className="mr-1.5 h-3.5 w-3.5" />
                Deactivate
              </Button>
            </div>
          ) : (
            <Button 
              size="sm" 
              onClick={handleManage}
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 text-sm h-9"
            >
              Manage My Stablecoins
            </Button>
          )}
          <Button 
            size="sm" 
            variant="ghost"
            onClick={handleViewProfile}
            className="w-full text-muted-foreground hover:text-foreground text-sm h-9"
          >
            <User className="mr-1.5 h-3.5 w-3.5" />
            View Profile
          </Button>
        </div>
      )}
    </div>
  );
}
