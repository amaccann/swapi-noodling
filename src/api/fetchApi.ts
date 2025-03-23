import { SWAPI_BASE_DOMAIN } from '../constants';

const HEADERS = {
  'headers': {
    'accept': 'application/json'
  }
};

export default async function fetchApi(path: string) {
  const hasDomain = path.includes(SWAPI_BASE_DOMAIN);
  const finalPath = hasDomain ? path : `${SWAPI_BASE_DOMAIN}/${path}`.replace(/[/]{2,}/g, '/');
  let json, error, response;

  try {
    response = await fetch(finalPath, HEADERS);
    json = await response.json();
  } catch (err) {
    error = err;
  }

  return {json, error};
}