import { Film, People, Planet } from '../types';
import useQueryByPath from '../api/useQueryByPath';
import { Link, useParams } from 'react-router';
import {FilmDetails, LabelByUrl} from '../components';
import getIdFromUrl from '../utils/getIdFromUrl';
import formatNumber from '../utils/formatNumber';
import { Page, RemoteDataList } from '../components';
import { PageStrapline } from '../styled';

export default function PlanetDetail() {
  const {id} = useParams();
  const {data} = useQueryByPath<Planet>(`planets/${id}`);
  const {json: planet, loading} = data || {};
  const films = planet?.films || [];
  const residents = planet?.residents || [];
  
  if (!loading && !planet) {
    return null;
  }

  const {climate, name, population} = planet || {};

  return (
    <Page isLoading={loading} showBack title={name!}>
      <PageStrapline>
        <p><strong>Population:</strong> {formatNumber(population!)}</p>
        <p><strong>Climate:</strong> {climate}</p>
      </PageStrapline>

      <RemoteDataList<People> 
        noDataMessage={`${name} has no notable residents`}
        urls={residents}
        label="Notable residents">
        {(resident: People) => {
          const id = getIdFromUrl(resident.url);

          return (
            <Link to={`/people/${id}`}>
              <LabelByUrl<People> url={resident.url} />
            </Link>
          );
        }}
      </RemoteDataList>

      <RemoteDataList<Film>
        asCard
        noDataMessage={`${name} does not appear in any films`}
        urls={films}
        label="Films"
      >
        {(film: Film) => <FilmDetails film={film} key={film.episode_id} />}
      </RemoteDataList>
    </Page>
  );
}