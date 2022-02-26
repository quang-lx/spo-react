import styled from "styled-components";
import { Button, Avatar, Popup } from '@fluentui/react-northstar';

export const HeaderBlock = styled.div `
  height: ${props => props.theme.headerHeight};
  background-color: ${props => props.theme.mainColor};
`

export const HeaderWrapper = styled.div `
  height: ${props => props.theme.headerHeight};
`

export const ProfileBlock = styled.div ``

export const ActionButton = styled(Button) `
  padding: 0.875rem;
  height: auto;
  border-radius: 0;
  
  &:hover {
    background-color: ${props => props.theme.mainColorHovered};
  }
`

export const HeaderAvatar = styled(Avatar) `
  padding: 0.5rem;
  height: auto;
  width: auto;
  cursor: pointer;

  &:hover {
    background-color: ${props => props.theme.mainColorHovered};
  }
`

export const ProfilePopupContent = styled.div `
  width: ${props => props.theme.profilePopupWidth};
`