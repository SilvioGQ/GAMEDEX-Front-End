import styled from 'styled-components'
import Colors from '../../resource/Colors';

export const TextInput = styled.input`
    width: 100%;
    padding: 16px;
    border: 1px solid #fff;
    border-radius: 4px;
    align-self: center;
    transition: all ease 0.3s;
    border-color: ${props => props.hovering ? Colors.White : Colors.GrayLight };
    margin-bottom: 25px;
`;