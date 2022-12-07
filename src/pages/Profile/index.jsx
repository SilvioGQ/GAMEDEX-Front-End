import React, { useContext, useEffect, useState } from 'react'
import Collector from '../../components/Collector'
import Header from '../../components/Header'
import Search from '../../components/Search'
import { UserContext } from '../../context/UserContext'
import { BackgroundLight, Container, ListGames, ListGamesFlex, RowWrap } from '../../resource/globalsStyles'
import { GetUsers } from '../api'
import { Title, RowBetween } from './styles'


export default function Profile() {
  const userState =JSON.parse(localStorage.getItem('user'))
  return (
    <Container>
      <Header selected={'profile'} />
      <BackgroundLight>
      </BackgroundLight>
    </Container>
  )
}