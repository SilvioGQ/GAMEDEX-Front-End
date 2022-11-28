import React, {useEffect, useState} from 'react'
import {useLocation, useNavigate} from 'react-router-dom'
import Dropdown from '../../components/Dropdown'
import Game from '../../components/Game'
import Header from '../../components/Header'
import Search from '../../components/Search'
import { Container, BackgroundLight, ListGames, Row} from '../../resource/globalsStyles'
import {getGames} from '../api'
import Button from '../../components/Button'
import {GameImg, Genre, GenreDiv, Title} from './styles'

export default function GameInfo() {
    const game = useLocation().state;
    const navigate = useNavigate();
    console.log(game)

    return (
        <Container>
            <Header selected={'games'}/>
            <BackgroundLight>
                <Row>
                    <GameImg style={{ backgroundImage: `url(${game.img})` }} />
                    <div style={{ marginLeft: 50 }}>
                        <Title>{game.name}</Title>
                        <GenreDiv>
                            <Genre>
                                {game.genre}</Genre>
                        </GenreDiv>
						{!game.games_collection && <Button text={'Adicionar a minha coleção'} onPress={() => navigate("/jogos/jogo/:id/adicionar", {state: game})}/>}
                        <Button
                            text={'Voltar'}
                            onPress={() => {
                            navigate('/jogos')
                        }}/>
                    </div>
                </Row>
            </BackgroundLight>
        </Container>

    )
}