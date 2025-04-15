import { ReactNode } from 'react';

export default function Flex({
  children,
  className,
  gap,
  style,
}: {
  children: ReactNode,
  className?: string,
  gap?: number,
  style?: Record<string, string | number>
}) {

  return (
    <div className={className} css={{
      display: 'flex',
      gap,
      ...style,
    }}>
      {children}
    </div>
  );
}