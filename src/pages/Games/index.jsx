import React, {useEffect, useState} from 'react'
import Dropdown from '../../components/Dropdown'
import Game from '../../components/Game'
import Header from '../../components/Header'
import Search from '../../components/Search'
import {Container, BackgroundLight, ListGames} from '../../resource/globalsStyles'
import {getGames} from '../api'
import {RowBetween} from './styles'

export default function Games() {
    const [hoveringInput,
        setHoveringInput] = useState(false);
    const [pesquisar,
        setPesquisar] = useState('');
    const OrderList = [
        {
            id: 1,
            name: 'ordenar'
        }
    ]
    const [orderSelected,
        setOrderSelected] = useState('');
    const CategoryList = [
        {
            id: 1,
            name: 'categoria'
        }
    ]
    const [categorySelected,
        setCategorySelected] = useState('');
    const FilterList = [
        {
            id: 1,
            name: 'filtrar'
        }
    ]
    const [filterSelected,
        setFilterSelected] = useState('');
    const [games,
        setGames] = useState([]);
    const GetGames = async() => {
        await getGames().then((res) => setGames(res.games))
    }
    console.log(games);

    useEffect(() => {
        GetGames()
    }, [])

    return (
        <Container>
            <Header selected={'games'}/>
            <BackgroundLight>
                <RowBetween>
                    <Search
						gridArea={"search"}
                        placeholder="Pesquisar"
                        value={pesquisar}
                        onChange={setPesquisar}
                        hovering={hoveringInput}
                        setHoveringInput={setHoveringInput}/>

                    <Dropdown
                        list={FilterList}
                        selected={filterSelected}
                        setSelected={setFilterSelected}/>
                    <Dropdown
                        list={CategoryList}
                        selected={categorySelected}
                        setSelected={setCategorySelected}/>
                    <Dropdown
                        list={OrderList}
                        selected={orderSelected}
                        setSelected={setOrderSelected}/>
                </RowBetween>

                <ListGames>
                    {games.length > 0 && games.map((game, index) => {
                        return (<Game key={index} game={game}/>)
                    })}
                </ListGames>
            </BackgroundLight>
        </Container>
    )
}