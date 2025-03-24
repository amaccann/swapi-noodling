import { useParams, useSearchParams } from 'react-router';

import useQueryByPath from '../api/useQueryByPath';
import { Collection, Planet } from '../types';
import InputField from '../components/Input';
import PlanetsHeader from './PlanetsHeader';
import PlanetsBody from './PlanetsBody';
import { SortableTable } from '../components';
import PlanetDetail from './PlanetDetail';


export default function PlanetsPage() {
  const {id} = useParams();
  const [queryString, setSearch] = useSearchParams();
  const searchBy = queryString.get('search') || '';
  const path = 'planets' + (searchBy ? `?search=${searchBy}` : '');
  const {data, error} = useQueryByPath<Collection<Planet>>(path);

  function onSearchChange(value: string | number) {
    setSearch(`?search=${value}`);
  }

  if (error) {
    return (
      <>
        <h3>There was a problem loading this page...</h3>
        <p>are you sure <em>{id || 'planets'}</em> exists?</p>
      </>
    );
  }

  if (id) {
    return <PlanetDetail />;
  }

  return (
    <>
      <h1>Planets</h1>

      <InputField
        debounceBy={675}
        onChange={onSearchChange}
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
    </>
  );
}

