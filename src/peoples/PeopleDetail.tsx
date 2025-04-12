import { Film, People, Planet, Starship } from '../types';
import useQueryByPath from '../api/useQueryByPath';
import { Link, useParams } from 'react-router';
import LabelByUrl from '../components/LabelByUrl';
import getIdFromUrl from '../utils/getIdFromUrl';
import { Page, RemoteDataList } from '../components';

export default function PeopleDetail() {
  const {id} = useParams();
  const {data} = useQueryByPath<People>(`people/${id}`);
  
  const person = data?.json;
  const homeworldData = useQueryByPath<Planet>(person?.homeworld);
  const homeworld = homeworldData?.data?.json;
  const starships = person?.starships || [];
  const films = person?.films || [];
  
  if (!person) {
    return null;    
  }

  return (
    <Page title={person.name}>
      <p>
        <strong>Homeworld:</strong>
        <Link to={`/planets/${getIdFromUrl(homeworld?.url)}`}>
          {homeworld?.name || ''}
        </Link>
      </p>

      <RemoteDataList<Starship>
        noDataMessage={`${person?.name} does not pilot any starships`}
        urls={starships}
        label="Starships piloted:"
      >
        {(starship: Starship) => {
          const id = getIdFromUrl(starship.url);
          return (
            <Link to={`/starships/${id}`}>
              <LabelByUrl<Starship> url={starship.url} />
            </Link>
          );
        }}
      </RemoteDataList>

      <RemoteDataList<Film> 
        noDataMessage={`${person?.name} does not appear in any films`}
        label="Films:"
        urls={films}
      >
        {(film: Film) => (
          <LabelByUrl<Film> propKey="title" url={film.url} />
        )}
      </RemoteDataList>
    </Page>
  );
}