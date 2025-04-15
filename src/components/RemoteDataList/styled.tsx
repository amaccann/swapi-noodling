import styled from '@emotion/styled';
import { darkYellow, fadeGray, lightGray, lightYellow, yellow } from '../../colors';
import { MOBILE_BREAKPOINT } from '../../constants';
import Flex from '../Flex';

const LIST_BORDER = `1px solid ${lightGray}75`; 

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
    padding: 8,
  },
});

export const Title = styled.h3({
  marginTop: 0,
  marginBottom: 4,
});

export const List = styled.ul<{ asCard?: boolean }>(({asCard}) => {
  return {
    margin: 0,
    listStyle: 'none',
    ...(asCard ? {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 16,
    } : {}),
  
    li: {
      padding: 8,
      background: fadeGray,

      ...(asCard ? {
        border: LIST_BORDER,
        borderRadius: 8,
        flexBasis: 'calc(25% - 32px)',
      } : {
        borderLeft: LIST_BORDER,
        borderBottom: LIST_BORDER,
        borderRight: LIST_BORDER,
     
        '&:first-of-type': {
          borderTopLeftRadius: 8,
          borderTopRightRadius: 8,
          borderTop: LIST_BORDER,
  
        },
        '&:last-of-type': {
          borderBottomLeftRadius: 8,
          borderBottomRightRadius: 8,
        },
  
        '&:nth-of-type(2n)': {
          background: `${lightGray}20`,
        },
      })
    },
    [MOBILE_BREAKPOINT]: asCard ? {
      gap: 8,
      flexDirection: 'column',
      flexWrap: 'nowrap',
      li: {
        flexBasis: 'auto',
      },
    } : {}
  };
});

export const LoadingLabel = styled(Flex)({
  alignItems: 'center',
  gap: 8,
  width: 'auto',
  marginTop: 8,
  color: lightGray,

  '.loader': {
    width: 'auto',
    flexGrow: 'unset',
    margin: 'unset',
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