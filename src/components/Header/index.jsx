import React from 'react'
import { Row } from '../../resource/globalsStyles'
import { Container, Game, Logo, Title } from './styles'
import LogoImage from '../../assets/logo.png'
import Colecionadores from '../../assets/collectors.png'
import Jogos from '../../assets/games.png'
import Estatisticas from '../../assets/statistics.png'
import { Link } from 'react-router-dom'

export default function Dropdown () {
  return(
    <Container>
      <Row>
        <Game src={LogoImage} />
        <Title>GAMEDEX</Title>
      </Row>
      <Row>
        <Link to={'Collectors'}>
        <Logo src={Colecionadores} />
        <Title>Colecionadores</Title>
        </Link>
        <Row>
        <Logo src={Jogos} />
        <Title>Jogos</Title>
        </Row>
        <Row>
        <Logo src={Estatisticas} />
        <Title>Estatísticas</Title>
        </Row>
      </Row>
    </Container>
   )
 }