import styled from 'styled-components'
import Colors from '../../resource/Colors';

export const Title = styled.h1`
font-size: 32px;
font-weight: 600;
margin-top: 6px;
`
export const RowBetween = styled.div`
    display: flex;
    justify-content: space-between;
    width: 96%;
    align-items: center;
    @media (max-width: 800px) {
        flex-direction: column;
        align-items: flex-start;
    }
`;
export const CollectorMargin = styled.div`
    flex-direction: column;
    display: flex;
    padding: 16px;
    border-radius: 4px;
    margin: 5px 15px 25px 15px;
    align-items: center;
    align-self: center;

    label {
        cursor: pointer;
    }

    input#avatar {
        display: none;
    }
`;
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    /* width: 100%; */
    /* height: 100vh; */
    justify-content: center;
    align-items: center;
    padding-left: 5vw;
    padding-right: 5vw;
    padding-top: 3vh;
`;

export const RowWrap = styled.div`
    display: flex;
    flex-wrap: wrap;
`;
export const UserName = styled.p`
    font-size: 18px;
    font-weight: 600;
    margin-left: 13px;
    align-self: center;
`

export const StarRating = styled.p`
    font-size: 18px;
    color: ${Colors.Yellow};
    margin-top: 11px;
    margin-left: 5px;
    cursor: pointer;
`

export const Text = styled.p`
    font-size: 18px;
    margin-top: 11px;
    margin-left: 5px;
    cursor: pointer;
`

export const ProfileImg = styled.div`
    width: 100px;
    height: 100px;
    background-position: center;
    background-size: cover;
    border-radius: 50px;
    align-self: center;
`
export const Star = styled.img`
    margin-top: 10px;
    margin-right: 3px;
    margin-left: 10px;
    width: 25px;
    height: 25px;
`