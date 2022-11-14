import React, { useState } from 'react'
import { Row } from '../../resource/globalsStyles'
import { AnimationImg, ConsolesImg, Container, FlexLeft, FlexRight, Logo, Title } from './styles'
import LogoImage from '../../assets/logo.png'
import LoginAnimation from '../../assets/loginAnimation.png'
import Consoles from '../../assets/consoles.png'
import Input from '../../components/Input'
import Button from '../../components/Button'
import ButtonTransparent from '../../components/ButtonTransparent'
import { CreateUser, LoginUser } from '../api'

export default function Login () {
  const [email, setEmail] = useState('');
  const [nome, setNome] = useState('');
  const [senha,setSenha] = useState('');
  const [page, setPage] = useState(1);
  const [hoveringInput,setHoveringInput] = useState(false);
  const createUser = async()=>{
    const user = await CreateUser(nome,email,senha);
    console.log(user)
  }
  return(
    <Container>
      <FlexLeft>
        <h1 style={{marginLeft:40, marginBottom:50}}>COMECE SUAS COLEÇÃO DE JOGOS AGORA!</h1>
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
              onChange={setEmail}
				  		inputRequired 
              hovering={hoveringInput}
              setHoveringInput={setHoveringInput}
              />
            <Input 							
              value={senha}
              onChange={setSenha}
				  	  secureTextEntry={true}				
				  		placeholder="Senha"
				  		inputRequired
              hovering={hoveringInput}
              setHoveringInput={setHoveringInput}
              />
          </div>
          <div style={{width:'100%',marginVertical:50}}>
            <Button text={'ENTRAR'} onPress={async()=>{await LoginUser(email,senha)}}/>
            <ButtonTransparent text={'CADASTRE-SE'} onPress={()=>setPage(2)}/>
          </div>
        </>
        :
        <>
        <div style={{marginVertical:50}}>
        <Input 
            placeholder="Nome"
            value={nome}
            onChange={setNome}
            inputRequired 
            hovering={hoveringInput}
            setHoveringInput={setHoveringInput}
            />
          <Input 
            placeholder="Email"
            value={email}
            onChange={setEmail}
            inputRequired
            hovering={hoveringInput}
            setHoveringInput={setHoveringInput}/>
          <Input 							
            value={senha}
            onChange={setSenha}
            secureTextEntry={true}				
            placeholder="Senha"
            inputRequired
            hovering={hoveringInput}
            setHoveringInput={setHoveringInput}/>
        </div>
        <div style={{width:'100%',marginVertical:50}}>
          <Button text={'CRIAR CONTA'} onPress={()=>createUser()} />
          <ButtonTransparent text={'CANCELAR'} onPress={()=>setPage(1)}/>
        </div>
      </>
        }
      </FlexRight>
    </Container>
   )
 }