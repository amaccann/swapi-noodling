import { ReactNode } from 'react';
import { SortDirection } from '../../types';

import { SortAscIcon, SortDescIcon, SortIndeterminateIcon } from '../../icons';
import { blue, lightGray } from '../../colors';

export default function SortableTh({
  active,
  children,
  onClick,
  sortDirection,
  style
}: {
  active?: boolean;
  children: ReactNode;
  onClick: (() => void) | undefined;
  sortDirection: SortDirection;
  style?: Record<string, string | number>
}) {
  const className = ['sortable-th'];
  let Widget = SortIndeterminateIcon;
  if (active) {
    Widget = sortDirection === SortDirection.Asc ? SortAscIcon : SortDescIcon;
  }

  if (active) {
    className.push(`sortable-th__${sortDirection}`);
  }

  return <th
    data-active={active}
    className="sortable"
    onClick={onClick}
    style={style}
  >
    <div style={{display: 'flex', alignItems: 'center', gap: 8}}>
      <Widget color={active ? blue : lightGray} size={16} />

      <span>{children}</span>
    </div>
  </th>;
}