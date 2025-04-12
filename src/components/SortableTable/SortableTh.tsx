import { ReactNode } from 'react';
import { SortDirection } from '../../types';

import { SortAscIcon, SortDescIcon, SortIndeterminateIcon } from '../../icons';
import { blue, lightGray } from '../../colors';

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
  let Widget = SortIndeterminateIcon;
  if (active) {
    Widget = sortDirection === SortDirection.Asc ? SortAscIcon : SortDescIcon;
  }

  if (active) {
    className.push(`sortable-th__${sortDirection}`);
  }

  return <th data-active={active} className="sortable" onClick={onClick}>
    <div style={{display: 'flex', justifyContent: 'space-between'}}>
      <span>{children}</span>

      <Widget color={active ? blue : lightGray} size={16} />
    </div>
  </th>;
}