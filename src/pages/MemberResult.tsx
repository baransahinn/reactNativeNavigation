import React from 'react'
import { StyleSheet, Text ,View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { MemberResultProps, RootStackParamList } from '../Type'
import { NativeStackScreenProps } from '@react-navigation/native-stack';


type Props = NativeStackScreenProps<RootStackParamList, 'MemberScreen'>;
function MemberResult({route}:Props) {
    const {user} = route.params;
  return (
    <SafeAreaView>
      <View>
        <Text style={styles.message}>Kayıt Tamamlandı!</Text>
        <Text style={styles.label}>Üye adı : {user.userName}</Text>
        <Text style={styles.label}>Üye soyadı : {user.userSurname}</Text>
        <Text style={styles.label}>Üye yaşı : {user.userAge}</Text>
        <Text style={styles.label}>Üye e-posta : {user.userEmail}</Text>
        <Text style={styles.label}>Üye şehri : {user.userCity}</Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  label: {
    fontWeight: 'bold',
    fontSize: 20,
    margin: 5,
  },
  message: {
    fontWeight: 'bold',
    fontSize: 50,
    textAlign: 'center',
  },
});

export default MemberResult