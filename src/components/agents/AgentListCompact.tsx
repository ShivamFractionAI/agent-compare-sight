import { useState } from 'react';
import { Agent } from '@/types/agent';
import { AgentCardCompact } from './AgentCardCompact';
import { MobilePagination } from './MobilePagination';
import { usePagination } from '@/hooks/usePagination';

interface AgentListCompactProps {
  agents: Agent[];
}

const ITEMS_PER_PAGE = 8;

export function AgentListCompact({ agents }: AgentListCompactProps) {
  const [expandedAgentId, setExpandedAgentId] = useState<string | null>(null);
  
  const {
    paginatedItems,
    currentPage,
    totalPages,
    nextPage,
    prevPage,
    hasNextPage,
    hasPrevPage,
  } = usePagination(agents, { itemsPerPage: ITEMS_PER_PAGE });

  const handleToggleExpand = (agentId: string) => {
    setExpandedAgentId(prev => prev === agentId ? null : agentId);
  };

  return (
    <div className="space-y-2">
      <div className="space-y-2">
        {paginatedItems.map(agent => (
          <AgentCardCompact 
            key={agent.id} 
            agent={agent} 
            isExpanded={expandedAgentId === agent.id}
            onToggleExpand={() => handleToggleExpand(agent.id)}
          />
        ))}
      </div>
      
      <MobilePagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPrevPage={prevPage}
        onNextPage={nextPage}
        hasPrevPage={hasPrevPage}
        hasNextPage={hasNextPage}
      />
    </div>
  );
}
