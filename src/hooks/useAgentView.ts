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
  const [searchQuery, setSearchQuery] = useState('');

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

  const filteredAndSortedAgents = useMemo(() => {
    let result = [...agents];
    
    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      result = result.filter(agent => 
        agent.name.toLowerCase().includes(query) ||
        agent.creator.toLowerCase().includes(query) ||
        agent.protocols.some(p => p.toLowerCase().includes(query))
      );
    }
    
    // Sort
    result.sort((a, b) => {
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
        case 'fees':
          comparison = (a.transactionFee + a.performanceFee) - (b.transactionFee + b.performanceFee);
          break;
      }
      
      return sortDirection === 'asc' ? comparison : -comparison;
    });
    
    return result;
  }, [agents, sortField, sortDirection, searchQuery]);

  return {
    viewMode,
    setViewMode,
    sortField,
    sortDirection,
    handleSort,
    sortedAgents: filteredAndSortedAgents,
    searchQuery,
    setSearchQuery,
  };
}
