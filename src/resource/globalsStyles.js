import styled from "styled-components";
import Colors from "./Colors";

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

export const Row = styled.div`
    display: flex;
    flex-direction: row;
`

export const BackgroundLight = styled.div`
    display: flex;
    flex-direction: column;
    width: 93%;
    padding-left: 3%;
    padding-right: 3%;
    padding-top: 50px;
    padding-bottom: 50px;
    background-color: ${Colors.BlackLight};
    margin-top: 2vh;
    border-radius: 10px;
`;

export const RowWrap = styled.div`
    display: flex;
    flex-direction: column;
    /* flex-wrap: wrap; */
`;

export const ListGames = styled.div`
    /* width: 100%; */
    display: grid;
    grid-template-columns: 2fr 2fr 2fr 2fr 2fr;
    grid-column-gap: 3vw;
    grid-row-gap: 2vh;
    flex-wrap:wrap;
    /* justify-content: flex-start; */
`;