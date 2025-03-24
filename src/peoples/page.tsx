import { useParams } from 'react-router';
import { Collection, People } from '../types';
import useQueryByPath from '../api/useQueryByPath';
import InputField from '../components/Input';
import { SortableTable } from '../components';
import PeoplesBody from './PeoplesBody';
import PeoplesHeader from './PeoplesHeader';
import PeopleDetail from './PeopleDetail';
import useSearchByPath from '../utils/useSearchByPath';

export default function PeoplesPage() {
  const {id} = useParams();
  const {path, searchBy, setSearchBy} = useSearchByPath('people');
  const {data, error} = useQueryByPath<Collection<People>>(path);

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