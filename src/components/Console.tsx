import React, {FC} from 'react';
import styled from "styled-components";

interface ConsoleProps {
    color?: string
}

const StyledConsole = styled.textarea<ConsoleProps>`
  width: 100%;
  height: 70vh;
  font-size: 24px;
  margin-top: 30px;
  background: #000000;
  border: none;
  resize: none;
  color: ${props => props.color || 'white'};

  &:focus {
    outline: none;
  }
`;

const Console: FC<ConsoleProps> = props => <StyledConsole {...props}/>

export default Console;