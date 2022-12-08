import React, { useContext, useEffect, useState } from 'react'
import Collector from '../../components/Collector'
import Header from '../../components/Header'
import Search from '../../components/Search'
import { UserContext } from '../../context/UserContext'
import { BackgroundLight, Container, ListGames, ListGamesFlex, Row, RowWrap } from '../../resource/globalsStyles'
import { DeleteItem, GetUserById, GetUsers, UpdateUser, DeleteUser } from '../api'
import { CollectorMargin, ProfileImg, UserName, Text } from './styles'
import StarImg from '../../assets/star.png'
import JoystickImg from '../../assets/joystick.png'
import Button from '../../components/Button'
import Input from '../../components/Input'
import { useNavigate } from 'react-router-dom'

export default function Profile() {
  const user = JSON.parse(localStorage.getItem('user'))
  const [userState, setUserState] = useState();
  const [editionName, setEditionName] = useState();
  const [editionPassword, setEditionPassword] = useState();
  const [hoveringInput,setHoveringInput] = useState(false);
  const [nome, setNome] = useState(null);
  const [senha,setSenha] = useState(null);
  const [image, setImage] = useState(null)

  const getUser = async () => {
    await GetUserById(user.id).then((res) => { 
      setUserState(res.user)
    })
  }

  const navigate = useNavigate();
  
  useEffect(() => {
      getUser()
  }, [])
  

  const updateUser = async ()=>{
    if( image|| nome|| senha) await UpdateUser(image,nome,senha)
  }
  
  return (
    <Container>
      <Header selected={'profile'} />
      <BackgroundLight>
        <CollectorMargin>
			<label htmlFor="avatar">
          	<ProfileImg style={{ backgroundImage: `url(${userState && userState.img && !image ? userState.img : (image ? URL.createObjectURL(image) : 'https://pbs.twimg.com/profile_images/978526727604387840/WcWvDE6W_400x400.jpg')})`}} />
			</label>
		  	<input type="file" required name="avatar" id="avatar" defaultValue={image} onChange={(e) => setImage(e.target.files[0])} />

            {editionName ? 
            <>
             <Input 
             placeholder="Nome"
             value={nome}
             onChange={setNome}
             hovering={hoveringInput}
             setHoveringInput={setHoveringInput}
             />
             <Text>{userState && userState.email}</Text>
            </>
            :
            <>
              <UserName>{userState && userState.name}</UserName>
              <Text>{userState && userState.email}</Text>
            </>
            }
          {editionPassword&&
            <>
                       {/* <Input 
             placeholder="Email"
             value={email}
             onChange={setEmail}
             hovering={hoveringInput}
             setHoveringInput={setHoveringInput}/> */}
           <Input 							
             value={senha}
             onChange={setSenha}
             type={'password'}				
             placeholder="Senha"
             hovering={hoveringInput}
             setHoveringInput={setHoveringInput}/>
            </>
            }
          {editionName && <Button text={'Cancelar'} styleType={'white'} onPress={()=>{setEditionName(false); setEditionPassword(false);}} />} 
          {editionPassword && <Button text={'Cancelar'} styleType={'white'} onPress={()=>{setEditionName(false); setEditionPassword(false);}} />} 
          <div style={{marginTop:15}}></div>
          {!editionPassword && <Button text={editionName ? 'Salvar' : 'Editar nome'} onPress={async()=>{if(editionName){ setNome(nome);setEditionName(false);}else return setEditionName(true)}} />}
          <div style={{marginTop:15}}></div>
          {!editionName &&<Button text={editionPassword ? 'Salvar' : 'Editar senha'} onPress={async()=>{if(editionPassword){ setSenha(senha);setEditionPassword(false);}else return setEditionPassword(true)}} />}
          <div style={{marginTop:15}}></div>
          
          <Button text={'Salvar'} onPress={async()=>{{await updateUser(); navigate('/jogos')}}} />

          <Button styleType='back' text={'Excluir conta'} onPress={async()=>{{await DeleteUser(); navigate('/')}}} />
        </CollectorMargin>
      </BackgroundLight>
    </Container>
  )
}