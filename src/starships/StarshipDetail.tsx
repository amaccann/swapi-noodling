import { Film,  Starship } from '../types';
import useQueryByPath from '../api/useQueryByPath';
import {  useParams } from 'react-router';
import { FilmDetails, Page, RemoteDataList } from '../components';
import { PageStrapline } from '../styled';

export default function StarshipDetail() {
  const {id} = useParams();
  const {data} = useQueryByPath<Starship>(`starships/${id}`);
  
  const starship = data?.json;
  
  if (!starship) {
    return null;    
  }

  return (
    <Page showBack title={starship.name}>
      <PageStrapline>
        <p><strong>Model:</strong> {starship.model}</p>
        <p><strong>Crew:</strong> {starship.crew}</p>
      </PageStrapline>

      <RemoteDataList<Film>
        asCard
        label="Films"
        noDataMessage={`${starship.name} does not appear in any films`}
        urls={starship?.films}
      >
        {(film: Film) => <FilmDetails film={film} key={film.episode_id} />}
      </RemoteDataList>
    </Page>
  );
}