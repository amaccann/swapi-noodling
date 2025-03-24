import { Film, People, Planet } from '../types';
import useQueryByPath from '../api/useQueryByPath';
import { Link, useParams } from 'react-router';
import LabelByUrl from '../components/LabelByUrl';
import getIdFromUrl from '../utils/getIdFromUrl';

export default function PlanetDetail() {
  const {id} = useParams();
  const {data} = useQueryByPath<Planet>(`planets/${id}`);
  
  const planet = data?.json;
  
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
        {(planet?.films || []).map((filmUrl) => (
          <li key={filmUrl}>
            <LabelByUrl<Film> propKey="title" url={filmUrl} />
          </li>
        ))}
      </ul>


      <h4>Notable residents:</h4>
      <ul>
        {(planet?.residents || []).map((residentUrl) => {
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

    </div>
  );
}