import styled from 'styled-components'
import Colors from '../../resource/Colors';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    /* margin: 5px 15px 25px 15px; */
`;

export const Genre = styled.p`
    font-size: 12px;
    font-weight: 600;
`

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
    width: 230px;
    gap: 1vw;
    flex-wrap: wrap;
`

export const Title = styled.p`
    width: 230px;
    font-size: 14px;
    font-weight: 600;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    display: flex;
    align-items: center;
    /* border: 1px solid black; */

    .stars, .noStars {
        margin-right: 10px;
    }

    .stars {
        color: ${Colors.Yellow};
    }

    .noStars {
        color:  ${Colors.Gray}
    }

    .starIcon {
        width: 30px;
        height: 30px;
        margin-right: 5px;
    }
`

export const StarRating = styled.p`
    font-size: 18px;
    color: ${Colors.Yellow};
    margin-top: 11px;
    margin-left: 5px;
    cursor: pointer;
`

export const GameImg = styled.div`
    width: 230px;
    height: 250px;
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