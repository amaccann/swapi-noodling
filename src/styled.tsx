import styled from '@emotion/styled';
import { blueGray, fadeBlue, white } from './colors';
import { MOBILE_BREAKPOINT } from './constants';

export const AppWrapper = styled.div({
  width: '100vw',
  background: fadeBlue,
  display: 'flex',
  height: '100vh',

  [MOBILE_BREAKPOINT]: {
    display: 'block',
  },
});

export const ContentWrapper = styled.div({
  padding: 16,
  flex: 1,

  [MOBILE_BREAKPOINT]: {
    padding: 4,
  },
});

export const Sidebar = styled.div({
  padding: 8,
  flexBasis: 175,
  background: white,
  display: 'flex',
  flexDirection: 'column',
  boxShadow: `3px 0 3px 0 ${blueGray}`,
 
  button: {
    marginTop: 'auto',
  },

  [MOBILE_BREAKPOINT]: {
    padding: 4,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,

    '#app_logo': {
      width: 32,
      height: 32,
    },

    nav: {
      display: 'flex',
    },

    button: {
      marginTop: 0,
      marginLeft: 16,
    },
  }
});
