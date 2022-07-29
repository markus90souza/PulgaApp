import { ReactNode } from 'react';
import { Text } from 'react-native';

import { Container ,Brand } from './styles';

interface HeaderProps {
  currentCity: string
}

import logo from './../../assets/images/logo-pulga.png'
import { Input } from '../Input';
export function Header({ currentCity }: HeaderProps) {
  return (
    <Container>
      <Brand source={logo} />
      <Input value={currentCity} editable={false} placeholder={'ok'} />
    </Container>
  );
}
