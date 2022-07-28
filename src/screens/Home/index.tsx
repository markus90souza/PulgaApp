import { ReactNode } from 'react';
import { Text } from 'react-native';

import { Container } from './styles';

interface HomeProps {

}

export function Home({  }: HomeProps) {
  return (
    <Container>
      <Text>Home</Text>
    </Container>
  );
}
