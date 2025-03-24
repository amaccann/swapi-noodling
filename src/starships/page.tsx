import { useParams, useSearchParams } from 'react-router';

import useQueryByPath from '../api/useQueryByPath';
import { Collection, Starship } from '../types';
import InputField from '../components/Input';
import { SortableTable } from '../components';
import StarshipsBody from './StarshipsBody';
import StarshipsHeader from './StarshipsHeader';
import StarshipDetail from './StarshipDetail';


export default function StarshipsPage() {
  const {id} = useParams();
  const [queryString, setSearch] = useSearchParams();
  const searchBy = queryString.get('search') || '';
  const path = 'starships' + (searchBy ? `?search=${searchBy}` : '');
  const {data, error} = useQueryByPath<Collection<Starship>>(path);

  function onSearchChange(value: string | number) {
    setSearch(`?search=${value}`);
  }
  console.log('data', data);

  if (error) {
    return (
      <>
        <h3>There was a problem loading this page...</h3>
        <p>are you sure <em>{id || 'starships'}</em> exists?</p>
      </>
    );
  }

  if (id) {
    return <StarshipDetail />;
  }

  return (
    <>
      <h1>Starships</h1>

      <InputField
        debounceBy={675}
        onChange={onSearchChange}
        placeholder={'Search for starships'}
        value={searchBy} />

      {data?.loading ? (
        <p>Loading...</p>
      ) : (
        <SortableTable<Starship>
          body={StarshipsBody}
          data={data?.json?.results || []}
          header={StarshipsHeader}
          sortByColumns={['name', 'model']}
          type="starships"
        />
      )}
    </>
  );
}

