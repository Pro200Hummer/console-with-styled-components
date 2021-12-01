import React from 'react';
import styled from "styled-components";
import Title from "./components/Title";
import Flex from "./components/Flex";
import Console from './components/Console';

const AppWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 2rem;
  background-color: #000000;
`;

export const App = () => {
    return <AppWrapper>
        <Flex justify='center'>
            <Title color='green'>Console with styled components</Title>
        </Flex>
        <Console color='green'/>
    </AppWrapper>
};
