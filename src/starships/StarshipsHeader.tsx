import { SortableTableHeaderProps } from '../types';

export default function StarshipsHeader({onClick}: SortableTableHeaderProps) {
  return (
    <thead>
      <tr>
        <th onClick={onClick('name')}>Name</th>
        <th onClick={onClick('model')}>Model</th>
      </tr>
    </thead>
  );
}