import 'react-native-gesture-handler'
import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createStore } from 'redux'
import { Provider } from 'react-redux'


import PaginaLogin from './src/pages/paginaLogin'
import PaginaEsqueceuSenha from './src/pages/paginaEsqueceuSenha'
import PaginaRedefinirSenha from './src/pages/paginaRedefinirSenha'
import PaginaScanner from './src/pages/paginaScanner'
import PaginaManutencao from './src/pages/paginaManutencao'

const Stack = createStackNavigator()


function App() {

  return (

    <NavigationContainer>
      <Stack.Navigator initialRouteName="PaginaLogin" screenOptions={{ headerShown: false, transitionSpec: { open: config, close: config } }} >
        <Stack.Screen name="PaginaLogin" component={PaginaLogin} />
        <Stack.Screen name="PaginaEsqueceuSenha" component={PaginaEsqueceuSenha} />
        <Stack.Screen name="PaginaRedefinirSenha" component={PaginaRedefinirSenha} />
        <Stack.Screen name="PaginaScanner" component={PaginaScanner} />
        <Stack.Screen name="PaginaManutencao" component={PaginaManutencao} />
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