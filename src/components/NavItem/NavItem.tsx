import { ElementType, ReactNode } from 'react';
import { useLocation } from 'react-router';
import { lightBlue } from '../../colors';

import {RouterLink} from './styled';

export default function NavItem({
  children,
  icon: Icon,
  testId,
  to
}: {
    children: ReactNode,
    icon: ElementType,
    testId: string,
    to: string
}) {
  const {pathname} = useLocation();
  const isActivePage = pathname.includes(to);

  return (
    <RouterLink
      active={isActivePage}
      data-testid={testId}
      to={to}>
      <Icon color={lightBlue} size={20} />
      <span>{children}</span>
    </RouterLink>
  ); 
}