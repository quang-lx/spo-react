import styled from "styled-components";
import { Button, Avatar } from '@fluentui/react-northstar';

export const HeaderBlock = styled.div `
  height: ${props => props.theme.headerHeight};
  background-color: ${props => props.theme.headerBackgroundColor};
`

export const HeaderWrapper = styled.div `
  height: ${props => props.theme.headerHeight};
`

export const ProfileBlock = styled.div `
  min-width: ${props => props.theme.profileBlockMinWidth};
`

export const ActionButton = styled(Button) `
  padding: 0.875rem;
  height: auto;
  border-radius: 0;
  
  &:hover {
    background-color: ${props => props.theme.headerItemHoveredBackgroundColor};
  }
`

export const HeaderAvatar = styled(Avatar) `
  padding: 0.5rem;
  height: auto;
  width: auto;
  cursor: pointer;

  &:hover {
    background-color: ${props => props.theme.headerItemHoveredBackgroundColor};
  }
`

export const ProfilePopupContent = styled.div `
  width: ${props => props.theme.profilePopupWidth};
  margin: 0 -1rem -0.8rem;
`

export const LogoWrapper = styled.div `
  width: calc(${props => props.theme.menuWidth} + ${props => props.theme.smallSubMenuWidth});
`