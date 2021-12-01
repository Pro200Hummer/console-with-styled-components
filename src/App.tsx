import React from 'react';
import styled from "styled-components";
import {Title} from "./components/Title";

const AppWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 2rem;
  background-color: #000000;
`;

export const App = () => {
    return <AppWrapper>
        <Title color='green'>
            App
        </Title>
    </AppWrapper>
};
