import React, {useEffect, useState} from 'react'
import {useLocation, useNavigate} from 'react-router-dom'
import Header from '../../components/Header'
import { Container, BackgroundLight, Row} from '../../resource/globalsStyles'
import Button from '../../components/Button'
import {GameImg, Genre, GenreDiv, Title} from './styles'

export default function AddGame() {
    const game = useLocation().state;
    const navigate = useNavigate();
    console.log(game)

    useState(() => {
        
    })

    return (
        <Container>
            <Header selected={'games'}/>
            <BackgroundLight>
                <Row>
                    
                </Row>
            </BackgroundLight>
        </Container>

    )
}