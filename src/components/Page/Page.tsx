import { ReactNode } from 'react';
import { PageWrapper, Title } from './styled';

export default function Page({
  children,
  title
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <PageWrapper>
      <Title>{title}</Title>
      <div>
        {children}
      </div>
    </PageWrapper>
  );
}