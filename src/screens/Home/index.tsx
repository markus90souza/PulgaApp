import { useMemo, useRef, useState,  useEffect } from 'react';
import { Marker } from 'react-native-maps';
import { Alert } from 'react-native';
import * as Location from 'expo-location';
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';

import { Header } from '@components/Header';
import { Loading } from '@components/Loading';
import marker from '@assets/images/marker.png'

import { Container, Map} from './styles';

import { api, geolocation } from '@services/api';



import { IGeolocationResponse, ILocation, IScooterLocation } from '@contracts/IGeolocation';



interface HomeProps {}

export function Home({  }: HomeProps) {

  const modalScooterRef = useRef<BottomSheetModal>(null)
  const snapPoints = useMemo(() => ['25%', '50%'], []);

  const [currentCity, setCurrentCity] = useState("")
  const [currentUserLocation, setCurrentUserLocation] = useState<Location.LocationObject | null>(null)
  const [scooterLocation, setScooterLocation] = useState<ILocation[]>([])

  const getUserLocation = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();

    if (status !== 'granted') {
      Alert.alert('Sem acesso a sua localização')
      return;
    }

    const userLocation = await Location.getCurrentPositionAsync({});

    setCurrentUserLocation(userLocation)

    if(userLocation.coords){
      const query = `?latitude=${userLocation.coords.latitude}&longitude=${userLocation.coords.longitude}&localityLanguage=pt-BR`
      const { data } = await geolocation.get<IGeolocationResponse>(query)


      if(data.principalSubdivision){
        const { city, principalSubdivision} = data
        setCurrentCity(`${city} - ${principalSubdivision}`)
      }

      console.log(currentCity)

    }
  }

 const getScooterLocation = async () => {
   const { data } = await api.get('locations')
   console.log(data)
 }

  useEffect(() => {
    getUserLocation()
    getScooterLocation()
  },[])

  const handleOpenModal = () => {
    modalScooterRef.current.present()
  }

  if(!currentUserLocation?.coords){
    return <Loading />
  }

  return (
    <Container>
      <BottomSheetModalProvider>
      <Header currentCity={currentCity} />

      <Map 
        initialRegion={{
          latitude:  -21.25922594636246 || currentUserLocation?.coords.latitude ,  
          longitude: -48.34061725935165 || currentUserLocation?.coords.longitude , 
          latitudeDelta: 0.86,
          longitudeDelta: 0.86
        }}
      >

        {
          scooterLocation.length ? (
            scooterLocation.map(scooter => (
              <Marker 
              coordinate={{
                latitude: scooter.latitude, 
                longitude: scooter.longitude,
              }}
    
              image={marker}
              onPress={handleOpenModal}
            />
            ))
          ) : null
        }

        </Map>

                
      <BottomSheetModal
        ref={modalScooterRef}
        index={1}
        snapPoints={snapPoints}
        animateOnMount={true}
        style={{
          paddingHorizontal: 20,
          paddingVertical: 24
        }}>
      </BottomSheetModal>
              
      </BottomSheetModalProvider>
    </Container>
  );
}
