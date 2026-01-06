import signaturePen from '@/assets/signature-pen.svg';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

interface SignatureBadgeProps {
  creator: string;
}

export function SignatureBadge({ creator }: SignatureBadgeProps) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 cursor-help">
            <img src={signaturePen} alt="Signature Agent" className="h-3.5 w-3.5" />
          </div>
        </TooltipTrigger>
        <TooltipContent side="top" className="max-w-xs">
          <p className="font-medium">Signature Agent</p>
          <p className="text-xs text-muted-foreground">Created by {creator}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
