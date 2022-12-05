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
    padding-top: 2vh;
`;

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    /* width: 100%;
    justify-content: space-between;
    align-items: center; */

    /* .title {
        font-weight: bold;
        font-size: 27px;
    } */

    /* .subtitle {
        font-size: 23px;
    } */
`

export const RowPointer = styled.div`
    display: flex;
    flex-direction: row;
    cursor: pointer;
    /* width: 100%;
    justify-content: space-between;
    align-items: center; */

    /* .title {
        font-weight: bold;
        font-size: 27px;
    } */

    /* .subtitle {
        font-size: 23px;
    } */
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
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    @media (max-width: 1700px) {
        grid-template-columns: 1fr 1fr 1fr 1fr;
    }
    @media (max-width: 1300px) {
        grid-template-columns: 1fr 1fr 1fr;
    }
    @media (max-width: 900px) {
        grid-template-columns: 1fr 1fr;
    }
    @media (max-width: 600px) {
        grid-template-columns: 1fr;
    }
    grid-column-gap: 3vw;
    grid-row-gap: 2vh;
    /* justify-content: flex-start; */
`;

export const ListGamesFlex = styled.div`
    /* width: 100%; */
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    margin-top: 35px;
    @media (max-width: 1700px) {
        grid-template-columns: 1fr 1fr 1fr;
    }
    @media (max-width: 1300px) {
        grid-template-columns: 1fr 1fr;
    }
    @media (max-width: 750px) {
        grid-template-columns: 1fr;
    }
    grid-column-gap: 4vw;
    grid-row-gap: 3vh;
`;