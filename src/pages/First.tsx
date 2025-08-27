import React from 'react'
import { Text, View ,Button} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import {RootStackParamList} from './Type.tsx'
 

 type Props = NativeStackScreenProps<RootStackParamList, 'FirstScreen'>;


function First({navigation}: Props) {

 

  return (

    <SafeAreaView>
      <View>
        <Text>Welcome to the First Page!!!!!</Text>
        <Button title="Go to Second Page" onPress={() => {navigation.navigate('SecondScreen')}} />
      </View>
      </SafeAreaView>
 
  )
}

export default First