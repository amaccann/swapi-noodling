import { useSearchParams } from 'react-router';

export default function useSearchByPath(path: string) {
  const [queryString, setSearch] = useSearchParams();
  const searchBy = queryString.get('search') || '';
  const fullPath = path + (searchBy ? `?search=${searchBy}` : '');

  function setSearchBy(value: string | number) {
    setSearch(`?search=${value}`);
  }

  return {
    path: fullPath,
    searchBy,
    setSearchBy,
  };
}