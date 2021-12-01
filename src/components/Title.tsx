import React, {FC} from 'react';
import styled from "styled-components";

interface Title {
    color: string
}

const StyledTitle = styled.h1`
  color: ${props => props.color};
`;

export const Title: FC<Title> = props => <StyledTitle {...props}/>
