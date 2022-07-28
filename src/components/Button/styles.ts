import styled, { css } from 'styled-components/native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler'
import { RFValue } from 'react-native-responsive-fontsize';

import { IButtonProps } from './types'

type Props = IButtonProps & RectButtonProps ;

export const Container = styled(RectButton)<Props>`
  width: 100%;
  height: ${RFValue(48)}px;
  padding: ${RFValue(8)}px ${RFValue(16)}px;
  border-radius: ${RFValue(4)}px;

  display: flex;
  justify-content: center;
  align-items: center;

  ${({ theme, variant }) =>  css` 
    background-color: ${ variant === 'primary' ? theme.colors.neutralLightest : theme.colors.brand01}`
  }

`;

export const Title = styled.Text<Props>`
  font-family: ${({ theme }) => theme.fonts.semibold};
  font-size: ${RFValue(16)}px;
  ${({ theme, variant }) =>  css` 
    color: ${ variant === 'primary' ? theme.colors.brand01 : theme.colors.neutralLightest}`
  }
`;

export const IconBox = styled.View`
  margin-right: ${RFValue(8)}px;
`
