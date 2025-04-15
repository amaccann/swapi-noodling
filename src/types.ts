export enum DataTypes {
  Planets = 'planets',
  People = 'people',
  Starships = 'starships',
};

export enum Climates {
  Arid = 'arid',
  Tropical = 'tropical',
}

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
  release_date: string
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
  crew: string;
  films: string[];
  name: string;
  model: string;
  url: string;
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

export enum SortDirection {
  Asc = 'asc',
  Desc = 'desc'
};

export interface SortableTableHeaderProps {
  onClick: (value: string) => (() => void) | undefined;
  sortBy: string;
  sortDirection: SortDirection
}

export type CommonIconProps = {
  color: string;
  size: number;
};