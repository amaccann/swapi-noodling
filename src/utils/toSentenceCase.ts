export default (str: string = ''): string => {
  return str?.length ? `${str.charAt(0).toUpperCase()}${str.slice(1, str.length)}` : '';
};