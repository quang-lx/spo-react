import styled from "styled-components";

export const MainContainerBlock = styled.div `
  width: calc(100% - ${props => props.theme.siteVariables.menuWidth});
  //height: calc(100% - ${props => props.theme.siteVariables.headerHeight});
  background-color: ${props => props.theme.siteVariables.colors.grey[50]};
`