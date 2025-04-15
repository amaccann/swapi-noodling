import { StyledButton } from './styled';
import { ButtonProps } from './types';

export default function Button({
  children,
  onClick,
  fontSize,
  variant = 'primary',
}: ButtonProps) {
  return (
    <StyledButton
      fontSize={fontSize}
      onClick={onClick}
      variant={variant}>{children}</StyledButton>
  );
}