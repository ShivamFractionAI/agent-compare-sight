import { Badge } from '@/components/ui/badge';

const protocolColors: Record<string, string> = {
  Aave: 'bg-purple-500/20 text-purple-300 border-purple-500/30',
  Compound: 'bg-green-500/20 text-green-300 border-green-500/30',
  Uniswap: 'bg-pink-500/20 text-pink-300 border-pink-500/30',
  Curve: 'bg-blue-500/20 text-blue-300 border-blue-500/30',
  Balancer: 'bg-indigo-500/20 text-indigo-300 border-indigo-500/30',
  MakerDAO: 'bg-teal-500/20 text-teal-300 border-teal-500/30',
  Stargate: 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30',
  LayerZero: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30',
  Lido: 'bg-sky-500/20 text-sky-300 border-sky-500/30',
  'Rocket Pool': 'bg-orange-500/20 text-orange-300 border-orange-500/30',
  GMX: 'bg-blue-600/20 text-blue-300 border-blue-600/30',
  dYdX: 'bg-violet-500/20 text-violet-300 border-violet-500/30',
  Blur: 'bg-orange-600/20 text-orange-300 border-orange-600/30',
  OpenSea: 'bg-blue-400/20 text-blue-300 border-blue-400/30',
};

interface ProtocolBadgeProps {
  protocol: string;
  compact?: boolean;
}

export function ProtocolBadge({ protocol, compact = false }: ProtocolBadgeProps) {
  const colorClass = protocolColors[protocol] || 'bg-secondary text-secondary-foreground';
  
  return (
    <Badge 
      variant="outline" 
      className={`${colorClass} ${compact ? 'px-1.5 py-0 text-[10px]' : ''}`}
    >
      {protocol}
    </Badge>
  );
}
