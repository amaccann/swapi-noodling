import styled from '@emotion/styled';
import { darkYellow, fadeBlue, fadeYellow } from './colors';
import { MOBILE_BREAKPOINT } from './constants';
import { Flex } from './components';

export const AppWrapper = styled(Flex)({
  // width: '100vw',
  background: fadeBlue,
  minHeight: '100vh',

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