import styled from "styled-components";

export const HeaderBlock = styled.div `
  height: ${props => props.theme.headerHeight};
  background-color: ${props => props.theme.mainColor};
`

export const HeaderWrapper = styled.div `
  height: ${props => props.theme.headerHeight};
`