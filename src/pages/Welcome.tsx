
import React from 'react'
import { Text, View , StyleSheet} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Button from '../components/Button/Button'

const WelcomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Welcome!</Text>
      <Button text="Üye Kaydı Oluştur" onPress={() => {null}} />
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