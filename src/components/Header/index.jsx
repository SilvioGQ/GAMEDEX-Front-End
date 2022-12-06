import React, {useState, useEffect} from 'react'
import {Row, RowPointer} from '../../resource/globalsStyles'
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
import logoutIconWhite from '../../assets/logoutIconWhite.png'
import logoutIconGray from '../../assets/logoutIconGray.png'
import {Link, useNavigate} from 'react-router-dom'

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };
  }
  function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(
      getWindowDimensions()
    );
  
    useEffect(() => {
      function handleResize() {
        setWindowDimensions(getWindowDimensions());
      }
  
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);
  
    return windowDimensions;
  }
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
                <RowPointer onClick={() => navigate('/colecionadores')}>
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
                
                <RowPointer onClick={() => {
                    localStorage.removeItem('token');
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