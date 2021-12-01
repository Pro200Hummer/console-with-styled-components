import React, {KeyboardEvent, useState} from 'react';
import styled from "styled-components";
import Title from "./components/Title";
import Flex from "./components/Flex";
import Console from './components/Console';
import Button from "./components/Button";

const AppWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 2rem;
  background-color: #000000;
`;

export const App = () => {
    const [lines, setLines] = useState<string[]>(['C/users/user>']);

    const onKeyPressHandler = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if(e.key === "Enter"){
            setLines([...lines, 'C/users/user>'])
        }
    }

    return <AppWrapper>
        <Flex justify='center'>
            <Title>Console imitation with styled components</Title>
        </Flex>
        <Flex direction='column'>
            <Console lines={lines} onKeyPressHandler={onKeyPressHandler}/>
            <Button outlined align='flex-end'>
                Send
            </Button>
        </Flex>
    </AppWrapper>
};
