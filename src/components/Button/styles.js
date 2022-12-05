import styled from 'styled-components'
import Colors from '../../resource/Colors'

export const ButtonContainer = styled.button`
    display: flex;
    width: 204px;
    height: 45.66px;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.styleType == "next" ? Colors.Purple : Colors.Black};
    align-self: center;
    border: 1px solid transparent;
    border-radius: 10px;
    cursor: pointer;
`
export const Text = styled.p`
    text-align: center;
    font-size: 16px;
    align-self: center;
    /* padding: 16px; */
`