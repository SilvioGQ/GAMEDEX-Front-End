import styled from 'styled-components'
import Colors from '../../resource/Colors';

export const Container = styled.div`
    flex-direction: column;
    display: flex;
    margin: 5px 15px 25px 15px;
`;

export const Title = styled.p`
    font-size: 18px;
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
    width: 200px;
    height: 250px;
    border-radius: 5px;
    cursor: pointer;
`
export const Star = styled.img`
    margin-top: 10px;
    width: 25px;
    height: 25px;
    cursor: pointer;
`