import React, {useEffect, useState, useRef} from 'react'
import {useLocation, useNavigate} from 'react-router-dom'
import Header from '../../components/Header'
import { Container, BackgroundLight } from '../../resource/globalsStyles'
import Button from '../../components/Button'
import {Row, EvidenceImg} from './styles'
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

        console.log("imevidenceg ", evidence)
        const res = await AddToCollection(game.id, evidence)
        console.log(res);
    }

    useEffect(() => {
        if(evidence){
            setEvidenceImg(URL.createObjectURL(evidence))
        }
    }, [evidence])

    return (
        <Container>
            <Header selected={'games'}/>
            <BackgroundLight>
                {/* <form method='post' ref={formRef} onSubmit={(e) => {e.preventDefault(); handleSubmit()}}> */}
                    <Row>
                        <p className="title">{game.name}</p>
                        <p className="subtitle">Evidencias</p>
                    </Row>

                    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                        <EvidenceImg style={{ backgroundImage: `url(${evidenceImg ? evidenceImg : DefaultEvidenceImg})`}} />
                        <input type="file" required name="evidence_img" id="" defaultValue={evidence} onChange={(e) => setEvidence(e.target.files[0])} />
                    </div>
                    

                    <Row>
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
                    </Row>
                {/* </form> */}
            </BackgroundLight>
        </Container>

    )
}