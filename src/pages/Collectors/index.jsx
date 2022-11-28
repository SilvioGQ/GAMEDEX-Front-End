import React, { useState } from 'react'
import Collector from '../../components/Collector'
import Header from '../../components/Header'
import Search from '../../components/Search'
import { BackgroundLight, ListGames, ListGamesFlex, RowWrap } from '../../resource/globalsStyles'
import { RowBetween } from '../Games/styles'
import { Container, Title } from './styles'


export default function Collectors() {
  const [hoveringInput, setHoveringInput] = useState(false);
  const [pesquisar, setPesquisar] = useState('');
  return (
    <Container>
      <Header selected={'collectors'} />
      <BackgroundLight>
        <RowBetween>
          <Title>Colecionadores</Title>
          <Search
            placeholder="Pesquisar"
            value={pesquisar}
            onChange={setPesquisar}
            hovering={hoveringInput}
            setHoveringInput={setHoveringInput} />
        </RowBetween>
        <ListGamesFlex>
        <Collector/>
        <Collector/>
        <Collector/>
        <Collector/>
        <Collector/>
        <Collector/>
        <Collector/>
        <Collector/>
        </ListGamesFlex>
      </BackgroundLight>
    </Container>
  )
}