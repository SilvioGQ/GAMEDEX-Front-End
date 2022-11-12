import React, { useState } from 'react'
import { Row } from '../../resource/globalsStyles'
import { AnimationImg, ConsolesImg, Container, FlexLeft, FlexRight, Logo, Title } from './styles'
import LogoImage from '../../assets/logo.png'
import LoginAnimation from '../../assets/loginAnimation.png'
import Consoles from '../../assets/consoles.png'
import Input from '../../components/Input'
import Button from '../../components/Button'
import ButtonTransparent from '../../components/ButtonTransparent'

export default function Login () {
  const [email, setEmail] = useState('');
  const [nome, setNome] = useState('');
  const [senha,setSenha] = useState('');
  const [page, setPage] = useState(1)
  return(
    <Container>
      <FlexLeft>
        <ConsolesImg src={Consoles}/>
        <AnimationImg src={LoginAnimation}/>

      </FlexLeft>
      <FlexRight>
        <Row>
          <Logo src={LogoImage} />
          <Title>GAMEDEX</Title>
        </Row>
        {page == 1 ? 
        <>
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
          <ButtonTransparent text={'CADASTRE-SE'} onPress={()=>setPage(2)}/>
        </>
        :
        <>
        <div style={{marginVertical:50}}>
        <Input 
            placeholder="Nome"
            value={nome}
            onChangeText={setNome}
            inputRequired />
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
        <Button text={'CRIAR CONTA'} />
        <ButtonTransparent text={'CANCELAR'} onPress={()=>setPage(1)}/>
      </>
        }
      </FlexRight>
    </Container>
   )
 }