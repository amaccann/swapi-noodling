import { SortableTableHeaderProps } from '../types';

export default function PlanetsHeader({onClick}: SortableTableHeaderProps) {
  return (
    <thead>
      <tr>
        <th onClick={onClick('name')}>Name</th>
        <th onClick={onClick('population')}>Population</th>
      </tr>
    </thead>
  );
}