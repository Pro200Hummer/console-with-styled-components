import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App';
import reportWebVitals from './reportWebVitals';
import {createGlobalStyle} from "styled-components";

const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Consolas, serif;
  }
`;

ReactDOM.render(
    <>
        <Global/>
        <App/>
    </>,
    document.getElementById('root'));

reportWebVitals();
