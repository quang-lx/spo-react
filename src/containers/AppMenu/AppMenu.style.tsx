import styled from "styled-components";

export const MenuBlock = styled.div`
  width: ${props => props.theme.siteVariables.menuWidth};
  //height: calc(100% - ${props => props.theme.siteVariables.headerHeight});
  background-color: ${props => props.theme.siteVariables.menuBackgroundColor};
  border-right: 1px solid ${props => props.theme.siteVariables.colors.grey[150]};
  
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
        padding: 4px 0 4px 4px;
        border: 0;
      }
      &__item {
        margin: 0;
        padding: 0;
        width: 100%;
        height: 2.25rem;
        border-left: 2px solid transparent;
        
        .ui-menu__itemicon {
          height: 100%;
          width: 100%;
        }
        
        .ui-icon {
          text-align: center;
          align-items: center;
          display: flex;
          
          svg {
            margin: auto;
          }
        }
        
        &.active {
          border-left-color: ${props => props.theme.siteVariables.colors.brand[600]};
        }
      }
      &__itemcontent {
        margin-right: 0;
      }
    }
  }
`