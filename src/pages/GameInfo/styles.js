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

export const Genre = styled.p`
    font-size: 12px;
    font-weight: 600;
    margin-top: -5px;
    text-align: center;
`

export const GenreDiv = styled.div`
    background-color: ${Colors.Black};
    padding: 5px;
    height: 15px;
    width:80px;
    margin-top: 5px;
    border-radius: 5px;
    align-items: center;
`

export const Title = styled.p`
    font-size: 32px;
    font-weight: 600;
`

export const StarRating = styled.p`
    font-size: 18px;
    color: ${Colors.Yellow};
    margin-top: 11px;
    margin-left: 5px;
    cursor: pointer;
`

export const GameImg = styled.img`
    width: 20vw;
    height: 30vw;
    border-radius: 5px;
    cursor: pointer;
`
export const Star = styled.img`
    margin-top: 10px;
    width: 25px;
    height: 25px;
    cursor: pointer;
`