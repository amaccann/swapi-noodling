import { Link } from 'react-router';
import { Starship } from '../types';
import { ReactNode } from 'react';
import getIdFromUrl from '../utils/getIdFromUrl';

export default function StarshipBody({data}: { data: Starship[] }): ReactNode {
  return (
    <tbody>
      {data?.map((starship: Starship) => {
        const id = getIdFromUrl(starship.url);

        return (
          <tr key={starship.name}>
            <td>
              <Link to={`/starships/${id}`}>{starship.name}</Link>
            </td>
            <td>{starship.model}</td>
          </tr>
        );
      })}
    </tbody>
  );
}