import styled from '@emotion/styled';
import { darkYellow, fadeGray, lightGray, lightYellow, yellow } from '../../colors';
import { MOBILE_BREAKPOINT } from '../../constants';

export const Wrapper = styled.div({
  borderTop: '1px solid #E9E9E9',
  marginTop: 16,
  marginLeft: -16,
  marginRight: -16,
  padding: 16,

  '&:first-of-type': {
    borderBottom: 0,
  },

  '&:not(:first-of-type)': {
    marginTop: 0,
  },
  [MOBILE_BREAKPOINT]: {
    marginLeft: -8,
    marginRight: -8,
  },
});

export const Title = styled.h4({
  marginTop: 0,
  marginBottom: 4,
});

export const List = styled.ul({
  background: fadeGray,
  margin: 0,
  listStyle: 'none',
  border: `1px solid ${lightGray}75`,
  borderRadius: 8,

  li: {
    padding: 8,
    borderTop: `1px solid ${lightGray}75`,
    '&:first-of-type': {
      borderTop: 0,
    },
  },
});

export const NoData = styled.p({
  marginTop: 8,
  padding: 8,
  background: lightYellow,
  border: `1px solid ${yellow}`,
  borderRadius: 8,
  opacity: 0.6,
  color: darkYellow,
});