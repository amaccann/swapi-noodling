import styled from '@emotion/styled';

import { blue, blueGray, fadeBlue, fadeGray, lightGray } from '../../colors';
import { MOBILE_BREAKPOINT } from '../../constants';

export const Table = styled.table({
  margin: '16px -16px',
  width: 'calc(100% + 32px)',
  textAlign: 'left',
  borderSpacing: 0,
  borderTop: `1px solid ${lightGray}`,

  'td, th': {
    padding: '8px 16px',
  },

  td: {
    borderTop: `1px solid ${fadeGray}`,
  },

  tr: {
    '&:nth-of-type(2n)': {
      td: {
        background: `${fadeGray}40`
      },
    },

    '&:hover': {
      td: {
        background: `${fadeBlue}50`,
      }
    },
  },

  th: {
    background: fadeGray,
    border: `1px solid ${fadeGray}`,
    color: lightGray,

    '&[data-active="true"]': {
      color: blue,
    },

    '&[class*="sortable"]': {
      cursor: 'pointer',
      '&:hover': {
        background: blueGray,
        borderColor: blueGray,
      },
      '&:active': {
        borderColor: blue,
      },
    },
  },

  [MOBILE_BREAKPOINT]: {
    margin: '8px -8px',
    width: 'calc(100% + 16px)',

    th: {
      width: 'auto !important',
    }
  },
});