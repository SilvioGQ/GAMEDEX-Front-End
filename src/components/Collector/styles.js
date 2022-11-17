import styled from 'styled-components'
import Colors from '../../resource/Colors';

export const Container = styled.div`
    flex-direction: row;
    display: flex;
    padding: 16px;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    background-color: ${Colors.Black};
    border-radius: 4px;
    width: 270px;
    margin: 5px 15px 25px 15px;
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
