import React, { useState } from 'react'
import Collector from '../../components/Collector'
import Header from '../../components/Header'
import Search from '../../components/Search'
import { BackgroundLight, ListGames, RowWrap } from '../../resource/globalsStyles'
import { RowBetween } from '../Games/styles'
import { Title } from './styles'


export default function Collectors() {
  const [hoveringInput, setHoveringInput] = useState(false);
  const [pesquisar, setPesquisar] = useState('');
  return (
    <>
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
        <ListGames>
        <Collector/>
        <Collector/>
        <Collector/>
        <Collector/>
        <Collector/>
        <Collector/>
        <Collector/>
        <Collector/>
        </ListGames>
      </BackgroundLight>
    </>
  )
}