import styled from 'styled-components'
import Colors from '../../resource/Colors';

export const RowBetween = styled.div`
    margin: 20px;
    display: flex;
    justify-content: space-between;
`;

export const DivAll = styled.div`
    display: flex; 
    height: 80vh;

    @media (max-width: 700px) {
        flex-direction: column;
        align-items: center;
    }
`;
export const DivAll2 = styled.div`
    width: 100%;
    height: 80vh;
    margin-left: 50px;
    @media (max-width: 700px) {
        margin-left: 20px;
    }
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
export const StarPng = styled.img`
    height:50px;
    width:50px;
`

export const StarDiv = styled.div`
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    width: fit-content;
    height: fit-content;
    padding-left: .7vw;
    padding-right: .7vw;
`

export const Genres = styled.div`
    display: flex;
    width: 100%;
    gap: 1vw;
    flex-wrap: wrap;
`


export const Evidence = styled.div`
    display: flex;
    width: 100%;
    height: 45vh;
    border-radius: 5px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    background-color: ${Colors.Black};
    margin-top: 2vh;
    margin-bottom: 3vh;
    @media (max-width: 700px) {
        width: 95%;
        height:220px;
    }
`;

export const Genre = styled.p`
    font-size: 12px;
    font-weight: 600;
`

export const StarP = styled.p`
    font-size: 14px;
    font-weight: 700;
`

export const Title = styled.p`
    font-size: 43px;
    font-weight: 600;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    display: flex;
    align-items: center;

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
        width: 40px;
        height: 40px;
        margin-right: 10px;
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
    width: 50%;
    height: 100%;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 5px;
    cursor: pointer;

    @media (max-width: 700px) {
        width: 100%;
        height: 260px;
    }
`
export const Star = styled.img`
    margin-top: 10px;
    width: 25px;
    height: 25px;
    cursor: pointer;
`