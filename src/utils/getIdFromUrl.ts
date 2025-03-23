/**
 * 
 * @param url the full SWAPI url to parse
 * @description It takes any SWAPI url and returns the last part of the path.
 * @returns string
 */
export default function getIdFromUrl(url = '') {
  const [id] = url.replace(/\/$/i, '').split('/').reverse();
  return id;
}