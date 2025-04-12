import {SortableTh} from '../components';
import { SortableTableHeaderProps } from '../types';

export default function PeoplesHeader({
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
          onClick={onClick('name')}
          style={{width: 250}}>Name</SortableTh>
        <SortableTh
          active={sortBy === 'homeworld'}
          sortDirection={sortDirection}
          onClick={onClick('homeworld')}>Homeworld</SortableTh>
      </tr>
    </thead>
  );
}