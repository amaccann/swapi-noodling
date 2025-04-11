import { StyledButton } from './styled';
import { ButtonProps } from './types';

export default function Button({
  children,
  onClick,
  variant = 'primary',
}: ButtonProps) {
  return (
    <StyledButton
      onClick={onClick}
      variant={variant}>{children}</StyledButton>
  );
}