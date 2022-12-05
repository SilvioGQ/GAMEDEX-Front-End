import styled from 'styled-components'
import Colors from '../../resource/Colors';

export const RowBetween = styled.div`
    margin: 20px;
    display: flex;
    justify-content: space-between;
`;

export const Container = styled.div`
    flex-direction: column;
    display: flex;
    margin: 5px 15px 25px 15px;
`;

export const GenreDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${Colors.Black};
    border-radius: 10px;
    width: fit-content;
    padding-left: .7vw;
    padding-right: .7vw;
    flex-wrap: wrap;
`

export const Genres = styled.div`
    display: flex;
    width: 100%;
    gap: 1vw;
    flex-wrap: wrap;
`

export const Genre = styled.p`
    font-size: 12px;
    font-weight: 600;
`

export const Title = styled.p`
    font-size: 43px;
    font-weight: 600;
`

export const StarRating = styled.p`
    font-size: 18px;
    color: ${Colors.Yellow};
    margin-top: 11px;
    margin-left: 5px;
    cursor: pointer;
`

export const GameImg = styled.div`
    width: 40%;
    height: 100%;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 5px;
    cursor: pointer;
`
export const Star = styled.img`
    margin-top: 10px;
    width: 25px;
    height: 25px;
    cursor: pointer;
`