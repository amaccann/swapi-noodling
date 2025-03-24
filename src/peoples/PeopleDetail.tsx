import { Film, People, Planet, Starship } from '../types';
import useQueryByPath from '../api/useQueryByPath';
import { Link, useParams } from 'react-router';
import LabelByUrl from '../components/LabelByUrl';
import getIdFromUrl from '../utils/getIdFromUrl';

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
    <div>
      <h1>{person.name}</h1>
      <p>
        <strong>Homeworld:</strong>
        <Link to={`/planets/${getIdFromUrl(homeworld?.url)}`}>
          {homeworld?.name || ''}
        </Link>
      </p>

      {starships.length  ? (
        <>
          <h4>Starships piloted:</h4>
          <ul>
            {starships.map((starshipUrl) => {
              const id = getIdFromUrl(starshipUrl);
              return (
                <li key={starshipUrl}>
                  <Link to={`/starships/${id}`}>
                    <LabelByUrl<Starship> url={starshipUrl} />
                  </Link>
                </li>
              );
            })}
          </ul>
        </>

      ) : (
        <p>{person?.name} does not pilot any starships</p>
      )}

      {films.length ? (
        <>
          <h4>Films:</h4>
          <ul>
            {(person?.films || []).map((filmUrl) => (
              <li key={filmUrl}>
                <LabelByUrl<Film> propKey="title" url={filmUrl} />
              </li>
            ))}
          </ul>
        </>
      )  : (
        <p>{person?.name} does not appear in any films</p>
      )}
    </div>
  );
}