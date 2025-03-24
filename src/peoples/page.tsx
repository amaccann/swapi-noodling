import { useParams, useSearchParams } from 'react-router';
import { Collection, People } from '../types';
import useQueryByPath from '../api/useQueryByPath';
import InputField from '../components/Input';
import { SortableTable } from '../components';
import PeoplesBody from './PeoplesBody';
import PeoplesHeader from './PeoplesHeader';
import PeopleDetail from './PeopleDetail';

export default function PeoplesPage() {
  const {id} = useParams();
  const [queryString, setSearch] = useSearchParams();
  const searchBy = queryString.get('search') || '';
  const path = 'people' + (searchBy ? `?search=${searchBy}` : '');
  const {data, error} = useQueryByPath<Collection<People>>(path);

  function onSearchChange(value: string | number) {
    setSearch(`?search=${value}`);
  }

  if (error) {
    return (
      <>
        <h3>There was a problem loading this page...</h3>
        <p>are you sure <em>{id || 'people'}</em> exists?</p>
      </>
    );
  }
  
  if (id) {
    return <PeopleDetail />;
  }
  
  return (
    <>
      <h1>Characters</h1>
  
      <InputField
        debounceBy={675}
        onChange={onSearchChange}
        placeholder={'Search for characters'}
        value={searchBy} />
  
      {data?.loading ? (
        <p>Loading...</p>
      ) : (
        <SortableTable<People>
          body={PeoplesBody}
          data={data?.json?.results || []}
          header={PeoplesHeader}
          sortByColumns={['name', 'homeworld']}
          type="people"
        />
      )}
    </>
  );
  
}