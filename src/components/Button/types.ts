import { BaseSyntheticEvent, ReactNode } from 'react';

export interface ButtonProps {
  children: ReactNode,
  onClick: (e: BaseSyntheticEvent) => void
  variant?: string,
};