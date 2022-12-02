import React from 'react'
import ArrowImg from '../../assets/arrow.png'
export default function Arrow({Onpress,Rotation}) {
    return (
        <div onClick={()=>{Onpress()}} style={{ alignItems:'center', justifyContent:'center', marginTop:120}}>
        <img style={{transform: `rotate(${Rotation})`}} src={ArrowImg} />
        </div>
    )
}