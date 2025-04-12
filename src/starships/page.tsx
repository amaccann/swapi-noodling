import { useParams } from 'react-router';

import useQueryByPath from '../api/useQueryByPath';
import { Collection, Starship } from '../types';
import { Error, Input, Loader, Page, SortableTable } from '../components';
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
    <Page title="Starships">
      <p>
        Lists the various types of spaceships seen in the Star Wars movies; click any name of a specific ship
        to read more information about that particular craft. Otherwise you can search using the Search input below.
      </p>
      <Input
        debounceBy={675}
        label="Star Wars ships"
        name="starships"
        onChange={setSearchBy}
        placeholder={'Search for starships'}
        style={{marginTop: 8, width: '45%'}}
        value={searchBy} />

      {data?.loading ? (
        <Loader style={{display: 'flex', alignItems: 'center', padding: 32}} />
      ) : (
        <SortableTable<Starship>
          body={StarshipsBody}
          data={data?.json?.results || []}
          header={StarshipsHeader}
          sortByColumns={['name', 'model']}
          type="starships"
        />
      )}
    </Page>
  );
}

