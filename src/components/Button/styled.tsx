import styled from '@emotion/styled';
import { ButtonProps } from './types';
import { blue, red, white } from '../../colors';
import { MOBILE_BREAKPOINT } from '../../constants';

export const StyledButton = styled.button<ButtonProps>(({
  fontSize = '0.875rem',
  variant
}) => {
  const color = variant === 'danger' ? red : blue;
  const isInverse = variant?.includes('inverse');

  return {
    padding: 8,
    background: isInverse ? white : color,
    border: `1px solid ${color}`,
    borderRadius: 50,

    cursor: 'pointer',
    color: isInverse ? color : white,
    fontSize,
    fontWeight: 'bold',
    textTransform: 'uppercase',

    '&:hover': {
      filter: 'brightness(1.2)'
    },

    [MOBILE_BREAKPOINT]: {
      padding: 4,
      fontSize: '0.75rem',
    },
  };
});