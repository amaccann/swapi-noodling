import {SortableTh} from '../components';
import { SortableTableHeaderProps } from '../types';

export default function PlanetsHeader({
  onClick,
  sortBy,
  sortDirection,
}: SortableTableHeaderProps) {
  return (
    <thead>
      <tr>
        <SortableTh
          onClick={onClick('name')}
          active={sortBy === 'name'}
          sortDirection={sortDirection}>Name</SortableTh>
        <SortableTh
          active={sortBy === 'population'}
          sortDirection={sortDirection}
          onClick={onClick('population')}>Population</SortableTh>
      </tr>
    </thead>
  );
}