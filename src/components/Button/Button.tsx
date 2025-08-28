import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { ButtonProps } from '../../Type'
import styles from './Button.style'

function Button({text , onPress}: ButtonProps) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  )
}

export default Button