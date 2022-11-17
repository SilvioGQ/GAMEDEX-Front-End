import React from 'react'
import { Row } from '../../resource/globalsStyles'
import { Container, Joystick, Profile, Star, StarRating, UserName } from './styles'
import StarImg from '../../assets/star.png'
import JoystickImg from '../../assets/joystick.png'
export default function Collector () {
  return(
    <Container>
      <Profile src='https://tm.ibxk.com.br/2022/10/10/10130612756184.jpg?ims=184x240'/>
      <div style={{display:'flex', flexDirection:'column',margin:0}}>
        <UserName>Nelson</UserName>
        <Row>
          <Star src={StarImg}/>
          <StarRating>24</StarRating>
          <Star src={JoystickImg}/>
          <Joystick>10</Joystick>
        </Row>
      </div>
    </Container>
   )
 }