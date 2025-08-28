import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { RootStackParamList } from './Type'
import WelcomeScreen from './pages/Welcome';
import MemberSign from './pages/MemberSign';
import MemberResult from './pages/MemberResult';

const Stack = createStackNavigator<RootStackParamList>();

const App = () => {
  return (
   <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
        <Stack.Screen name="MemberSignScreen" component={MemberSign}  />
        <Stack.Screen name="MemberScreen" component={MemberResult} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App