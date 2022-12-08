import React, { useContext, useState } from 'react'
import { Row } from '../../resource/globalsStyles'
import { AnimationImg, ConsolesImg, ProfileImg,Container, FlexLeft, FlexRight, Logo, Title } from './styles'
import LogoImage from '../../assets/logo.png'
import LoginAnimation from '../../assets/loginAnimation.png'
import Consoles from '../../assets/consoles.png'
import Input from '../../components/Input'
import Button from '../../components/Button'
import ButtonTransparent from '../../components/ButtonTransparent'
import { CreateUser, LoginUser } from '../api'
import { UserContext } from '../../context/UserContext'
import { useNavigate } from 'react-router-dom'
import { useWindowDimensions } from '../../constants'

export default function Login () {
  const { state:userState, dispatch: userDispatch } = useContext(UserContext);
  const navigate = useNavigate();
  const [hoveringInput,setHoveringInput] = useState(false);
  const [email, setEmail] = useState('');
  const [nome, setNome] = useState('');
  const [senha,setSenha] = useState('');
  const [image, setImage] = useState(null)
  const [page, setPage] = useState(1);
  const { height, width } = useWindowDimensions();
  const createUser = async()=>{
    const created=await CreateUser(nome,email,senha,image);
    if(!created) {
      alert("Falhou")
      return
    }

    const user = await LoginUser(email,senha);
    if(user){
      localStorage.setItem('token', user.token);
      localStorage.setItem('user',JSON.stringify(user));
      navigate('jogos')
    }    
  }
  const loginUser = async()=>{
    const user = await LoginUser(email,senha);
    if(user){
      localStorage.setItem('token', user.token);
      localStorage.setItem('user',JSON.stringify(user));
      navigate('jogos')
    }    
    console.log('login',user)
  }
  return(
    <Container>
      {width > 1200 && (
      <FlexLeft>
        <h1 style={{marginLeft:40, marginBottom:50}}>COMECE SUAS COLEÇÃO DE JOGOS AGORA!</h1>
        <AnimationImg src={LoginAnimation}/>

      </FlexLeft>
      )}
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
              type={'password'}			
				  		placeholder="Senha"
				  		inputRequired
              hovering={hoveringInput}
              setHoveringInput={setHoveringInput}
              />
          </div>
            <ButtonTransparent id={1} text={'ENTRAR'} onPress={()=>{loginUser()}}/>
            <ButtonTransparent id={2} text={'CADASTRE-SE'} onPress={()=>setPage(2)}/>
        </>
        :
        <>
        
        <label htmlFor="avatar">
        <ProfileImg style={{ backgroundImage: `url(${(image ? URL.createObjectURL(image) : 'https://pbs.twimg.com/profile_images/978526727604387840/WcWvDE6W_400x400.jpg')})`}} />
        </label>
		  	<input type="file" required name="avatar" id="avatar" defaultValue={image} onChange={(e) => setImage(e.target.files[0])} />
        
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
            type={'password'}				
            placeholder="Senha"
            inputRequired
            hovering={hoveringInput}
            setHoveringInput={setHoveringInput}/>
        </div>
        <div style={{width:'100%',marginVertical:50}}>
          <ButtonTransparent id={1} text={'CRIAR CONTA'} onPress={()=>createUser()} />
          <ButtonTransparent id={2} text={'CANCELAR'} onPress={()=>setPage(1)}/>
        </div>
      </>
        }
      </FlexRight>
    </Container>
   )
 }