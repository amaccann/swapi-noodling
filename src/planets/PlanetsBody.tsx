import { Link } from 'react-router';
import { Planet } from '../types';
import { ReactNode } from 'react';
import getIdFromUrl from '../utils/getIdFromUrl';
import formatNumber from '../utils/formatNumber';

export default function PlanetsBody({data}: { data: Planet[] }): ReactNode {
  return (
    <tbody>
      {data?.map((planet: Planet) => {
        const id = getIdFromUrl(planet.url);

        return (
          <tr key={planet.name}>
            <td>
              <Link to={`/planets/${id}`}>{planet.name}</Link>
            </td>
            <td>{formatNumber(planet.population)}</td>
          </tr>
        );
      })}
    </tbody>
  );
}