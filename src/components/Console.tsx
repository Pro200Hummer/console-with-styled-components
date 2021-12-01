import React, {FC, KeyboardEvent} from 'react';
import styled from "styled-components";
import Flex from "./Flex";
import Line from "./Line";

interface ConsoleProps {
    lines: string[]
    onKeyPressHandler: (e: KeyboardEvent<HTMLTextAreaElement>) => void
    color?: string
}

const StyledConsole = styled.textarea<ConsoleProps>`
  width: 100%;
  height: 70vh;
  font-size: 24px;
  margin-top: 5px;
  background: #000000;
  border: none;
  resize: none;
  color: ${props => props.color || 'white'};

  &:focus {
    outline: none;
  }
`;

const Console: FC<ConsoleProps> = props => {
    return (
        <Flex>
            <Flex direction='column' margin='5px'>
                {props.lines.map(line => <Line color={props.color}>{line}</Line>)}
            </Flex>
            <StyledConsole onKeyPress={props.onKeyPressHandler} {...props}/>
        </Flex>
    )
}

export default Console;