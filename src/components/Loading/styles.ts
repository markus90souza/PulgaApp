import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.brand01};
`;

export const Loader = styled.ActivityIndicator`
  margin-bottom: ${RFValue(12)}px;
  color: ${({theme}) => theme.colors.neutralLightest };
`

export const LoadingMessage = styled.Text`
  font-size: ${RFValue(32)}px;
  color: ${({theme}) => theme.colors.neutralLightest };
`
