import { Film, People, Planet } from '../types';
import useQueryByPath from '../api/useQueryByPath';
import { Link, useParams } from 'react-router';
import LabelByUrl from '../components/LabelByUrl';
import getIdFromUrl from '../utils/getIdFromUrl';
import formatNumber from '../utils/formatNumber';
import { Page, RemoteDataList } from '../components';
import { PageStrapline } from '../styled';

export default function PlanetDetail() {
  const {id} = useParams();
  const {data} = useQueryByPath<Planet>(`planets/${id}`);
  const planet = data?.json;
  const films = planet?.films || [];
  const residents = planet?.residents || [];
  
  if (!planet) {
    return null;    
  }

  return (
    <Page showBack title={planet.name}>
      <PageStrapline>
        <p><strong>Population:</strong> {formatNumber(planet.population)}</p>
        <p><strong>Climate:</strong> {planet.climate}</p>
      </PageStrapline>

      <RemoteDataList<Film>
        noDataMessage={`${planet.name} does not appear in any films`}
        urls={films}
        label="Films"
      >
        {(film: Film) => {
          return (
            <LabelByUrl<Film> propKey="title" url={film.url} />
          );
        }}
      </RemoteDataList>

      <RemoteDataList<People> 
        noDataMessage={`${planet.name} has no notable residents`}
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
    </Page>
  );
}