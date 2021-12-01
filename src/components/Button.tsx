import React, {FC} from 'react';
import styled, {css} from "styled-components";

interface ButtonProps {
    align?: string
    color?: string
    background?: string
    primary?: boolean
    outlined?: boolean
}

const StyledButton = styled.button<ButtonProps>`
  border: none;
  padding: 10px 15px;
  font-size: 18px;
  cursor: pointer;
  transform: scale(1);
  transition: transform 0.5s;
  align-self: ${props => props.align || 'stretch'};

  ${props => props.primary && css<ButtonProps>`
    color: ${props => props.color || 'white'};
    background: ${props => props.background || 'white'};
  `}
  ${props => props.outlined && css<ButtonProps>`
    color: ${props => props.color || 'white'};
    border: 1px solid ${props => props.color || 'white'};
    background: transparent;
  `}
  &:focus {
    outline: none;
  }
  &:hover{
    transform: scale(1.1);
  }
  &:active{
    transform: scale(1);
  }
`;

const Button: FC<ButtonProps> = props => {
    return <StyledButton {...props}/>
};

export default Button;