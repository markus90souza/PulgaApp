import { ReactNode } from 'react';
import { Text } from 'react-native';

import { Container, Loader, LoadingMessage } from './styles';

interface LoadingProps {
 
}

const Loading = () => {
  return (
    <Container>
      <Loader size={'large'}  />
      <LoadingMessage>
        Carregando localização
      </LoadingMessage>
    </Container>
  );
}

export { Loading }