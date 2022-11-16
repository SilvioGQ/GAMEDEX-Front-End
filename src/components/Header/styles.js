import styled from 'styled-components'

export const Container = styled.div`
    margin:30px 100px 30px 100px;
    display: flex;
    justify-content: space-between;
`;

export const RowAround = styled.div`
    width: 600px;
    display: flex;
    justify-content: space-around;
`;
export const Title = styled.h1`
    font-size: 36px;
    margin-left: 15px;
`

export const Games = styled.p`
    font-size: 18px;
    margin-left: 15px;
    color: ${props=>props.selected === 'games' ? '#fff' : '#a7a7a7'};
`

export const Collectors = styled.p`
    font-size: 18px;
    margin-left: 15px;
    color: ${props=>props.selected === 'collectors' ? '#fff' : '#a7a7a7'};
`

export const Statistics = styled.p`
    font-size: 18px;
    margin-left: 15px;
    color: ${props=>props.selected === 'statistics' ? '#fff' : '#a7a7a7'};
`

export const Game = styled.img`
    width: 60px;
    height: 60px;
`
export const Logo = styled.img`
    width: 50px;
    height: 50px;
`