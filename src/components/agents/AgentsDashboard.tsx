import { mockAgents } from '@/data/mockAgents';
import { useAgentView } from '@/hooks/useAgentView';
import { ViewToggle } from './ViewToggle';
import { AgentSearch } from './AgentSearch';
import { AgentGrid } from './AgentGrid';
import { AgentList } from './AgentList';

export function AgentsDashboard() {
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

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="mx-auto max-w-7xl space-y-6">
        {/* Header */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">All Agents</h1>
            <p className="text-muted-foreground">
              {sortedAgents.length} agents available
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <AgentSearch value={searchQuery} onChange={setSearchQuery} />
            <ViewToggle viewMode={viewMode} onViewModeChange={setViewMode} />
          </div>
        </div>

        {/* Content */}
        {viewMode === 'cards' ? (
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
