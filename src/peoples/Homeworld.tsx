import { Link } from 'react-router';
import useQueryByPath from '../api/useQueryByPath';
import { Planet } from '../types';
import getIdFromUrl from '../utils/getIdFromUrl';
import { Loader } from '../components';

export default function Homeworld({homeworld}: { homeworld: string }) {
  const {data} = useQueryByPath<Planet>(homeworld);
  const {json, loading} = data || {};
  
  if (loading) {
    return <Loader width={16} />;
  }
  return (
    <Link to={`/planets/${getIdFromUrl(json?.url)}`}>
      {json?.name || ''}
    </Link>
  );
}