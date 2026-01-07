import { Agent } from '@/types/agent';
import { AgentCardCompact } from './AgentCardCompact';
import { MobilePagination } from './MobilePagination';
import { usePagination } from '@/hooks/usePagination';

interface AgentListCompactProps {
  agents: Agent[];
}

const ITEMS_PER_PAGE = 8;

export function AgentListCompact({ agents }: AgentListCompactProps) {
  const {
    paginatedItems,
    currentPage,
    totalPages,
    nextPage,
    prevPage,
    hasNextPage,
    hasPrevPage,
  } = usePagination(agents, { itemsPerPage: ITEMS_PER_PAGE });

  return (
    <div className="space-y-2">
      <div className="space-y-2">
        {paginatedItems.map(agent => (
          <AgentCardCompact key={agent.id} agent={agent} />
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
