import React from 'react'
import { Row } from '../../resource/globalsStyles'
import { Container, Joystick, Profile, Star, StarRating, UserName } from './styles'
import StarImg from '../../assets/star.png'
import JoystickImg from '../../assets/joystick.png'
import { useNavigate } from 'react-router-dom'
export default function Collector ({i}) {
  const navigate = useNavigate();
  return(
    <Container onClick={()=>navigate(`perfil/${i.id}`)}>
      <Profile src='https://pbs.twimg.com/profile_images/978526727604387840/WcWvDE6W_400x400.jpg'/>
      <div style={{display:'flex', flexDirection:'column',margin:0}}>
        <UserName>{i.name}</UserName>
        <Row>
          <Star src={StarImg}/>
          <StarRating>24</StarRating>
          {i.games && (
            <>
            <Star src={JoystickImg}/>
            <Joystick>{i.games}</Joystick>
            </>
          )}
        </Row>
      </div>
    </Container>
   )
 }