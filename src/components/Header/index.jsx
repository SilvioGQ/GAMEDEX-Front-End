import React from 'react'
import {Row} from '../../resource/globalsStyles'
import {
    Collectors,
    Container,
    Game,
    Games,
    Logo,
    RowAround,
    Statistics,
    Title
} from './styles'
import LogoImage from '../../assets/logo.png'
import collectorsWhite from '../../assets/collectorsWhite.png'
import gamesWhite from '../../assets/gamesWhite.png'
import statisticsWhite from '../../assets/statisticsWhite.png'
import collectorsGray from '../../assets/collectorsGray.png'
import gamesGray from '../../assets/gamesGray.png'
import statisticsGray from '../../assets/statisticsGray.png'
import {Link, useNavigate} from 'react-router-dom'

export default function Header({selected}) {
    const navigate = useNavigate();
    return (
        <Container>
            <Row>
                <Game src={LogoImage}/>
                <Title>GAMEDEX</Title>
            </Row>
            <RowAround>
                <Row onClick={() => navigate('/colecionadores')}>
                    <Logo
                        src={selected === 'collectors'
                        ? collectorsWhite
                        : collectorsGray}/>
                    <Collectors selected={selected}>Colecionadores</Collectors>
                </Row>
                <Row onClick={() => navigate('/jogos')}>
                    <Logo
                        src={selected === 'games'
                        ? gamesWhite
                        : gamesGray}/>
                    <Games selected={selected}>Jogos</Games>
                </Row>
                <Row onClick={() => navigate('/estatisticas')}>
                    <Logo
                        src={selected === 'statistics'
                        ? statisticsWhite
                        : statisticsGray}/>
                    <Statistics selected={selected}>Estatísticas</Statistics>
                </Row>
            </RowAround>
        </Container>
    )
}