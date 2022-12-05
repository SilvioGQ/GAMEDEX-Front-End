import styled from 'styled-components'

export const Title = styled.h1`
font-size: 32px;
font-weight: 600;
margin-top: 6px;
`
export const RowBetween = styled.div`
    display: flex;
    justify-content: space-between;
    width: 96%;
    align-items: center;
    @media (max-width: 800px) {
        flex-direction: column;
        align-items: flex-start;
    }
`;