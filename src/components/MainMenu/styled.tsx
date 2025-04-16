import styled from '@emotion/styled';
import Flex from '../Flex';
import { blue, darkBlue } from '../../colors';
import { FONT_10px, MOBILE_BREAKPOINT } from '../../constants';

export const Sidebar = styled(Flex)({
  padding: 8,
  flexBasis: 125,
  background: blue,
  flexDirection: 'column',
  boxShadow: `inset -3px 0 4px 0 ${darkBlue}30`,
  position: 'relative',
 
  button: {
    marginTop: 'auto',
    position: 'sticky',
    bottom: 8,
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
      marginLeft: 'auto',
      paddingTop: 10,
      paddingBottom: 10,
      fontSize: FONT_10px
    },
  }
});
