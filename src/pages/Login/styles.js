import styled from 'styled-components'
import Colors from '../../resource/Colors';

export const Container = styled.div`
    display: flex;
    flex: 1;
`;

export const FlexRight = styled.div`
    display: flex;
    flex: 1;
    background-color: ${Colors.BlackLight};
    padding: 40px;
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

export const FlexLeft = styled.div`
    display: flex;
    flex: 3;
`;