import 'react-native-gesture-handler'
import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createStore } from 'redux'
import { Provider } from 'react-redux'


import PageLogin from './src/pages/PageLogin'
import PageForgotPassword from './src/pages/PageForgotPassword'
import PageChangePassword from './src/pages/PageChangePassword'
import PaginaScanner from './src/pages/paginaScanner'
import PageMaintenance from './src/pages/PageMaintenance'

const Stack = createStackNavigator()


function App() {

  return (

    <NavigationContainer>
      <Stack.Navigator initialRouteName="PaginaScanner" screenOptions={{ headerShown: false, transitionSpec: { open: config, close: config } }} >
        <Stack.Screen name="PageLogin" component={PageLogin} />
        <Stack.Screen name="PageForgotPassword" component={PageForgotPassword} />
        <Stack.Screen name="PageChangePassword" component={PageChangePassword} />
        <Stack.Screen name="PaginaScanner" component={PaginaScanner} />
        <Stack.Screen name="PageMaintenance" component={PageMaintenance} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const config = {
  animation: 'spring',
  config: {
    stiffness: 300,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};
export default App;