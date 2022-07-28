import {
  Container,
  Box, 
  Heading,
  Image,
  SubHeading
} from './styles';

interface OnboardingProps {
}

import banner from './../../assets/images/banner/banner.png'

const Onboarding = ({}: OnboardingProps) => {
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

    </Container>
  );
}

export { Onboarding }
