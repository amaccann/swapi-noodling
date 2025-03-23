import { ApiCacheItem, Film, People, Planet } from '../types';
import useQueryByPath from '../api/useQueryByPath';
import { Link, useParams } from 'react-router';
import getIdFromUrl from '../utils/getIdFromUrl';

export default function PlanetDetail() {
  const {id} = useParams();
  const {data} = useQueryByPath<Planet>(`planets/${id}`);
  
  const planet = data?.json;
  const filmData = useQueryByPath<Film>(planet?.films);
  const residentsData = useQueryByPath<People>(planet?.residents);

  
  if (!planet) {
    return null;    
  }

  return (
    <div>
      <h2>{planet.name}</h2>
      <p><strong>Population:</strong> {planet.population}</p>
      <p><strong>Climate:</strong> {planet.climate}</p>
      <h4>Films:</h4>

      <ul>
        {(filmData.data as ApiCacheItem<Film>[]).map((item: ApiCacheItem<Film>, index) => {
          const {json: film,loading } = item || {};

          return (
            <li key={index}>
              {loading ? 'Loading' : film?.title}
            </li>
          );
        })}
      </ul>

      <h4>Notable residents:</h4>
      <ul>
        {(residentsData.data as ApiCacheItem<People>[]).map((item: ApiCacheItem<People>, index) => {
          const {json: person, loading } = item || {};
          const id = getIdFromUrl(person?.url);

          return (
            <li key={index}>
              <Link to={`/people/${id}`}>
                {loading ? 'Loading' : person?.name}
              </Link>
            </li>
          );
        })}
      </ul>

    </div>
  );
}