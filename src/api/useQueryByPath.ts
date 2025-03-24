import { useEffect, useState } from 'react';
import fetchApi from './fetchApi';
import { ApiCacheItem } from '../types';
import { useCache } from './CacheProvider';

interface UseQueryReturns<T> {
  error?: boolean;
  data?: ApiCacheItem<T>
}

export default function useQueryByPath<T>(path?: string): UseQueryReturns<T> {
  const {get, set} = useCache();
  const [error, setError] = useState<boolean>(false);

  async function fetchDataByPath(p:string) {
    if (get<T>(p)?.loading) {
      return;
    }

    const cached = get<T>(p);
    if (cached?.json) {
      return console.log(`👻 cached ${p} data found`);
    }

    const updatedAt = new Date().toISOString();
    const createdAt = !cached?.createdAt ? updatedAt : cached.createdAt;
    set(p, {...cached, createdAt, json: null, loading: true, updatedAt});

    const {json, error} = await fetchApi(p);
    setError(Boolean(error));

    set(p, {
      ...cached,
      createdAt: !cached?.createdAt ? updatedAt : cached.createdAt,
      json,
      loading: false,
      updatedAt,
    });
  }

  useEffect(() => {
    (async () => {
      if (!path || !path.length) {
        return;
      }

      await fetchDataByPath(path);
    })();
  }, [path]);

  return path ? {
    data: get<T>(path), 
    error,
  } : {};
}