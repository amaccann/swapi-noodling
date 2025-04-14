import { BaseSyntheticEvent, ReactNode } from 'react';

export interface ButtonProps {
  children: ReactNode,
  fontSize?: number | string,
  onClick: (e: BaseSyntheticEvent) => void
  variant?: string,
};