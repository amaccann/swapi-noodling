import { Film,  Starship } from '../types';
import useQueryByPath from '../api/useQueryByPath';
import {  useParams } from 'react-router';
import LabelByUrl from '../components/LabelByUrl';

export default function StarshipDetail() {
  const {id} = useParams();
  const {data} = useQueryByPath<Starship>(`starships/${id}`);
  
  const starship = data?.json;
  
  if (!starship) {
    return null;    
  }

  return (
    <div>
      <h2>{starship.name}</h2>
      <p><strong>Model:</strong> {starship.model}</p>
      <p><strong>Crew:</strong> {starship.crew}</p>
      <h4>Films:</h4>
      <ul>
        {(starship?.films || []).map((filmUrl) => (
          <li key={filmUrl}>
            <LabelByUrl<Film> propKey="title" url={filmUrl} />
          </li>
        ))}
      </ul>
    </div>
  );
}