
import React from 'react'
import { Text, View , StyleSheet} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Button from '../components/Button/Button'
import { RootStackParamList } from '../Type';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type Props = NativeStackScreenProps<RootStackParamList, 'WelcomeScreen'>;

const WelcomeScreen = ({ navigation }: Props) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Morningstar Fitness Salonu</Text>
      <Button text="Üye Kaydı Oluştur" onPress={() => {navigation.navigate('MemberSignScreen')}} />
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    
  },
  header: {
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
    margin: 10,
  },
});

export default WelcomeScreen