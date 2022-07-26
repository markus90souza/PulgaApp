import { createNativeStackNavigator  } from '@react-navigation/native-stack'
import { Onboarding } from '../screens/Onboarding'
const { Group, Navigator, Screen} = createNativeStackNavigator()


const AuthRoutes = () => {

  return (
    <Navigator>
      <Group screenOptions={{ headerShown: false }}>
        <Screen 
          name='Onboarding'
          component={Onboarding}
        />
      </Group>
    </Navigator>
  )
}

export { AuthRoutes }