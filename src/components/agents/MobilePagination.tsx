import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface MobilePaginationProps {
  currentPage: number;
  totalPages: number;
  onPrevPage: () => void;
  onNextPage: () => void;
  hasPrevPage: boolean;
  hasNextPage: boolean;
}

export function MobilePagination({
  currentPage,
  totalPages,
  onPrevPage,
  onNextPage,
  hasPrevPage,
  hasNextPage,
}: MobilePaginationProps) {
  if (totalPages <= 1) return null;

  return (
    <div className="flex items-center justify-between py-3 px-1">
      <Button
        variant="ghost"
        size="sm"
        onClick={onPrevPage}
        disabled={!hasPrevPage}
        className="h-8 px-2"
      >
        <ChevronLeft className="h-4 w-4 mr-1" />
        Prev
      </Button>
      
      <span className="text-sm text-muted-foreground">
        {currentPage} / {totalPages}
      </span>
      
      <Button
        variant="ghost"
        size="sm"
        onClick={onNextPage}
        disabled={!hasNextPage}
        className="h-8 px-2"
      >
        Next
        <ChevronRight className="h-4 w-4 ml-1" />
      </Button>
    </div>
  );
}
