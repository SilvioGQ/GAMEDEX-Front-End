import { createGlobalStyle } from "styled-components";
import Colors from "./Colors";


const GlobalStyle = createGlobalStyle`
    body {
        font-family: sans-serif;
        color: white;
        background-color: ${Colors.Black};
    }
`;

export default GlobalStyle;