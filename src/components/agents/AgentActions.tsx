import { MoreHorizontal, Info, Settings, Power } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface AgentActionsProps {
  agentId: string;
  hasDeposit: boolean;
  onManage?: () => void;
  onAddFunds?: () => void;
  onDeactivate?: () => void;
}

export function AgentActions({ agentId, hasDeposit, onManage, onAddFunds, onDeactivate }: AgentActionsProps) {
  if (hasDeposit) {
    return (
      <div className="flex items-center gap-2">
        <Button 
          size="sm" 
          onClick={onAddFunds}
          className="bg-primary text-primary-foreground hover:bg-primary/90"
        >
          Add Funds
        </Button>
        <Button 
          size="sm" 
          variant="outline"
          onClick={onDeactivate}
          className="border-destructive/50 text-destructive hover:bg-destructive/10"
        >
          <Power className="mr-1.5 h-3.5 w-3.5" />
          Deactivate
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-40">
            <DropdownMenuItem>
              <Info className="mr-2 h-4 w-4" />
              View Details
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Settings className="mr-2 h-4 w-4" />
              Configure
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2">
      <Button 
        size="sm" 
        onClick={onManage}
        className="bg-primary text-primary-foreground hover:bg-primary/90"
      >
        Manage my stablecoins
      </Button>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-40">
          <DropdownMenuItem>
            <Info className="mr-2 h-4 w-4" />
            View Details
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Settings className="mr-2 h-4 w-4" />
            Configure
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
