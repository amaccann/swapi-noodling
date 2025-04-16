import styled from '@emotion/styled';
import { blue, lightBlue, lightGray } from '../../colors';
import { FONT_12px } from '../../constants';

export const Label = styled.label({
  display: 'block',
  marginBottom: 2,
  fontSize: FONT_12px,
  color: '#a5a5a5'
});

export const InputField = styled.input({
  width: '100%',
  height: 30,
  padding: '4px 8px',
  borderRadius: 8,
  border: `2px solid ${lightGray}`,
  outline: 'none',
  transition: 'all 200ms',
  
  '&::placeholder': {
    color: lightGray,
  },

  '&:focus': {
    borderColor: blue,
    backgroundColor: `${lightBlue}20`,
    '&::placeholder': {
      color: `${lightBlue}90`
    }
  },
});