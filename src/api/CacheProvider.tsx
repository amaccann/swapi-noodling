import { createContext, useContext, useState, ReactNode } from 'react';
import { ApiCache, ApiCacheItem } from '../types';

const LS_KEY = 'amaccann-swapi-cache';
const localCache = JSON.parse(localStorage.getItem(LS_KEY) || '{}');

interface CacheProviderValue {
  cache: ApiCache,
  clearAll: () => void,
  get: <T,>(key: string) => ApiCacheItem<T>,
  set: (key: string, data: ApiCacheItem<unknown>) => void
}

const CacheContext = createContext(localCache);

export function useCache(): CacheProviderValue {
  return useContext(CacheContext);
};

/**
 * 
 * @param param children ReactNode
 * @description Provider component to serve as a basic Cache for the REST
 *  DATA being returned from SWAPI; as we're not interacting with the data, IMO
 *  was safe / simple enough just to use Context API (vs. a redux reducer)
 * @returns ReactNode
 */
export default function ApiProvider({children}: { children: ReactNode }) {
  const [cache, setCache] = useState<ApiCache>(localCache);

  const get = <T,>(key: string): ApiCacheItem<T> => {
    return cache[key] as ApiCacheItem<T>;
  };

  const set = (key: string, data: ApiCacheItem<unknown>): void => {
    setCache((state) => {
      const updated = {...state, [key]: data};
      localStorage.setItem(LS_KEY, JSON.stringify(updated));
      return updated;
    });
  };

  const clearAll = (): void => {
    setCache({});
    localStorage.removeItem(LS_KEY);
  };

  const value: CacheProviderValue = {cache, clearAll, get, set};

  return (
    <CacheContext.Provider value={value}>
      {children}
    </CacheContext.Provider>
  );
}
