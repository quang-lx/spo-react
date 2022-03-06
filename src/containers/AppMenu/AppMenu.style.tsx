import styled from "styled-components";

export const MenuBlock = styled.div`
  width: ${props => props.theme.siteVariables.menuWidth};
  //height: calc(100% - ${props => props.theme.siteVariables.headerHeight});
  background-color: ${props => props.theme.siteVariables.menuBackgroundColor};
  border-right: 1px solid ${props => props.theme.siteVariables.borderColor};
  
  .app-menu {
    //position: relative;
    //
    //&::before {
    //  background: linear-gradient(to right,transparent,#aaa);
    //  content: "";
    //  height: 100%;
    //  opacity: .2;
    //  pointer-events: none;
    //  position: absolute;
    //  right: 0;
    //  width: .8rem;
    //  z-index: 2;
    //}
    .ui-menu {
      &__itemwrapper {
        padding: 4px 0;
        border: 0;
      }
      &__item {
        margin: 0;
        padding-left: 0;
        padding-right: 0;
        border: 0
      }
      &__itemcontent {
        margin-right: 0;
      }
    }
  }
`