import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

import  { TextInput } from 'react-native'
export const Container = styled.View`
  position: absolute;

  width: 100%;
  max-width: 90%;
  height: ${RFValue(48)}px;
  bottom: ${RFValue(-22)}px;
  background-color: ${({ theme}) => theme.colors.neutralLightest };
  border: 1px solid #adb5bd;
  border-radius: ${RFValue(16)}px;
  padding: ${RFValue(16)}px;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
`;

export const RNInput = styled(TextInput)`
  flex: 1;
  margin-left: ${RFValue(12)}px;
  height: ${RFValue(24)}px;

`
