import styled from "styled-components";
import { Button } from '@fluentui/react-northstar';

export const HeaderBlock = styled.div `
  height: ${props => props.theme.siteVariables.headerHeight};
  background-color: ${props => props.theme.siteVariables.colors.brand[600]};
`

export const HeaderWrapper = styled.div `
  height: ${props => props.theme.siteVariables.headerHeight};
`

export const ProfileBlock = styled.div `
  min-width: ${props => props.theme.siteVariables.profileBlockMinWidth};
`

export const ActionButton = styled(Button) `
  padding: 0.875rem;
  height: auto;
  border-radius: 0;
  
  &:hover {
    background-color: ${props => props.theme.siteVariables.colors.brand[800]};
  }
`

export const HeaderAvatarWrapper = styled.div `
  padding: 0.5rem;
  height: auto;
  width: auto;
  //max-height: 2rem;
  //max-width: 2rem;
  cursor: pointer;

  &:hover {
    background-color: ${props => props.theme.siteVariables.colors.brand[800]};
  }
`

export const ProfilePopupContent = styled.div `
  width: ${props => props.theme.siteVariables.profilePopupWidth};
  margin: 0 -1rem -0.8rem;
`

export const LogoWrapper = styled.div `
  width: calc(${props => props.theme.siteVariables.menuWidth} + ${props => props.theme.siteVariables.smallSubMenuWidth});
`

export const SearchBarWrapper = styled.div `
  max-width: ${props => props.theme.siteVariables.bigSubMenuWidth};
`