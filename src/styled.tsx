import styled from '@emotion/styled';
import { blueGray, fadeBlue, white } from './colors';

export const AppWrapper = styled.div({
  width: '100vw',
  background: fadeBlue,
  display: 'flex',
  height: '100vh'
});

export const ContentWrapper = styled.div({
  padding: 16,
  flex: 1,
});

export const Sidebar = styled.div({
  padding: 8,
  flexBasis: 200,
  background: white,
  display: 'flex',
  flexDirection: 'column',
  boxShadow: `3px 0 3px 0 ${blueGray}`,
 
  button: {
    marginTop: 'auto',
  },
});

export const Nav = styled.nav({
  a: {
  },
});
