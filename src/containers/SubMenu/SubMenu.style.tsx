import styled from "styled-components";

export const SubMenuBlock = styled.div`
  min-width: ${props => props.theme.siteVariables.bigSubMenuWidth};
  background-color: ${props => props.theme.siteVariables.subMenuBackgroundColor};
  border-right: 1px solid ${props => props.theme.siteVariables.borderColor};
  height: 100%;
`

export const SmallSubMenuBlock = styled.div `
  width: ${props => props.theme.siteVariables.smallSubMenuWidth};
  border-right: 1px solid ${props => props.theme.siteVariables.borderColor};
  background-color: ${props => props.theme.siteVariables.smallSubMenuBackgroundColor};
`

export const BigSubMenuBlock = styled.div `
  width: ${props => props.theme.siteVariables.bigSubMenuWidth};
`

export const SubMenuToolbar = styled.div `
  height: ${props => props.theme.siteVariables.toolbarHeight};
  border-bottom: 1px solid ${props => props.theme.siteVariables.borderColor};
  background-color: ${props => props.theme.siteVariables.subMenuToolbarBackgroundColor};
`

export const SubMenuToolbarContent = styled.div `
  height: ${props => props.theme.siteVariables.toolbarHeight};
`

export const SmallSubMenuToolbarInner = styled.div `
  width: ${props => props.theme.siteVariables.smallSubMenuWidth};
  border-right: 1px solid transparent;
  z-index: 1;
`

export const BigSubMenuToolbarInner = styled.div `
  width: ${props => props.theme.siteVariables.bigSubMenuWidth};
`