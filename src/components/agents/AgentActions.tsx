import { Power } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface AgentActionsProps {
  hasDeposit: boolean;
  onManage?: () => void;
  onAddFunds?: () => void;
  onDeactivate?: () => void;
}

export function AgentActions({ hasDeposit, onManage, onAddFunds, onDeactivate }: AgentActionsProps) {
  const handleClick = (e: React.MouseEvent, callback?: () => void) => {
    e.stopPropagation();
    callback?.();
  };

  if (hasDeposit) {
    return (
      <div className="flex items-center gap-1.5 sm:gap-2">
        <Button 
          size="sm" 
          onClick={(e) => handleClick(e, onAddFunds)}
          className="bg-primary text-primary-foreground hover:bg-primary/90 text-xs sm:text-sm h-8 px-2.5 sm:px-3"
        >
          Add Funds
        </Button>
        <Button 
          size="sm" 
          variant="outline"
          onClick={(e) => handleClick(e, onDeactivate)}
          className="border-destructive/50 text-destructive hover:bg-destructive/10 text-xs sm:text-sm h-8 px-2.5 sm:px-3"
        >
          <Power className="mr-1 sm:mr-1.5 h-3 w-3 sm:h-3.5 sm:w-3.5" />
          <span className="hidden xs:inline">Deactivate</span>
          <span className="xs:hidden">Stop</span>
        </Button>
      </div>
    );
  }

  return (
    <Button 
      size="sm" 
      onClick={(e) => handleClick(e, onManage)}
      className="bg-primary text-primary-foreground hover:bg-primary/90 text-xs sm:text-sm h-8 px-2.5 sm:px-3"
    >
      <span className="hidden sm:inline">Manage my stablecoins</span>
      <span className="sm:hidden">Manage</span>
    </Button>
  );
}

