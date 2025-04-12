import { Film, People, Planet } from '../types';
import useQueryByPath from '../api/useQueryByPath';
import { Link, useParams } from 'react-router';
import LabelByUrl from '../components/LabelByUrl';
import getIdFromUrl from '../utils/getIdFromUrl';
import formatNumber from '../utils/formatNumber';
import { Page } from '../components';

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
    <Page title={planet.name}>
      <p><strong>Population:</strong> {formatNumber(planet.population)}</p>
      <p><strong>Climate:</strong> {planet.climate}</p>

      {films.length ? (
        <>
          <h4>Films:</h4>
          <ul>
            {films.map((filmUrl) => (
              <li key={filmUrl}>
                <LabelByUrl<Film> propKey="title" url={filmUrl} />
              </li>
            ))}
          </ul>
        </>
      ) : (
        <p>{planet.name} does not appear in any films</p>
      )}

      {residents.length ? (
        <>
          <h4>Notable residents:</h4>
          <ul>
            {residents.map((residentUrl) => {
              const id = getIdFromUrl(residentUrl);
              return (
                <li key={residentUrl}>
                  <Link to={`/people/${id}`}>
                    <LabelByUrl<People> url={residentUrl} />
                  </Link>
                </li>
              );
            })}
          </ul>
        </>
      ) : (
        <p>{planet.name} has no notable residents</p>
      )}

    </Page>
  );
}