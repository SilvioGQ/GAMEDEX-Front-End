import React, { useState } from 'react'
import { Row } from '../../resource/globalsStyles'
import { Container, FlexLeft, FlexRight, Logo, Title } from './styles'
import LogoImage from '../../assets/logo.png'
import Input from '../../components/Input'
import Button from '../../components/Button'
import ButtonTransparent from '../../components/ButtonTransparent'

export default function Login () {
  const [email, setEmail] = useState('');
  const [senha,setSenha] = useState('');
  return(
    <Container>
      <FlexLeft>

      </FlexLeft>
      <FlexRight>
        <Row>
          <Logo src={LogoImage} />
          <Title>GAMEDEX</Title>
        </Row>
        <div style={{marginVertical:50}}>
          <Input 
						placeholder="Email"
            value={email}
            onChangeText={setEmail}
						inputRequired/>
          <Input 							
            value={senha}
            onChangeText={setSenha}
					  secureTextEntry={true}				
						placeholder="Senha"
						inputRequired/>
        </div>
        <Button text={'ENTRAR'} />
        <ButtonTransparent text={'CADASTRE-SE'}/>
      </FlexRight>
    </Container>
   )
 }