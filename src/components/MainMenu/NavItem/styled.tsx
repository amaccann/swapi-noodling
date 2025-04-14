import styled from '@emotion/styled';
import { Link } from 'react-router';
import { darkBlue, white } from '../../../colors';
import { MOBILE_BREAKPOINT } from '../../../constants';

export const RouterLink = styled(Link)((props: { ['data-active']: boolean }) => {
  const active = props['data-active'];

  return {
    display: 'flex',
    alignItems: 'center',
    gap: 8,
  
    marginLeft: -8,
    marginRight: -8,
    padding: '16px 8px',
  
    borderBottom: `1px solid ${darkBlue}35`,
    transition: 'all 200ms ease-out',
    color: `${white} !important`,
    textDecoration: 'none',

    ...(active ? {
      svg: {
        path: {
          fill: `${white} !important`
        },
      }
    } : {}),
  
    '&:hover': {
      backgroundColor: `${darkBlue}50`,
  
      svg: {
        path: {
          fill: `${white} !important`
        },
      }
    },
  
    '&:first-of-type': {
      borderTop: `1px solid ${darkBlue}35`
    },
  
    [MOBILE_BREAKPOINT]: {
      marginLeft: 0,
      marginRight: 0,
      padding: 4,
      border: 0,
  
      '&:first-of-type': {
        borderTop: 0,
      },
    
      svg: {
        width: 16,
        height: 16,
      },
    },
  };
});