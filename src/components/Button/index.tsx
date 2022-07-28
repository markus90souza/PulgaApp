import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';
export { MaterialIcons } from '@expo/vector-icons'

import { Container, IconBox, Title } from './styles';

interface ButtonProps extends RectButtonProps { 
 title: string
 variant?: 'primary' | 'secondary'
 leftIcon?: any
} 

export function Button({title, variant, leftIcon, ...rest }: ButtonProps) {
  return (
    <Container variant={variant}  {...rest}>
      {
        leftIcon && 
        (
        <IconBox>
          <MaterialIcons 
            name={leftIcon}
            size={18}
            color={'#FFF'}
          /> 
        </IconBox>
    )
      }
      <Title variant={variant}>{title}</Title>   
    </Container>
  );
}
