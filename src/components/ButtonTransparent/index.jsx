import React from 'react'
import { Button, Text } from './styles'


export default function ButtonTransparent ({text,onPress}) {
  return(
    <Button onClick={onPress}>
      <Text>{text}</Text>
    </Button>
   )
 }