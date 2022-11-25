import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    width: 100%;
    /* margin:30px 100px 10px 100px; */
    justify-content: space-between;
    align-items: center;
`;

export const RowAround = styled.div`
    width: 600px;
    display: flex;
    justify-content: space-around;
`;
export const Title = styled.h1`
    font-size: 32px;
    margin-left: 10px;
    margin-top: 20px;
    font-weight: 600;
`

export const Games = styled.p`
    font-size: 16px;
    margin-left: 15px;
    color: ${props=>props.selected === 'games' ? '#fff' : '#a7a7a7'};
`

export const Collectors = styled.p`
    font-size: 16px;
    margin-left: 15px;
    color: ${props=>props.selected === 'collectors' ? '#fff' : '#a7a7a7'};
`

export const Statistics = styled.p`
    font-size: 16px;
    margin-left: 15px;
    color: ${props=>props.selected === 'statistics' ? '#fff' : '#a7a7a7'};
`

export const Game = styled.img`
    width: 60px;
    height: 60px;
`
export const Logo = styled.img`
    width: 35px;
    height: 35px;
    margin-top: 10px;
`