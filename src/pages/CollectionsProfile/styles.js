import styled from 'styled-components'
import Colors from '../../resource/Colors';

export const CollectorMargin = styled.div`
    flex-direction: row;
    display: flex;
    padding: 16px;
    cursor: pointer;
    border-radius: 4px;
    margin: 5px 15px 25px 15px;
`;

export const Title = styled.h1`
font-size: 32px;
font-weight: 600;
`
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    /* width: 100%; */
    /* height: 100vh; */
    justify-content: flex-start;
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
`

export const StarRating = styled.p`
    font-size: 18px;
    color: ${Colors.Yellow};
    margin-top: 11px;
    margin-left: 5px;
    cursor: pointer;
`

export const Joystick = styled.p`
    font-size: 18px;
    margin-top: 11px;
    margin-left: 5px;
    cursor: pointer;
`

export const Profile = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 50px;
`
export const Star = styled.img`
    margin-top: 10px;
    margin-right: 3px;
    margin-left: 10px;
    width: 25px;
    height: 25px;
`
