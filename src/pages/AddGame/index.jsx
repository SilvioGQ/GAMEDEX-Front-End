import React, {useEffect, useState, useRef} from 'react'
import {useLocation, useNavigate} from 'react-router-dom'
import Header from '../../components/Header'
import { Container, BackgroundLight } from '../../resource/globalsStyles'
import Button from '../../components/Button'
import {Main, Row, EvidenceImg} from './styles'
import DefaultEvidenceImg from "../../assets/gallery.png"
import { AddToCollection } from '../api'

export default function AddGame() {
    const game = useLocation().state;
    const navigate = useNavigate();
    console.log(game)
    const [evidence, setEvidence] = useState(null)
    const [evidenceImg, setEvidenceImg] = useState(null)
    const formRef = useRef(null);

    const handleSubmit = async () => {
        if(!evidence) return alert('Você precisa colocar uma evidência para adicionar o item á coleção!');

        const res = await AddToCollection(game.id, evidence)
        if(res){
            return navigate("/jogos");
        } else {
            alert("Ocorreu um problema ao registrar o item!");
        } 
    }

    useEffect(() => {
        if(evidence){
            setEvidenceImg(URL.createObjectURL(evidence))
        }
    }, [evidence])

    return (
        <Container>
            <Header selected={'games'}/>
            <Main>
                <Row>
                    <p className="title">{game.name}</p>
                    <p className="subtitle">Evidencias</p>
                </Row>

                <div style={{ display: "flex", width: "30vw", height: "40vh", flexDirection: "column", justifyContent: "center", alignItems: "center", border: "1px solid #fff", borderRadius: "5px", marginBottom: "2vh" }}>
                    
                    {evidenceImg ? <EvidenceImg style={{ backgroundImage: `url(${evidenceImg})`}} /> : 
                        <img src={DefaultEvidenceImg} />}
                </div>
                <input type="file" required name="evidence_img" id="" defaultValue={evidence} onChange={(e) => setEvidence(e.target.files[0])} />
                

                <div style={{ display: "flex", width: "100%", justifyContent: "center", marginTop: "3vh", gap: "30px" }}>
                    <Button
                        text={'Voltar'}
                        styleType={"Back"}
                        onPress={() => {
                            navigate(`/jogos/jogo/${game.id}`, {state: game})                                
                        }}/>

                    <Button
                        text={'Adicionar a coleção'}
                        styleType={"next"}
                        onPress={handleSubmit}/>
                </div>
            </Main>
        </Container>

    )
}