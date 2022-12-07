import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Dropdown from '../../components/Dropdown'
import Game from '../../components/Game'
import Header from '../../components/Header'
import Search from '../../components/Search'
import { Container, BackgroundLight, ListGames, Row } from '../../resource/globalsStyles'
import { AddStar, getGames } from '../api'
import Button from '../../components/Button'
import { GameImg, Genres, Genre, GenreDiv, Title, Evidence, StarDiv, StarP, StarPng, DivAll, DivAll2 } from './styles'
import EvidenceImg from "../../assets/evidence-tmp.png"
import { DeleteItem } from "../api"
import Star from '../../assets/star.png'
import StarGray from '../../assets/starGray.png'
export default function GameInfo() {
    const game = useLocation().state;
    const userState =JSON.parse(localStorage.getItem('user'))
    const [animation, setAnimation] = useState()
    const navigate = useNavigate();
    console.log(game)

    const deleteItem = async () => {
        const res = await DeleteItem(game.games_collection.id)
        if (res) {
            alert("Jogo removido da sua coleção!")
            navigate(`/jogos/`)
        } else {
            alert("Ocorreu um erro ao remover este item da coleção...")
        }
    }

    return (
        <Container>
            <Header selected={'games'} />
            <BackgroundLight style={{ paddingTop: "0", paddingLeft: "0", paddingBottom: "0", width: "96%" }}>
                <DivAll>
                    <GameImg style={{ backgroundImage: `url(${game.img})` }} />
                    <DivAll2 style={{  }}>
                        <Title>{game.name}</Title>
                        <Genres>
                            {game.genre.split(",").map((genre, key) => {
                                return <GenreDiv>
                                    <Genre key={key}>{genre.toUpperCase()}</Genre>
                                </GenreDiv>
                            })}
                        </Genres>
                        {game.games_collection && (
                        <div style={{display:'flex'}}>
                        <StarDiv onClick={async()=>{const res = await AddStar(game.games_collection.id);if(res) return setAnimation(true); else return alert('Você já favoritou este item.')}}>
                        <StarPng src={animation ? Star : StarGray}/>
                            <StarP>Adicionar estrela</StarP>
                        </StarDiv>
                        </div>
                        )}


                        <Evidence style={{
                            backgroundImage: `url(${game.games_collection ?
                                (game.games_collection.evidence_img ? game.games_collection.evidence_img : EvidenceImg) :
                                (game.evidence_img ? game.evidence_img : EvidenceImg)})`
                        }} />

                        <div style={{ display: "flex", width: "100%", justifyContent: "flex-end", gap: "20px" }}>
                            <Button
                                text={'Voltar'}
                                styleType={"back"}
                                onPress={() => {
                                    navigate('/jogos')
                                }}
                            />
                            {!game.games_collection && <Button text={'Adicionar à coleção'} onPress={() => navigate(`/jogos/jogo/${game.id}/adicionar`, { state: game })} />}
                            {game.games_collection && game.games_collection.id_user === userState.id &&<Button text={'Remover da coleção'} styleType={"white"} onPress={() => { deleteItem() }} />}
                        </div>
                    </DivAll2>
                </DivAll>
            </BackgroundLight>
        </Container>

    )
}