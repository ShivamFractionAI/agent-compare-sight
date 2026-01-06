export interface Agent {
  id: string;
  name: string;
  logo: string;
  type: 'core' | 'signature';
  protocols: string[];
  apy: number;
  totalInstances: number;
  yourPositions: number;
  tvl: number;
  creator: string;
  hasDeposit: boolean;
}

export type SortField = 'name' | 'apy' | 'tvl' | 'totalInstances';
export type SortDirection = 'asc' | 'desc';
export type ViewMode = 'cards' | 'list';
