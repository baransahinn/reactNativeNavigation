import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { RootStackParamList } from './pages/Type'
import WelcomeScreen from './pages/Welcome';

const Stack = createStackNavigator<RootStackParamList>();

const App = () => {
  return (
   <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App