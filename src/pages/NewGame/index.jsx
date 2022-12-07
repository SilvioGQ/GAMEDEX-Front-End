import React, {useEffect, useState, useRef} from 'react'
import {useLocation, useNavigate} from 'react-router-dom'
import Header from '../../components/Header'
import { Container, BackgroundLight } from '../../resource/globalsStyles'
import Button from '../../components/Button'
import {Main, Row, EvidenceImg} from './styles'
import DefaultImg from "../../assets/gallery.png"
import { CreateGame } from '../api'

export default function NewGame() {
    const navigate = useNavigate();
    const [game, setGame] = useState({
        name: "",
        publisher: "",
        genres: "",
    })
    const [image, setImage] = useState(null)

    const handleSubmit = async () => {
        if(!image) return alert('Você precisa colocar uma evidência para adicionar o jogo!');

        const res = await CreateGame({ ...game, img: image})
        if(res){
            return navigate("/jogos");
        } else {
            alert("Ocorreu um problema ao registrar o item!");
        } 
    }

    return (
        <Container>
            <Header selected={'games'}/>
            <Main>
                <div style={{ display: "flex", flexDirection: "column"}}>
                    <input type="text" placeholder='Nome do jogo' defaultValue={game.name} onChange={(e) => setGame({ ...game, name: e.target.value})} />
                    <input type="text" placeholder='Publisher' defaultValue={game.publisher} onChange={(e) => setGame({ ...game, publisher: e.target.value})} />
                    <input type="text" placeholder='RPG, Aventura, FPS, ...' defaultValue={game.genres} onChange={(e) => setGame({ ...game, genres: e.target.value})} />
                </div>

                <div style={{ display: "flex", width: "30vw", height: "40vh", flexDirection: "column", justifyContent: "center", alignItems: "center", border: "1px solid #fff", borderRadius: "5px", marginBottom: "2vh" }}>
                    
                    {image ? <EvidenceImg style={{ backgroundImage: `url(${URL.createObjectURL(image)})`}} /> : 
                        <img src={DefaultImg} />}
                </div>
                <input type="file" required name="image_img" id="" defaultValue={image} onChange={(e) => setImage(e.target.files[0])} />
                

                <div style={{ display: "flex", width: "100%", justifyContent: "center", marginTop: "3vh", gap: "30px" }}>
                    <Button
                        text={'Voltar'}
                        styleType={"Back"}
                        onPress={() => {
                            navigate(`/jogos/`)
                        }}/>

                    <Button
                        text={'Adicionar jogo'}
                        styleType={"next"}
                        onPress={handleSubmit}/>
                </div>
            </Main>
        </Container>

    )
}