import styled from "styled-components";

export const SubMenuBlock = styled.div`
  min-width: ${props => props.theme.bigSubMenuWidth};
  background-color: ${props => props.theme.subMenuBackgroundColor};
  border-right: 1px solid ${props => props.theme.borderColor};
  height: 100%;
`

export const SmallSubMenuBlock = styled.div `
  width: ${props => props.theme.smallSubMenuWidth};
  border-right: 1px solid ${props => props.theme.borderColor};
  background-color: ${props => props.theme.smallSubMenuBackgroundColor};
`

export const BigSubMenuBlock = styled.div `
  width: ${props => props.theme.bigSubMenuWidth};
`

export const SubMenuToolbar = styled.div `
  height: ${props => props.theme.toolbarHeight};
  border-bottom: 1px solid ${props => props.theme.borderColor};
  background-color: ${props => props.theme.subMenuToolbarBackgroundColor};
`

export const SubMenuToolbarContent = styled.div `
  height: ${props => props.theme.toolbarHeight};
`

export const SmallSubMenuToolbarInner = styled.div `
  width: ${props => props.theme.smallSubMenuWidth};
  border-right: 1px solid transparent;
`

export const BigSubMenuToolbarInner = styled.div `
  width: ${props => props.theme.bigSubMenuWidth};
`