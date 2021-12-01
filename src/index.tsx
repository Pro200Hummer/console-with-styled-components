import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App';
import reportWebVitals from './reportWebVitals';
import {createGlobalStyle, ThemeProvider} from "styled-components";

const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Consolas, serif;
  }
`;

const theme = {
    colors: {
        primary: 'green',
        secondary: 'red'
    }
}

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <Global/>
        <App/>
    </ThemeProvider>,
    document.getElementById('root'));

reportWebVitals();
