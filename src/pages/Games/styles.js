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
    width: 98%;
    //  grid-template-columns: 4.4fr 2fr 2fr 2fr;
    grid-template-columns: 2fr 1fr;
    @media (max-width: 700px) {
        grid-template-columns: 1fr;
        grid-row-gap:15px;
    }
    grid-column-gap: 35vw;
    margin-bottom: 3vh;
    /* justify-content: space-between; */
    /* border: 1px solid black; */
`;

