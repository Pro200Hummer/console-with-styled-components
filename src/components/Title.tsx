import React, {FC} from 'react';
import styled from "styled-components";

interface TitleProps {
    color?: string
}

const StyledTitle = styled.h1<TitleProps>`
  color: ${props => props.color || props.theme.colors.primary};
`;

const Title: FC<TitleProps> = props => <StyledTitle {...props}/>

export default Title
