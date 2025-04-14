import { darkGray, gray } from '../../colors';
import { UNKNOWN } from '../../constants';
import { Film } from '../../types';
import romanize from '../../utils/romanize';

import Flex from '../Flex';
import { Thumbnail } from './styled';

const IMDB_IDS = [
  'tt0120915',
  'tt0121765',
  'tt0121766',
  'tt0076759',
  'tt0080684',
  'tt0086190',
];

const getReleaseYear = (date: string): number => new Date(date).getFullYear();

export default function FilmDetails({film}: { film: Film })  {
  console.log('film', film);
  const {episode_id, release_date, title} = film;
  const releaseDate = release_date ? getReleaseYear(release_date) : UNKNOWN;
  const episode = romanize(episode_id);
  const imageUrl = `/episode-${episode_id}.jpg`;
  const imdbId = IMDB_IDS[episode_id - 1];

  return (
    <Flex gap={8}>
      <Thumbnail src={imageUrl} alt={title} />
      <div>
        <strong style={{color: darkGray}}>{title}</strong>

        <Flex gap={8} style={{color: gray, marginBottom: 4}}>
          <span>Episode {episode}</span>
          <span>(released {releaseDate})</span>
        </Flex>

        {imdbId ? (
          <a
            title={`Read about ${title} on IMDB`}
            href={`https://www.imdb.com/title/${imdbId}`}
            target="_blank">
            View on IMDB
          </a>
        ) : null}
      </div>
    </Flex>
  );
}