
import { Feather } from '@expo/vector-icons'
import { TextInputProps } from 'react-native';
import { Container, RNInput } from './styles';

interface InputProps extends TextInputProps {}

const Input = ({...rest } : InputProps) =>{
  return (
    <Container>
      <Feather name={'search'} size={14} />
      <RNInput { ...rest}/>
    </Container>
  );
}

export { Input }
