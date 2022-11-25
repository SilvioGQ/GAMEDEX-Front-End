import styled from 'styled-components'
import Colors from '../../resource/Colors';

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

export const RowBetween = styled.div`
    display: grid;
    width: 100%;
    grid-template-columns: 4.4fr 2fr 2fr 2fr;
    grid-column-gap: 3vw;
    margin-bottom: 3vh;
    /* justify-content: space-between; */
    /* border: 1px solid black; */
`;

