import { ApiCacheItem, Film, People, Planet } from '../types';
import useQueryByPath from '../api/useQueryByPath';
import { Link, useParams } from 'react-router';
import getIdFromUrl from '../utils/getIdFromUrl';

export default function PeopleDetail() {
  const {id} = useParams();
  const {data} = useQueryByPath<People>(`people/${id}`);
  
  const person = data?.json;
  const filmData = useQueryByPath<Film>(person?.films);
  const starshipsData = useQueryByPath<People>(person?.starships);
  const homeworldData = useQueryByPath<Planet>(person?.homeworld);
  const homeworld = homeworldData?.data?.json;
  
  if (!person) {
    return null;    
  }

  return (
    <div>
      <h2>{person.name}</h2>
      <p>
        <strong>Homeworld:</strong>
        <Link to={`/planets/${getIdFromUrl(homeworld?.url)}`}>
          {homeworld?.name || ''}
        </Link>
      </p>

      <h4>Starships piloted:</h4>
      <ul>
        {(starshipsData.data as ApiCacheItem<People>[]).map((item: ApiCacheItem<People>, index) => {
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
    </div>
  );
}