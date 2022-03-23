import styled from "styled-components";

export const SubMenuBlock = styled.div`
  //min-width: ${props => props.theme.siteVariables.smallSubMenuWidth};
  background-color: ${props => props.theme.siteVariables.subMenuBackgroundColor};
  border-right: 1px solid ${props => props.theme.siteVariables.colors.grey[150]};
  height: 100%;
`

export const SmallSubMenuBlock = styled.div `
  width: ${props => props.theme.siteVariables.smallSubMenuWidth};
  border-right: 1px solid ${props => props.theme.siteVariables.colors.grey[150]};
  background-color: ${props => props.theme.siteVariables.colors.grey[100]};
`

export const BigSubMenuBlock = styled.div `
  width: ${props => props.theme.siteVariables.bigSubMenuWidth};
`

export const SubMenuToolbar = styled.div `
  height: ${props => props.theme.siteVariables.toolbarHeight};
  border-bottom: 1px solid ${props => props.theme.siteVariables.colors.grey[150]};
  background-color: ${props => props.theme.siteVariables.colors.grey[100]};
`

export const SubMenuToolbarContent = styled.div `
  height: ${props => props.theme.siteVariables.toolbarHeight};
`

export const SmallSubMenuToolbarInner = styled.div `
  width: ${props => props.theme.siteVariables.smallSubMenuWidth};
  border-right: 1px solid transparent;
  z-index: 0;
`

export const BigSubMenuToolbarInner = styled.div `
  width: ${props => props.theme.siteVariables.bigSubMenuWidth};
`