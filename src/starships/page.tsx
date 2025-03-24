import { useParams } from 'react-router';

import useQueryByPath from '../api/useQueryByPath';
import { Collection, Starship } from '../types';
import { Error, Input, SortableTable } from '../components';
import StarshipsBody from './StarshipsBody';
import StarshipsHeader from './StarshipsHeader';
import StarshipDetail from './StarshipDetail';
import useSearchByPath from '../utils/useSearchByPath';

export default function StarshipsPage() {
  const {id} = useParams();
  const {path, searchBy, setSearchBy} = useSearchByPath('starships');
  const {data, error} = useQueryByPath<Collection<Starship>>(path);

  if (error) {
    return <Error type={id || 'starships'} />;
  }

  if (id) {
    return <StarshipDetail />;
  }

  return (
    <>
      <h1>Starships</h1>

      <Input
        debounceBy={675}
        onChange={setSearchBy}
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

