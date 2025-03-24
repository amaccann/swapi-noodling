import { ReactNode } from 'react';
import { SortDirection } from '../types';

import styles from './SortableTh.module.css';

export default function SortableTh({
  active,
  children,
  onClick,
  sortDirection
}: {
  active?: boolean;
  children: ReactNode;
  onClick: (() => void) | undefined;
  sortDirection: SortDirection;
}) {
  const className = ['sortable-th'];
  let widget = '-';
  if (active) {
    widget = sortDirection === SortDirection.Asc ? '⬆️' : '⬇️';
  }

  if (active) {
    className.push(`sortable-th__${sortDirection}`);
  }

  return <th className={styles.sortableTh} onClick={onClick}>
    <div>
      {children}

      <span className={styles.sortableThArrow}>
        {widget}
      </span>
    </div>
  </th>;
}