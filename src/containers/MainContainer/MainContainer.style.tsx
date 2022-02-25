import styled from "styled-components";

export const MainContainerBlock = styled.div `
  width: calc(100% - ${props => props.theme.menuWidth});
  height: calc(100% - ${props => props.theme.headerHeight});
  background-color: aliceblue;
`