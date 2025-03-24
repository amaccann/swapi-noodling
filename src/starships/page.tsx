import { useParams } from 'react-router';

import useQueryByPath from '../api/useQueryByPath';
import { Collection, Starship } from '../types';
import InputField from '../components/Input';
import { SortableTable } from '../components';
import StarshipsBody from './StarshipsBody';
import StarshipsHeader from './StarshipsHeader';
import StarshipDetail from './StarshipDetail';
import useSearchByPath from '../utils/useSearchByPath';

export default function StarshipsPage() {
  const {id} = useParams();
  const {path, searchBy, setSearchBy} = useSearchByPath('starships');
  const {data, error} = useQueryByPath<Collection<Starship>>(path);

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

