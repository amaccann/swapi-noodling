import { Film, People, Starship } from '../types';
import useQueryByPath from '../api/useQueryByPath';
import { Link, useParams } from 'react-router';
import LabelByUrl from '../components/LabelByUrl';
import getIdFromUrl from '../utils/getIdFromUrl';
import { FilmDetails, Page, RemoteDataList } from '../components';
import { PageStrapline } from '../styled';
import Homeworld from './Homeworld';

export default function PeopleDetail() {
  const {id} = useParams();
  const {data} = useQueryByPath<People>(`people/${id}`);
  
  const {json: person, loading} = data || {};
  
  if (!loading && !person) {
    return null;    
  }

  const starships = person?.starships || [];
  const films = person?.films || [];
  const homeworld = person?.homeworld;

  return (
    <Page loading={loading} showBack title={person?.name}>
      <PageStrapline>
        <p>
          <strong>Homeworld:</strong>
          <Homeworld homeworld={homeworld!} />
        </p>
      </PageStrapline>

      <RemoteDataList<Starship>
        noDataMessage={`${person?.name} does not pilot any starships`}
        urls={starships}
        label="Starships piloted"
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
        asCard
        noDataMessage={`${person?.name} does not appear in any films`}
        label="Films"
        urls={films}
      >
        {(film: Film) => <FilmDetails film={film} key={film.episode_id} />}
      </RemoteDataList>
    </Page>
  );
}