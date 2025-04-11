import {SortableTh} from '../components';
import { SortableTableHeaderProps } from '../types';

export default function StarshipsHeader({
  onClick,
  sortBy,
  sortDirection,
}: SortableTableHeaderProps) {
  return (
    <thead>
      <tr>
        <SortableTh
          active={sortBy === 'name'}
          sortDirection={sortDirection}
          onClick={onClick('name')}>Name</SortableTh>
        <SortableTh
          active={sortBy === 'model'}
          sortDirection={sortDirection}
          onClick={onClick('model')}>Model</SortableTh>
      </tr>
    </thead>
  );
}