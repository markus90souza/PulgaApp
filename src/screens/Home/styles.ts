import { Dimensions } from 'react-native';
import MapView from 'react-native-maps';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

import { BottomSheetModal } from '@gorhom/bottom-sheet'

const { width, height } = Dimensions.get('window')
export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const Map = styled(MapView)`
  z-index: -1;
  width: ${width}px;
  height: ${height + 98}px ;
`