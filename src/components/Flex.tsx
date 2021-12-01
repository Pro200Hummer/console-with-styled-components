import React, {FC} from 'react';
import styled from "styled-components";

interface FlexProps {
    direction?: string
    align?: string
    justify?: string
    margin?: string
}

const StyledFlex = styled.div<FlexProps>`
  display: flex;
  flex-direction: ${props => props.direction || 'row'};
  align-items: ${props => props.align || 'stretch'};
  justify-content: ${props => props.justify || 'stretch'};
  margin: ${props => props.margin || '0'};
`;

const Flex: FC<FlexProps> = props => {
    return <StyledFlex {...props}/>
};

export default Flex;