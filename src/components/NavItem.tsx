import { ElementType, ReactNode } from 'react';
import { Link } from 'react-router';
import { blue, blueGray, darkBlue, fadeBlue, lightBlue, white } from '../colors';
import { MOBILE_BREAKPOINT } from '../constants';

const style = {
  display: 'flex',
  alignItems: 'center',
  gap: 8,

  marginLeft: -8,
  marginRight: -8,
  padding: 8,

  borderBottom: `1px solid ${blueGray}`,
  transition: 'all 200ms ease-out',
  backgroundColor: white,
  color: darkBlue,
  textDecoration: 'none',

  '&:hover': {
    backgroundColor: `${fadeBlue}50`,
    color: blue,

    svg: {
      path: {
        fill: `${blue} !important`
      },
    }
  },

  '&:first-of-type': {
    borderTop: `1px solid ${blueGray}`
  },

  [MOBILE_BREAKPOINT]: {
    marginLeft: 0,
    marginRight: 0,
    padding: 4,
    border: 0,

    '&:first-of-type': {
      borderTop: 0,
    },
  
    svg: {
      width: 16,
      height: 16,
    },
  },
};

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
  return (
    <Link data-testid={testId} to={to} css={style}>
      <Icon color={lightBlue} size={20} />
      <span>{children}</span>
    </Link>
  ); 
}