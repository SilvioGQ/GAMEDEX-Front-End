import React, {useEffect, useState} from 'react'
import {useLocation, useNavigate} from 'react-router-dom'
import Dropdown from '../../components/Dropdown'
import Game from '../../components/Game'
import Header from '../../components/Header'
import Search from '../../components/Search'
import { Container, BackgroundLight, ListGames, Row} from '../../resource/globalsStyles'
import {getGames} from '../api'
import Button from '../../components/Button'
import {GameImg, Genres, Genre, GenreDiv, Title} from './styles'

export default function GameInfo() {
    const game = useLocation().state;
    const navigate = useNavigate();
    console.log(game) 

    return (
        <Container>
            <Header selected={'games'}/>
            <BackgroundLight style={{ paddingTop: "0", paddingLeft: "0", paddingBottom: "0", width: "96%" }}>
                <div style={{ display: "flex", height: "80vh" }}>
                    <GameImg style={{ backgroundImage: `url(${game.img})` }} />
                    <div style={{ marginLeft: 50, width: "100%", height: "80vh" }}>
                        <Title>{game.name}</Title>
                        <Genres>
                            {game.genre.split(",").map((genre, key) => {
                                return <GenreDiv>
                                    <Genre key={key}>{genre.toUpperCase()}</Genre>
                                </GenreDiv>
                            })}
                        </Genres>
                        <div style={{ display: "flex" }}>
                            {!game.games_collection && <Button text={'Adicionar a minha coleção'} onPress={() => navigate(`/jogos/jogo/${game.id}/adicionar`, {state: game})}/>}
                            <Button
                                text={'Voltar'}
                                styleType={"back"}
                                onPress={() => {
                                navigate('/jogos')
                            }}/>
                        </div>
                    </div>
                </div>
            </BackgroundLight>
        </Container>

    )
}