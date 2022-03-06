import styled from "styled-components";

export const ContainerBlock = styled.div `
  background-color: ${props => props.theme.siteVariables.headerHeight};
  height: 100%;
`
export const ContainerContent = styled.div`
  height: 100%;
`

export const ContainerToolbarWrapper = styled.div`
  height: ${props => props.theme.siteVariables.toolbarHeight};
  border-bottom: 1px solid ${props => props.theme.siteVariables.borderColor};
  background-color: ${props => props.theme.siteVariables.containerToolbarBackgroundColor};
`

export const ContainerToolbarInner = styled.div`
  height: ${props => props.theme.siteVariables.toolbarHeight};
`