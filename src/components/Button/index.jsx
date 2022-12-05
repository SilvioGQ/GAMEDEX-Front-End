import React from 'react'
import { Text, ButtonContainer } from './styles'


export default function Button ({text, onPress, styleType="next", btnType="button", width, height}) {
  return(
    <ButtonContainer onClick={onPress} styleType={styleType} type={btnType} width={width} height={height}>
      <Text>{text}</Text>
    </ButtonContainer>
   )
 }