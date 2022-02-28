import styled from "styled-components";

export const SubMenuBlock = styled.div`
  min-width: ${props => props.theme.bigSubMenuWidth};
  background-color: ${props => props.theme.subMenuBackgroundColor};
  border-right: 1px solid ${props => props.theme.borderColor};
`

export const SmallSubMenuBlock = styled.div `
  width: ${props => props.theme.smallSubMenuWidth};
  border-right: 1px solid ${props => props.theme.borderColor};
  background-color: ${props => props.theme.smallSubMenuBackgroundColor};
`

export const BigSubMenuBlock = styled.div `
  width: ${props => props.theme.bigSubMenuWidth};
`

export const SubMenuButtonsBlock = styled.div `
  height: ${props => props.theme.buttonsBlockHeight};
  border-bottom: 1px solid ${props => props.theme.borderColor};
  background-color: ${props => props.theme.subMenuButtonsBlockBackgroundColor};
`

export const SubMenuButtonsBlockContent = styled.div `
  height: ${props => props.theme.buttonsBlockHeight};
`

export const SmallSubMenuButtonsBlock = styled.div `
  width: ${props => props.theme.smallSubMenuWidth};
  border-right: 1px solid transparent;
`

export const BigSubMenuButtonsBlock = styled.div `
  width: ${props => props.theme.bigSubMenuWidth};
`