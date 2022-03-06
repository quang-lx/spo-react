import styled from "styled-components";
import { Link } from 'react-router-dom'

export const AnchorLink = styled(Link)`
    color: ${props => props.theme.siteVariables.grey};
    text-decoration: underline;
    &:hover{
        color:${props => props.theme.siteVariables.grey}
    }
`