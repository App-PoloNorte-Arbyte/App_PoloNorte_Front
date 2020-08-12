import 'react-native-gesture-handler'
import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createStore } from 'redux'
import { Provider } from 'react-redux'


import ScreenLogin from './src/pages/ScreenLogin'
import PageForgotPassword from './src/pages/PageForgotPassword'
import PageChangePassword from './src/pages/PageChangePassword'
import PaginaScanner from './src/pages/paginaScanner'
import PageMaintenance from './src/pages/PageMaintenance'
import addDescription from './src/reducers/addDescription'

const Stack = createStackNavigator()
const store = createStore(addDescription)

function App() {

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="ScreenLogin" screenOptions={{ headerShown: false, transitionSpec: { open: config, close: config } }} >
          <Stack.Screen name="ScreenLogin" component={ScreenLogin} />
          <Stack.Screen name="PageForgotPassword" component={PageForgotPassword} />
          <Stack.Screen name="PageChangePassword" component={PageChangePassword} />
          <Stack.Screen name="PaginaScanner" component={PaginaScanner} />
          <Stack.Screen name="PageMaintenance" component={PageMaintenance} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
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