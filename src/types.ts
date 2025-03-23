export enum DataTypes {
  Planets = 'planets',
  People = 'people',
  Starships = 'starships',
};

export type ApiCache = Record<string, ApiCacheItem<unknown>>;

export interface ApiCacheItem<T> {
  createdAt?: string;
  loading?: boolean;
  json?: T;
  updatedAt?: string;
}

export interface Film {
  episode_id: number
  planets: string[]
  title: string
  url: string
}

export interface Planet {
  climate: string;
  created: Date;
  diameter: string;
  edited: Date;
  films: string[];
  gravity: string;
  name: string;
  orbital_period: string;
  population: string;
  residents: string[];
  rotation_period: string;
  surface_water: string;
  terrain: string;
  url: string;
}

export interface People {
  name: string;
  homeworld: string;
  url: string;
}

export interface Starship {
  name: string;
}

export interface Collection<T> {
  count: number;
  next: string;
  previous: string;
  results: T[]
}

export interface People {
  name: string;
  films: string[];
  starships: string[];
}

export interface SortableTableHeaderProps {
  onClick: (value: string) => (() => void) | undefined;
}