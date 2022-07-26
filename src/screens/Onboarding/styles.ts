import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.brand01  };
`;

export const Box = styled.View``

export const Heading = styled.Text`
  font-size: ${RFValue(48)}px;
  font-family: ${({ theme }) => theme.fonts.bold };
  color: ${({ theme }) => theme.colors.neutralLightest };
  font-weight: 700;
  letter-spacing: 0;
`

export const Subtext = styled.Text`
   font-size: ${RFValue(16)}px;
   color: ${({ theme }) => theme.colors.neutralLightest };
   letter-spacing: 0;
`
