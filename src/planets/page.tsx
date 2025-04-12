import { useParams } from 'react-router';

import useQueryByPath from '../api/useQueryByPath';
import { Collection, Planet } from '../types';
import PlanetsHeader from './PlanetsHeader';
import PlanetsBody from './PlanetsBody';
import { Error, Input, Loader, Page, SortableTable } from '../components';
import PlanetDetail from './PlanetDetail';
import useSearchByPath from '../utils/useSearchByPath';


export default function PlanetsPage() {
  const {id} = useParams();
  const {path, searchBy, setSearchBy} = useSearchByPath('planets');
  const {data, error} = useQueryByPath<Collection<Planet>>(path);

  if (error) {
    return <Error type={id || 'planets'} />;
  }

  if (id) {
    return <PlanetDetail />;
  }

  return (
    <Page title="Planets">
      <p>
        The various planets featured from the Star Wars movies; click any of the planets' names
        to read more information about that particular planet. Otherwise, use the search box 
        provided to search for any planets across the movie series.
      </p>

      <Input
        debounceBy={675}
        label="Star Wars planets"
        name="planets"
        onChange={setSearchBy}
        placeholder={'Search for planets'}
        style={{marginTop: 8, width: '40%'}}
        value={searchBy} />

      {data?.loading ? (
        <Loader style={{display: 'flex', alignItems: 'center', padding: 32}} />
      ) : (
        <SortableTable<Planet>
          body={PlanetsBody}
          data={data?.json?.results || []}
          header={PlanetsHeader}
          sortByColumns={['name', 'population']}
          type="planets"
        />
      )}
    </Page>
  );
}

