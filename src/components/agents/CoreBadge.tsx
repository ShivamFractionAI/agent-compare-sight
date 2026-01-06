import { Shield } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

export function CoreBadge() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-muted cursor-help">
            <Shield className="h-3.5 w-3.5 text-muted-foreground" />
          </div>
        </TooltipTrigger>
        <TooltipContent side="top" className="max-w-xs">
          <p className="font-medium">Core Agent</p>
          <p className="text-xs text-muted-foreground">Created by Fraction AI</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
