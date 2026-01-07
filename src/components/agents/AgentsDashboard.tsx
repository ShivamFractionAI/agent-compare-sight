import { mockAgents } from '@/data/mockAgents';
import { useAgentView } from '@/hooks/useAgentView';
import { ViewToggle } from './ViewToggle';
import { AgentSearch } from './AgentSearch';
import { AgentGrid } from './AgentGrid';
import { AgentList } from './AgentList';
import { useIsMobile } from '@/hooks/use-mobile';

export function AgentsDashboard() {
  const isMobile = useIsMobile();
  const { 
    viewMode, 
    setViewMode, 
    sortField, 
    sortDirection, 
    handleSort, 
    sortedAgents,
    searchQuery,
    setSearchQuery,
  } = useAgentView(mockAgents);

  // On mobile, always show cards
  const effectiveViewMode = isMobile ? 'cards' : viewMode;

  return (
    <div className="min-h-screen bg-background p-4 sm:p-6">
      <div className="mx-auto max-w-7xl space-y-4 sm:space-y-6">
        {/* Header */}
        <div className="flex flex-col gap-3 sm:gap-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-foreground">All Agents</h1>
              <p className="text-sm text-muted-foreground">
                {sortedAgents.length} agents available
              </p>
            </div>
            {/* Hide view toggle on mobile */}
            {!isMobile && (
              <ViewToggle viewMode={viewMode} onViewModeChange={setViewMode} />
            )}
          </div>
          <AgentSearch value={searchQuery} onChange={setSearchQuery} />
        </div>

        {/* Content */}
        {effectiveViewMode === 'cards' ? (
          <AgentGrid agents={sortedAgents} />
        ) : (
          <AgentList 
            agents={sortedAgents} 
            sortField={sortField}
            sortDirection={sortDirection}
            onSort={handleSort}
          />
        )}
      </div>
    </div>
  );
}
