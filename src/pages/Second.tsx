import React from 'react'
import { View,Text ,Button } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import {RootStackParamList} from './Type.tsx'
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type Props = NativeStackScreenProps<RootStackParamList, 'SecondScreen'>;

function Second({navigation}: Props) {

  return (
    <SafeAreaView>
      <View>
        <Text>Welcome to the Second Page!</Text>
        <Button title="Go Back" onPress={() => {navigation.goBack()}}  />
      </View>
    </SafeAreaView>
  )
}

export default Second