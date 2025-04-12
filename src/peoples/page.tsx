import { useParams } from 'react-router';
import { Collection, People } from '../types';
import useQueryByPath from '../api/useQueryByPath';
import { Error, Input, Page, SortableTable } from '../components';
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
    <Page title="Characters">
      <p>
        The various characters and creatures that featured in the Star Wars movies; click any of the characters' names
        to read more information about that particular character. Otherwise, use the search box to search for a character.
      </p>

      <Input
        debounceBy={675}
        label="Star Wars characters"
        name="people"
        onChange={setSearchBy}
        placeholder={'Search for characters'}
        style={{marginTop: 8, width: '55%'}}
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
    </Page>
  );
  
}