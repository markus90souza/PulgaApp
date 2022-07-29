import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  height: ${RFValue(132)}px;
  position: absolute;
  top: 0;
  left: 0;
  background-color: ${({ theme }) => theme.colors.brand01 };

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Brand = styled.Image`
  width: ${RFValue(88)}px;
  height: ${RFValue(24)}px;
`

