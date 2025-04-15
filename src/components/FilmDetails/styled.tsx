import styled from '@emotion/styled';
import { lightGray, white } from '../../colors';

export const Thumbnail = styled.img({
  width: 64,
  height: 'auto',
  border: `4px solid ${white}`,
  borderRadius: 5,
  boxShadow: `0 0 0 1px ${lightGray}`,
});