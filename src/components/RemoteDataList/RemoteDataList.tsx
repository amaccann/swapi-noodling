import { ReactNode, useEffect, useState, useTransition } from 'react';
import useQueryByPath from '../../api/useQueryByPath';
import Loader from '../Loader';
import { ApiCacheItem } from '../../types';
import { List, NoData, Title, Wrapper } from './styled';

export default function RemoteDataList<T>({
  children,
  noDataMessage,
  urls = [],
  label,
}: {
  children: (data: T) => ReactNode,
  noDataMessage: string,
  urls: string[],
  label: string,
}) {
  const {fetchDataByPath} = useQueryByPath<T>();
  const [isPending, startTransition] = useTransition();
  const [data, setData] = useState<T[]>([]);

  useEffect(() => {
    startTransition(async () => {
      if (!urls.length) {
        return;
      }

      const requests = await Promise.all(urls.map((url) => fetchDataByPath(url)));
      if(requests.length) {
        setData(requests.filter(Boolean).map((r) => ((r as ApiCacheItem<T>).json as T)));
      }
    });
  }, [urls.length]);

  return (
    <Wrapper>
      <Title>{label}</Title>

      {isPending ? (
        <div style={{padding: 8}}>
          <Loader width={32} />
        </div>
      ) : (
        data.length ? (
          <List>
            {data.map((item: T, index: number) => {
              return (
                <li key={index}>
                  {children(item)}
                </li>
              );
            })}
          </List>
        ) : (
          <NoData>{noDataMessage}</NoData>
        )
      )}
    </Wrapper>
  );
}
