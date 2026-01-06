import { useState, useEffect, useMemo } from 'react';
import { Agent, SortField, SortDirection, ViewMode } from '@/types/agent';

const VIEW_MODE_KEY = 'agents-view-mode';

export function useAgentView(agents: Agent[]) {
  const [viewMode, setViewMode] = useState<ViewMode>(() => {
    const saved = localStorage.getItem(VIEW_MODE_KEY);
    return (saved as ViewMode) || 'cards';
  });
  
  const [sortField, setSortField] = useState<SortField>('name');
  const [sortDirection, setSortDirection] = useState<SortDirection>('asc');

  useEffect(() => {
    localStorage.setItem(VIEW_MODE_KEY, viewMode);
  }, [viewMode]);

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortDirection(prev => prev === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  const sortedAgents = useMemo(() => {
    return [...agents].sort((a, b) => {
      let comparison = 0;
      
      switch (sortField) {
        case 'name':
          comparison = a.name.localeCompare(b.name);
          break;
        case 'apy':
          comparison = a.apy - b.apy;
          break;
        case 'tvl':
          comparison = a.tvl - b.tvl;
          break;
        case 'totalInstances':
          comparison = a.totalInstances - b.totalInstances;
          break;
      }
      
      return sortDirection === 'asc' ? comparison : -comparison;
    });
  }, [agents, sortField, sortDirection]);

  return {
    viewMode,
    setViewMode,
    sortField,
    sortDirection,
    handleSort,
    sortedAgents,
  };
}
