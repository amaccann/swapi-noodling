import { Film,  Starship } from '../types';
import useQueryByPath from '../api/useQueryByPath';
import {  useParams } from 'react-router';
import { FilmDetails, Page, RemoteDataList } from '../components';
import { PageStrapline } from '../styled';

export default function StarshipDetail() {
  const {id} = useParams();
  const {data} = useQueryByPath<Starship>(`starships/${id}`);
  const {json: starship, loading} = data || {};
  
  if (!loading && !starship) {
    return null;    
  }

  const {crew, films = [], name, model} = starship || {};

  return (
    <Page isLoading={loading} showBack title={name}>
      <PageStrapline>
        <p><strong>Model:</strong> {model}</p>
        <p><strong>Crew:</strong> {crew}</p>
      </PageStrapline>

      <RemoteDataList<Film>
        asCard
        label="Films"
        noDataMessage={`${name} does not appear in any films`}
        urls={films}
      >
        {(film: Film) => <FilmDetails film={film} key={film.episode_id} />}
      </RemoteDataList>
    </Page>
  );
}