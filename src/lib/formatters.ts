export function formatTVL(value: number): string {
  if (value >= 1000000) {
    return `$${(value / 1000000).toFixed(1)}M`;
  }
  if (value >= 1000) {
    return `$${(value / 1000).toFixed(0)}K`;
  }
  return `$${value}`;
}

export function getApyColor(apy: number): string {
  if (apy >= 15) return 'text-emerald-400';
  if (apy >= 8) return 'text-yellow-400';
  if (apy > 0) return 'text-foreground';
  return 'text-muted-foreground';
}
