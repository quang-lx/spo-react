import {createGlobalStyle} from 'styled-components';
import {ThemeType} from './theme';

export default createGlobalStyle<{ theme: ThemeType }>`
  html {
    height: 100%;
    overflow: hidden;
    font-size: 16px;
    line-height: 1.15;
  }

  body {
    height: 100%;
    overflow: hidden;
    font-size: 1rem * 0.875;
    line-height: 1.4286;
    transition: .44s, .22s, ease-out, opacity;
  }

  #root {
    height: 100%;
    overflow: hidden;
  }

  .ui-provider {
    height: 100%;
    overflow: hidden;
  }

  .text-secondary {
    color: ${({theme}) => theme.siteVariables.secondaryColor};
  }
  .text-black {
    color: ${({theme}) => theme.siteVariables.blackColor};
  }
  .text-transparent {
    color: transparent;
  }

  .list-auto-height {
    .ui-list__item {
      height: auto;
      min-height: unset;
    }
  }

  .small-sub-menu {
    .ui-tree {
      &__item {
        width: calc(100% - 0.5rem);
        margin: 0 0.25rem;
        border-radius: 4px;
        
        &.active {
          .ui-tree__title {
            background-color: ${({theme}) => theme.siteVariables.smallSubMenuItemHoveredBackgroundColor};
            color: ${({theme}) => theme.siteVariables.smallSubMenuItemHoveredTextColor};

            button {
              color: ${({theme}) => theme.siteVariables.smallSubMenuItemHoveredTextColor};
              
              .ui-icon__outline {
                display: none;
              }
              .ui-icon__filled {
                display: block;
              }
            }
          }
        }
      }

      &__title {
        padding-left: 0.5rem;
        padding-right: 0.5rem;
        width: 100%;
        margin: 0;
        min-height: 2rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        color: ${({theme}) => theme.siteVariables.secondaryColor};
        button {
          color: ${({theme}) => theme.siteVariables.secondaryColor};
          transition: none;
        }

        &:hover {
          background-color: ${({theme}) => theme.siteVariables.smallSubMenuItemHoveredBackgroundColor};
          color: ${({theme}) => theme.siteVariables.smallSubMenuItemHoveredTextColor};
          
          button {
            color: ${({theme}) => theme.siteVariables.smallSubMenuItemHoveredTextColor};
          }
        }
      }
    }

    .tree-item-parent-node:not(:first-child) {
      margin-top: 1rem;
    }
  }
  
  .big-sub-menu {
    .ui-list {
      &__itemendmedia {
        position: absolute;
        right: 0;
        display: block;
      }
      
      &__item {
        position: relative;
        border-bottom: 1px solid ${({theme}) => theme.siteVariables.borderColor};
        padding: 0.5rem 2rem 0.5rem 0.75rem;
        
        &:hover {
          .ui-list__itemheadermedia {
            width: auto;
            height: auto;
            position: static;
            margin: 0;
          }
        }
        
        &.unseen {
          &::before {
            content: "";
            position: absolute;
            height: 100%;
            width: 0.25rem;
            top: 0;
            left: 0;
            background-color: ${({theme}) => theme.siteVariables.mainColor};
          }
        }
      }
    }
  }
  
  .cursor-pointer {
    cursor: pointer;
  }
  
  .custom-popup {
    &__wrapper {
      margin: -0.5rem -1rem;
    }
    &__item {
      padding: 0 0.5rem;
      
      &:hover {
        background-color: ${({theme}) => theme.siteVariables.bigSubMenuItemHoveredBackgroundColor};
      }
    }
  }
  
  .reserve-flex-width {
    flex: 0 0 auto;
  }
  
  .test-color {
    color: ${({theme}) => theme.siteVariables.borderColor};
  }
`
