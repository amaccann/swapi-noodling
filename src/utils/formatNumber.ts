const UNKNOWN = 'unknown';

const formatter = new Intl.NumberFormat('en-US');

export default function (num: number | string) {
  switch (true) {
  case num === UNKNOWN:
    return num;
  case typeof num === 'string':
    return /^\d+$/.test(num) ? formatter.format(Number(num)) : num;
  case typeof num === 'number':
    return formatter.format(num);
  default:
    return num;
  }
}