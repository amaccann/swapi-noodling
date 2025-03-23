import { SortableTableHeaderProps } from '../types';

export default function PeoplesHeader({onClick}: SortableTableHeaderProps) {
  return (
    <thead>
      <tr>
        <th onClick={onClick('name')}>Name</th>
        <th onClick={onClick('homeworld')}>Homeworld</th>
      </tr>
    </thead>
  );
}