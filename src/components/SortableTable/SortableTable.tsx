import { ReactNode, useMemo, useState } from 'react';

import styles from './SortableTable.module.css';
import { SortDirection, SortableTableHeaderProps } from '../../types';
import castTrueValue from '../../utils/castTrueValue';

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
    return [...data].sort(sortData);
  }, [sortDirection, sortBy, JSON.stringify(data)]);

  function sortData<T>(l: T, r: T) {
    const leftValue = castTrueValue<T>(l[sortBy as keyof T]);
    const rightValue = castTrueValue<T>(r[sortBy as keyof T]);

    const diff = sortDirection === SortDirection.Asc ? leftValue > rightValue : rightValue > leftValue;

    return diff ? 1 : -1;
  }

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
        <TableHeader
          onClick={onClickSortableHeader}
          sortBy={sortBy}
          sortDirection={sortDirection} />

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
