import { ReactNode } from 'react';
import { BackIcon, PageWrapper, Title } from './styled';
import { useNavigate } from 'react-router';

export default function Page({
  children,
  showBack,
  title
}: {
  showBack?: boolean,
  title: string;
  children: ReactNode;
}) {
  const navigate = useNavigate();

  const onClickBack = () => {
    navigate(-1);
  };

  return (
    <PageWrapper>
      <Title>
        {showBack ? <BackIcon onClick={onClickBack} size={32} /> : null}
        {title}
      </Title>
      
      <div>
        {children}
      </div>
    </PageWrapper>
  );
}