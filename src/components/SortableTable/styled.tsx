import styled from '@emotion/styled';

import { blue, blueGray, fadeBlue, fadeGray, lightGray } from '../../colors';

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
    borderTop: `1px solid ${fadeGray}`
  },

  tr: {
    '&:hover': {
      td: {
        background: `${fadeBlue}50`,
      }
    },
    '&:last-of-type': {
      td: {},
    },
  },

  th: {
    background: fadeGray,
    border: `1px solid ${fadeGray}`,
    color: blue,

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
});