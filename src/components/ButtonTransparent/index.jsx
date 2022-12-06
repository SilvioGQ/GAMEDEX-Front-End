import React from 'react'
import Colors from '../../resource/Colors'
import { Button, Text } from './styles'


export default function ButtonTransparent ({text,onPress, id}) {
  return(
    <Button BorderColor={id === 2 ? Colors.White : Colors.Purple} bgColor={id === 2 ? Colors.BlackLight : Colors.Purple} onClick={onPress}>
      <Text>{text}</Text>
    </Button>
   )
 }