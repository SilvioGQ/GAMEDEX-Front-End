import React from 'react'
import Colors from '../../resource/Colors'
import { Image, Input } from './styles'
import Lupa from '../../assets/search.png';

export default function Search ({value, onChange, placeholder,  hoveringInput, setHoveringInput }) {
  return(
    <>
    <Input 
    borderColor={hoveringInput ? Colors.White : '#a7a7a7'}
    onChange={(e)=>onChange(e.target.value)}
    value={value}
    placeholder={placeholder}
    hovering={hoveringInput}
    onMouseEnter={() => setHoveringInput(true)}
    onMouseOut={() => setHoveringInput(false)}
    />
    {/* <Image src={Lupa} /> */}
    </>
   )
 }