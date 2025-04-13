import styled from '@emotion/styled';
import { blue, blueGray, darkBlue, lightBlue } from '../../colors';
import { MOBILE_BREAKPOINT } from '../../constants';
import { ArrowLeftIcon } from '../../icons';

export const PageWrapper = styled.div({
  background: '#fff',
  border: '1px solid #E9E9E9',
  borderRadius: 10,
  boxShadow: `3px 3px 3px 0 ${blueGray}`,

  '> div': {
    padding: 16,
    paddingBottom: 0,
    [MOBILE_BREAKPOINT]: {
      padding: 8,
    },
  },
});

export const Title = styled.h1({
  display: 'flex',
  alignItems: 'center',

  borderBottom: '1px solid #e9e9e9',
  padding: '8px 16px',
  color: darkBlue,

  [MOBILE_BREAKPOINT]: {
    padding: 8,
    fontSize: '1.125rem',
  },
});

export const BackIcon = styled(ArrowLeftIcon)({
  cursor: 'pointer',
  position: 'relative',
  marginLeft: -8,

  path: {
    fill: lightBlue,
  },

  '&:hover': {
    path: {
      fill: blue,
    },
  },

});