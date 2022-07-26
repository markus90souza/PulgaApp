import { ReactNode } from 'react';
import { Text } from 'react-native';

import {
  Container,
  Box, 
  Heading,
  Subtext
} from './styles';

interface OnboardingProps {
}

const Onboarding = ({}: OnboardingProps) => {
  return (
    <Container>

      <Box>
        <Heading>Descubra a{'\n'}cidade</Heading>
        <Subtext>
          A forma mais divertida e rápida de conhecer
          lugares incríveis.
        </Subtext>
      </Box>

    </Container>
  );
}

export { Onboarding }
