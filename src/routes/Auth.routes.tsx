import { createNativeStackNavigator  } from '@react-navigation/native-stack'
import { Home } from '../screens/Home'
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

        <Screen 
          name='Home'
          component={Home}
        />
      </Group>
    </Navigator>
  )
}

export { AuthRoutes }