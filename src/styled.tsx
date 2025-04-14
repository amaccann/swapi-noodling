import styled from '@emotion/styled';
import { blueGray, darkYellow, fadeBlue, fadeYellow, white } from './colors';
import { MOBILE_BREAKPOINT } from './constants';
import { Flex } from './components';

export const AppWrapper = styled(Flex)({
  width: '100vw',
  background: fadeBlue,
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

export const Sidebar = styled(Flex)({
  padding: 8,
  flexBasis: 175,
  background: white,
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

export const PageStrapline = styled(Flex)({
  background: fadeYellow,

  marginTop: -16,
  marginLeft: -16,
  marginRight: -16,

  p: {
    display: 'flex',
    gap: 8,
    padding: 16,
    borderRight: `1px solid ${darkYellow}30`,
  },

  strong: {
    color: darkYellow
  },

  [MOBILE_BREAKPOINT]: {
    marginTop: -8,
    marginLeft: -8,
    marginRight: -8,
    p: {
      padding: 8,
    },
  },
});