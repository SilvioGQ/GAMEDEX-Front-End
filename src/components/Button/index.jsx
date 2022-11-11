import React from 'react'
import { Text, ButtonContaienr } from './styles'


export default function Button ({text, onPress}) {
  return(
    <ButtonContaienr onClick={()=>{}}>
      <Text>{text}</Text>
    </ButtonContaienr>
   )
 }