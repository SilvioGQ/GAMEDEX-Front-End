import styled from 'styled-components'
import Colors from '../../resource/Colors';

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
    background-size: cover;
    background-repeat: no-repeat;
`;