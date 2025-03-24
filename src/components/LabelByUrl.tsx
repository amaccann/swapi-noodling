import useQueryByPath from '../api/useQueryByPath';

export default function LabelByUrl<T>({
  propKey = 'name',
  url,
}: {
  propKey?: string;
  url: string;
}) {
  const {data} = useQueryByPath<T>(url);
  const {json, loading} = data || {};

  if (loading || !json) {
    return '...';
  }
  const label = json[propKey as keyof T];

  return label;
}