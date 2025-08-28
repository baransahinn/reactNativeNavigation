import React, { useState } from 'react'
import { Alert, Text,View, } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Input from '../components/Input/Input'
import Button from '../components/Button/Button'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../Type'

type Props = NativeStackScreenProps<RootStackParamList, 'MemberSignScreen'>;

function MemberSign({ navigation}: Props) {

  const [userName , setUserName] = useState('')
  const [userSurname , setUserSurname] = useState('')
  const [userAge , setUserAge] = useState('')
  const [userEmail , setUserEmail] = useState('')
  const [userCity , setUserCity] = useState('')

function handleSubmit() {
  if (!userName || !userSurname || !userAge || !userEmail || !userCity) {
    Alert.alert('Hata', 'Lütfen tüm alanları doldurun');
    return;
  }
  const user = {
    userName,
    userSurname,
    userAge,
    userEmail,
    userCity
  }
  navigation.navigate('MemberScreen', { user });

}
  return (
    <SafeAreaView>
      <View>
      <Input label="Üye adı" placeholder="Adınızı girin"  onChangeText={setUserName}  />
      <Input label="Üye soyadı" placeholder="Soyadınızı girin" onChangeText={setUserSurname} />
      <Input label="Üye Yaşı" placeholder="Yaşınızı girin"  onChangeText={setUserAge} />
      <Input label="Üye e-posta" placeholder="E-posta adresinizi girin"  onChangeText={setUserEmail} />
      <Input label="Üye Yaşadığı Şehir" placeholder="Yaşadığınız şehri girin"  onChangeText={setUserCity} />
      <Button text="Kayıt Ol" onPress={handleSubmit} />
     </View>
    </SafeAreaView>
  )
} 

export default MemberSign