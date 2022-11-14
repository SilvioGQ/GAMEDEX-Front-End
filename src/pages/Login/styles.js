import styled from 'styled-components'
import Colors from '../../resource/Colors';

export const Container = styled.div`
    display: flex;
    flex: 1;
    background-color: ${Colors.Black};
    height: 98vh;
`;

export const FlexRight = styled.div`
    display: flex;
    flex: 1;
    background-color: ${Colors.BlackLight};
    padding: 40px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Title = styled.h1`
    font-size: 56px;
    margin-left: 15px;
`

export const Logo = styled.img`
    width: 75px;
    height: 80px;
`

export const ConsolesImg = styled.img`
    align-self: flex-end;
    justify-self: right;
`
export const AnimationImg = styled.img`
    height: 80%;
    width: 70%;
    margin-left: -200;
`

export const FlexLeft = styled.div`
    display: flex;
    flex: 3;
    flex-direction: column;
    height: 100%;
    justify-content: flex-end;
`;