import { ReactNode } from 'react';
import { BackIcon, PageWrapper, Title } from './styled';
import { useNavigate } from 'react-router';
import Loader from '../Loader';
import Flex from '../Flex';

export default function Page({
  children,
  loading,
  showBack,
  title
}: {
  loading?: boolean,
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
      <Title loading={loading}>
        {showBack ? <BackIcon onClick={onClickBack} size={32} /> : null}
        {loading ? 'Fetching data' : title}
      </Title>
      
      <div>
        {loading ? (
          <Flex style={{padding: 16}}>
            <Loader />
          </Flex>
        ) : children}
      </div>
    </PageWrapper>
  );
}