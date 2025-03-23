import { ReactNode, useMemo, useState } from 'react';

import styles from './SortableTable.module.css';
import { SortableTableHeaderProps } from '../types';

enum SortDirection {
  Asc = 'asc',
  Desc = 'desc'
};

export default function SortableTable<T>({
  body: TableBody,
  data,
  defaultSortBy = 'name',
  header: TableHeader,
  sortByColumns = [],
  type,
}: {
  body: ({data} : { data: T[] }) => ReactNode;
  data: T[]
  defaultSortBy?: string
  header: ({onClick} : SortableTableHeaderProps) => ReactNode;
  sortByColumns?: string[]
  type: string
}) {
  const [sortDirection, setSortDirection] = useState<SortDirection>(SortDirection.Asc);
  const [sortBy, setSortBy] = useState<string>(defaultSortBy);
 

  const sortedResults = useMemo((): T[] => {
    return [...data].sort((left: T, right: T) => {
      const leftValue = left[sortBy as keyof T];
      const rightValue = right[sortBy as keyof T];
      const diff = sortDirection === SortDirection.Asc ? leftValue > rightValue : rightValue > leftValue;
      return diff ? 1 : -1;
    });
  }, [sortDirection, sortBy, JSON.stringify(data)]);

  function onClickSortableHeader(value: string) {
    if (!sortByColumns.includes(value)) {
      return;
    }

    return function() {
      setSortBy(value);
      if (value === sortBy) {
        setSortDirection(sortDirection === SortDirection.Asc ? SortDirection.Desc : SortDirection.Asc);
      }
    };
  }

  return (
    <>
      <table className={styles.table}>
        <TableHeader onClick={onClickSortableHeader} />

        {sortedResults.length ? (
          <TableBody data={sortedResults} />
        ) : (
          <tbody>
            <tr>
              <td colSpan={100}>
                <span>No data found for {type}</span>
                {/* {searchBy ? <em>(searching for {searchBy})</em> : null} */}
              </td>
            </tr>
          </tbody>
        )}
      </table>
    </>
    
  );
}
