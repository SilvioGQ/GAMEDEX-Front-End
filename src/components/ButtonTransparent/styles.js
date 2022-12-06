import styled from 'styled-components'
import Colors from '../../resource/Colors'
export const Button = styled.div`
    cursor: pointer;
    background-color: ${props=> props.bgColor};
    border: 1px solid  ${props=> props.BorderColor};
    border-radius: 10px;
    width: 440px;
    margin-top: 15px;
    margin-left:35px;
`
export const Text = styled.p`
    text-align: center;
    font-size: 14px;
    font-weight: 600;
`