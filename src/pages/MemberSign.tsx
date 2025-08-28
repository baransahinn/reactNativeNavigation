import React from 'react'
import { Text,View, } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Input from '../components/Input/Input'
import { InputProps } from '../Type'
import Button from '../components/Button/Button'

function MemberSign() {
  return (
    <SafeAreaView>

      <Input label="Üye adı" placeholder="Adınızı girin"  />
      <Input label="Üye soyadı" placeholder="Soyadınızı girin"  />
      <Input label="Üye Yaşı" placeholder="Yaşınızı girin"  />
      <Input label="Üye e-posta" placeholder="E-posta adresinizi girin"  />
      <Input label="Üye Yaşadığı Şehir" placeholder="Yaşadığınız şehri girin"  />
      <Button text="Kaydol" onPress={() => {}} />

    </SafeAreaView>
  )
}

export default MemberSign