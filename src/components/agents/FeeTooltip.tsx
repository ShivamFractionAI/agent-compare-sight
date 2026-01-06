import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

interface FeeTooltipProps {
  transactionFee: number;
  performanceFee: number;
}

export function FeeTooltip({ transactionFee, performanceFee }: FeeTooltipProps) {
  const totalFee = transactionFee + performanceFee;

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <span className="cursor-help text-foreground underline decoration-dotted underline-offset-2">
            {totalFee.toFixed(1)}%
          </span>
        </TooltipTrigger>
        <TooltipContent side="top">
          <div className="space-y-1 text-sm">
            <div className="flex justify-between gap-4">
              <span className="text-muted-foreground">Transaction Fee:</span>
              <span className="font-medium">{transactionFee}%</span>
            </div>
            <div className="flex justify-between gap-4">
              <span className="text-muted-foreground">Performance Fee:</span>
              <span className="font-medium">{performanceFee}%</span>
            </div>
          </div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
