import {
  Container,
  Box, 
  Heading,
  Image,
  SubHeading,
  ButtomBox
} from './styles';

interface OnboardingProps {
}

import banner from './../../assets/images/banner/banner.png'
import { Button } from '../../components/Button';
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Onboarding = ({}: OnboardingProps) => {

  const { navigate } = useNavigation()

  const handleGoToHome = () => {
    navigate('Home')
  }

  return (
    <Container>

      <Image 
        source={banner}
        resizeMode={'contain'}
      />

      <Box>
        <Heading>Descubra a{'\n'}cidade</Heading>
        <SubHeading>
          A forma mais divertida e rápida de conhecer
          lugares incríveis.
        </SubHeading>
      </Box>

      <ButtomBox>
        <Button 
          variant='primary'
          title={'Entrar'}
          onPress={handleGoToHome}
      
        />
      </ButtomBox>

    </Container>
  );
}

export { Onboarding }
