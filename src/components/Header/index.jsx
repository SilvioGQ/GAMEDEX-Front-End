import React, {useState, useEffect} from 'react'
import {Row, RowPointer} from '../../resource/globalsStyles'
import {
    Collectors,
    Container,
    Game,
    Games,
    Logo,
    Profile,
    RowAround,
    Statistics,
    Title
} from './styles'
import LogoImage from '../../assets/logo.png'
import collectorsWhite from '../../assets/collectorsWhite.png'
import gamesWhite from '../../assets/gamesWhite.png'
import PersonWhite from '../../assets/PersonWhite.png'
import statisticsWhite from '../../assets/statisticsWhite.png'
import collectorsGray from '../../assets/collectorsGray.png'
import gamesGray from '../../assets/gamesGray.png'
import statisticsGray from '../../assets/statisticsGray.png'
import logoutIconWhite from '../../assets/logoutIconWhite.png'
import logoutIconGray from '../../assets/logoutIconGray.png'
import PersonGray from '../../assets/PersonGray.png'
import {Link, useNavigate} from 'react-router-dom'
import { useWindowDimensions } from '../../constants'
export default function Header({selected}) {
    const { height, width } = useWindowDimensions();
    const navigate = useNavigate();
    return (
        <Container>
            <Row>
                <Game src={LogoImage}/>
                <Title>GAMEDEX</Title>
            </Row>
            
            <RowAround>
                <RowPointer onClick={() => navigate('/jogos/novo')}>
                    <Logo
                        src={selected === 'collectors'
                        ? collectorsWhite
                        : collectorsGray}/>
               {width > 850 && (<Collectors selected={selected}>Colecionadores</Collectors>)}
                </RowPointer>
                <RowPointer onClick={() => navigate('/jogos')}>
                    <Logo
                        src={selected === 'games'
                        ? gamesWhite
                        : gamesGray}/>
                    {width > 850 && (<Games selected={selected}>Jogos</Games>)}
                </RowPointer>
                <RowPointer onClick={() => navigate('/estatisticas')}>
                    <Logo
                        src={selected === 'statistics'
                        ? statisticsWhite
                        : statisticsGray}/>
                    {width > 850 && (<Statistics selected={selected}>Estatísticas</Statistics>)}
                </RowPointer>
                <RowPointer onClick={() => navigate('/perfil')}>
                    <Logo
                        src={selected === 'profile'
                        ? PersonWhite
                        : PersonGray}/>
               {width > 850 && (<Profile selected={selected}>Perfil</Profile>)}
                </RowPointer>
                <RowPointer onClick={() => {
                    localStorage.removeItem('token');
                    localStorage.removeItem('user');
                    navigate('/')
                }}>
                    <Logo
                        src={selected === 'logout'
                        ? logoutIconWhite
                        : logoutIconGray}/>
                    {width > 850 && (<Statistics selected={selected}>Sair</Statistics>)}
                </RowPointer>
            </RowAround>

        </Container>
    )
}
