import styled from 'styled-components'
import Colors from '../../resource/Colors';

export const Main = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 3%;
    padding-right: 3%;
    padding-top: 40px;
    padding-bottom: 40px;
    background-color: ${Colors.BlackLight};
    margin-top: 2vh;
    border-radius: 10px;
`;

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    align-items: center;

    .title {
        font-weight: bold;
        font-size: 27px;
    }

    .subtitle {
        font-size: 23px;
    }
`

export const EvidenceImg = styled.div`
    width: 30vw;
    height: 50vh;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
`;