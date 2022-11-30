import React, {useEffect, useState} from 'react'
import Dropdown from '../../components/Dropdown'
import Game from '../../components/Game'
import Header from '../../components/Header'
import Search from '../../components/Search'
import {Container, BackgroundLight, ListGames} from '../../resource/globalsStyles'
import {getGames, GetCollection} from '../api'
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
            id: 0,
            name: 'Tudo'
        },
        {
            id: 1,
            name: 'Seus jogos'
        }
    ]
    const [filterSelected,
        setFilterSelected] = useState(0);
    const [games,
        setGames] = useState([]);
        const [pagination, setPagination] = useState({
            limit: 10,
            offset: 0
        })
        const [totalGames, setTotalGames] = useState(0)
    const GetGames = async() => {
        await getGames(pagination.limit, pagination.offset).then((res) => { setGames(res.games); setTotalGames(res.count)})
    }

    useEffect(() => {
        GetGames()
    }, [pagination])
    
    const [collection, setCollection] = useState([])

    console.log("collection ",collection)
    console.log("games ",games)

    const getUserCollection = async () => {
        let res = await GetCollection(pagination.limit, pagination.offset)
        if(res) {
            setCollection(res.rows); 
            setTotalGames(res.count); 
        }
    }

    useEffect(() => {
        if(filterSelected == 1){
            getUserCollection()
        }
    }, [filterSelected, pagination])

    useEffect(() => {
        setPagination({ limit: 10, offset: 0});
    }, [filterSelected])

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
                    {filterSelected === 0 && games.length > 0 && games.map((game, index) => {
                        return (<Game key={index} game={game}/>)
                    })}

                    {filterSelected == 1 && collection.length > 0 && collection.map((item, index) => {
                        return (<Game key={index} game={{ ...item.game, games_collection: true }}/>)
                    })}
                </ListGames>
            </BackgroundLight>

            <div style={{ display: "flex", width: "30%", gap: "1vw" }}>
                {pagination.offset > 0 && <p onClick={() => setPagination({ ...pagination, offset: pagination.offset-pagination.limit})}>{"<"} Anterior</p>}
                <p>Página {(pagination.offset/pagination.limit)+1}</p>
                {totalGames > pagination.offset+pagination.limit  && <p onClick={() => setPagination({ ...pagination, offset: pagination.offset+pagination.limit})}>Proximo {">"}</p>}
            </div>
        </Container>
    )
}