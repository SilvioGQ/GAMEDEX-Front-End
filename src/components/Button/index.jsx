import React from 'react'
import { Text, ButtonContaienr } from './styles'


export default function Button ({text, onPress}) {
  return(
    <ButtonContaienr onClick={onPress}>
      <Text>{text}</Text>
    </ButtonContaienr>
   )
 }