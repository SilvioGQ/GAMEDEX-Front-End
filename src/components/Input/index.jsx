import React from 'react'
import Colors from '../../resource/Colors';
import { TextInput, } from './styles';
export default function Input ({value, onChange, placeholder,  secureTextEntry, err = false, hoveringInput, setHoveringInput, inputRequired }) {
  return (
  <>
    <TextInput 
      borderColor={err ? '#000' : Colors.White}
      onChange={(e)=>onChange(e.target.value)}
      value={value}
      placeholder={placeholder}
      security={secureTextEntry}
      hovering={hoveringInput}
      onMouseEnter={() => setHoveringInput(true)}
      onMouseOut={() => setHoveringInput(false)}
      required={inputRequired ? true : false}
      requiredInput={inputRequired ? true : false}
    />
  </>
  )
 }