import styled from '@emotion/styled';
import { ButtonProps } from './types';
import { blue, red, white } from '../../colors';

export const StyledButton = styled.button<ButtonProps>(({variant}) => {
  const color = variant === 'danger' ? red : blue;
  return {
    padding: 8,
    background: color,
    border: `1px solid ${color}`,
    borderRadius: 50,

    cursor: 'pointer',
    color: white,
    fontSize: '0.875rem',
    fontWeight: 'bold',
    textTransform: 'uppercase',

    '&:hover': {
      filter: 'brightness(1.2)'
    },
  };
});