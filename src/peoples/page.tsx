import { useParams } from 'react-router';
import { Collection, People } from '../types';
import useQueryByPath from '../api/useQueryByPath';
import { Error, Input, SortableTable } from '../components';
import PeoplesBody from './PeoplesBody';
import PeoplesHeader from './PeoplesHeader';
import PeopleDetail from './PeopleDetail';
import useSearchByPath from '../utils/useSearchByPath';

export default function PeoplesPage() {
  const {id} = useParams();
  const {path, searchBy, setSearchBy} = useSearchByPath('people');
  const {data, error} = useQueryByPath<Collection<People>>(path);

  if (error) {
    return <Error type={id || 'people'} />;
  }
  
  if (id) {
    return <PeopleDetail />;
  }
  
  return (
    <>
      <h1>Characters</h1>
  
      <Input
        debounceBy={675}
        onChange={setSearchBy}
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