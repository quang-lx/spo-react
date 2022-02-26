import styled from "styled-components";

export const MenuBlock = styled.div`
  width: ${props => props.theme.menuWidth};
  //height: calc(100% - ${props => props.theme.headerHeight});
  background-color: ${props => props.theme.menuBackgroundColor};
  
  .app-menu {
    position: relative;
    
    &::before {
      background: linear-gradient(to right,transparent,#aaa);
      content: "";
      height: 100%;
      opacity: .2;
      pointer-events: none;
      position: absolute;
      right: 0;
      width: .8rem;
      z-index: 2;
    }
  }
`