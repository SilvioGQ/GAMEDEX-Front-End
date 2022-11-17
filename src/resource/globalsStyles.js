import styled from "styled-components";
import Colors from "./Colors";

export const Row = styled.div`
    display: flex;
    flex-direction: row;
`

export const BackgroundLight = styled.div`
    display: flex;
    flex-direction: column;
    padding: 50px;
    background-color: ${Colors.BlackLight};
    margin: 35px 100px 50px 100px;
    border-radius: 10px;
`;

export const RowWrap = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

export const ListGames = styled.div`
    width: 100%;
    display:flex;
    flex-wrap:wrap;
    justify-content:center;
`;