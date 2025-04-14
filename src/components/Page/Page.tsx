import { ReactNode } from 'react';
import { BackIcon, PageWrapper, Title } from './styled';
import { useNavigate } from 'react-router';
import Loader from '../Loader';
import Flex from '../Flex';

export default function Page({
  children,
  isLoading,
  showBack,
  title
}: {
  isLoading?: boolean,
  showBack?: boolean,
  title?: string;
  children: ReactNode;
}) {
  const navigate = useNavigate();

  const onClickBack = () => {
    navigate(-1);
  };

  return (
    <PageWrapper>
      <Title isLoading={isLoading}>
        {showBack ? <BackIcon onClick={onClickBack} size={32} /> : null}
        {isLoading ? 'Fetching data' : title}
      </Title>
      
      <div>
        {isLoading ? (
          <Flex style={{padding: 16}}>
            <Loader />
          </Flex>
        ) : children}
      </div>
    </PageWrapper>
  );
}