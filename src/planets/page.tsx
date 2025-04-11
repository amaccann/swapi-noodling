import { useParams } from 'react-router';

import useQueryByPath from '../api/useQueryByPath';
import { Collection, Planet } from '../types';
import PlanetsHeader from './PlanetsHeader';
import PlanetsBody from './PlanetsBody';
import { Error, Input, Page, SortableTable } from '../components';
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
      <Input
        debounceBy={675}
        onChange={setSearchBy}
        placeholder={'Search for planets'}
        value={searchBy} />

      {data?.loading ? (
        <p>Loading...</p>
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

