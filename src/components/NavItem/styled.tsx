import styled from '@emotion/styled';
import { Link } from 'react-router';
import { blue, blueGray, darkBlue, fadeBlue, lightBlue, white } from '../../colors';
import { MOBILE_BREAKPOINT } from '../../constants';

export const RouterLink = styled(Link)(({active}: { active: boolean }) => {
  return {
    display: 'flex',
    alignItems: 'center',
    gap: 8,
  
    marginLeft: -8,
    marginRight: -8,
    padding: '16px 8px',
  
    borderBottom: `1px solid ${blueGray}`,
    transition: 'all 200ms ease-out',
    backgroundColor: active ? `${lightBlue}35` : white,
    color: darkBlue,
    textDecoration: 'none',

    ...(active ? {
      svg: {
        path: {
          fill: `${blue} !important`
        },
      }
    } : {}),
  
    '&:hover': {
      backgroundColor: `${fadeBlue}50`,
      color: blue,
  
      svg: {
        path: {
          fill: `${blue} !important`
        },
      }
    },
  
    '&:first-of-type': {
      borderTop: `1px solid ${blueGray}`
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