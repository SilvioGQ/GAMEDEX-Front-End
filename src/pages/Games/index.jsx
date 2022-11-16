import React, { useState } from 'react'
import Dropdown from '../../components/Dropdown'
import Header from '../../components/Header'
import Search from '../../components/Search'
import { BackgroundLight } from '../../resource/globalsStyles'
import { RowBetween } from './styles'


export default function Games () {
  const [hoveringInput,setHoveringInput] = useState(false);
  const [pesquisar, setPesquisar] = useState('');
  const OrderList = [{id:1,name:'ordenar'}]
  const [orderSelected, setOrderSelected] = useState('');
  const CategoryList = [{id:1,name:'categoria'}]
  const [categorySelected, setCategorySelected] = useState('');
  const FilterList = [{id:1,name:'filtrar'}]
  const [filterSelected, setFilterSelected] = useState('');
  return(
    <>
    <Header selected={'games'} />
    <BackgroundLight>
      <RowBetween>
      <Search 
				placeholder="Pesquisar"
        value={pesquisar}
        onChange={setPesquisar}
        hovering={hoveringInput}
        setHoveringInput={setHoveringInput}/>
      <Dropdown list={FilterList} selected={filterSelected} setSelected={setFilterSelected}/>
      <Dropdown list={CategoryList} selected={categorySelected} setSelected={setCategorySelected}/>
      <Dropdown list={OrderList} selected={orderSelected} setSelected={setOrderSelected}/>
      </RowBetween>
    </BackgroundLight>
    </>
      
   )
 }