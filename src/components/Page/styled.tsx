import styled from '@emotion/styled';
import { blueGray, darkBlue } from '../../colors';

export const PageWrapper = styled.div({
  background: '#fff',
  border: '1px solid #E9E9E9',
  borderRadius: 10,
  boxShadow: `3px 3px 3px 0 ${blueGray}`,
  '> div': {
    padding: 16,
    paddingBottom: 0,
  },
});

export const Title = styled.h1({
  borderBottom: '1px solid #e9e9e9',
  padding: '8px 16px',
  color: darkBlue,
});