import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.brand01  };
`;

export const Image = styled.Image`
  width: 100%;
  height: 50%;
`

export const Box = styled.View`
  width: 100%;
  padding: 0 ${RFValue(32)}px;
  position: relative;
`

export const ButtomBox = styled.View`
  width: 100%;
  padding: 0 ${RFValue(32)}px;
  position: absolute;
  bottom: ${RFValue(60)}px;
`

export const Heading = styled.Text`
  font-size: ${RFValue(48)}px;
  font-family: ${({ theme }) => theme.fonts.bold };
  color: ${({ theme }) => theme.colors.neutralLightest };
  font-weight: 700;
  letter-spacing: 0;
`

export const SubHeading = styled.Text`
   font-size: ${RFValue(16)}px;
   color: ${({ theme }) => theme.colors.neutralLightest };
   letter-spacing: 0;
   margin-top: ${RFValue(24)}px;
`