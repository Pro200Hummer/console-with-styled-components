import React, {FC} from 'react';
import styled from "styled-components";

interface LineProps {
    color?: string
}

const StyledLine = styled.div<LineProps>`
  font-size: 24px;
  color: ${props => props.color || props.theme.colors.primary};
`;

const Line: FC<LineProps> = props => <StyledLine {...props}/>

export default Line;