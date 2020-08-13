import 'react-native-gesture-handler'
import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import PageLogin from './src/pages/PageLogin'
import PageForgotPassword from './src/pages/PageForgotPassword'
import PageChangePassword from './src/pages/PageChangePassword'
import PageScanner from './src/pages/PageScanner'
import PageMaintenance from './src/pages/PageMaintenance'
import reducer from './src/reducers/reducer'

const Stack = createStackNavigator()
const store = createStore(reducer)

function App() {

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="PageScanner" screenOptions={{ headerShown: false, transitionSpec: { open: config, close: config } }} >
          <Stack.Screen name="PageLogin" component={PageLogin} />
          <Stack.Screen name="PageForgotPassword" component={PageForgotPassword} />
          <Stack.Screen name="PageChangePassword" component={PageChangePassword} />
          <Stack.Screen name="PageScanner" component={PageScanner} />
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