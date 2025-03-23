import { Link } from 'react-router';
import { People } from '../types';
import { ReactNode } from 'react';
import getIdFromUrl from '../utils/getIdFromUrl';

export default function PeoplesBody({data}: { data: People[] }): ReactNode {
  return (
    <tbody>
      {data?.map((person: People) => {
        const id = getIdFromUrl(person.url);

        return (
          <tr key={id}>
            <td>
              <Link to={`/people/${id}`}>{person.name}</Link>
            </td>
            <td>{person.homeworld}</td>
          </tr>
        );
      })}
    </tbody>
  );
}