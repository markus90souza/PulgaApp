import { NavigationContainer } from '@react-navigation/native'
import { AuthRoutes } from './Auth.routes'

const Routes = () => {

  return (
    <NavigationContainer>
      <AuthRoutes />
    </NavigationContainer>
  )
}

export { Routes }