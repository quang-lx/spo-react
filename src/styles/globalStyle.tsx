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
    color: ${({theme}) => theme.secondaryColor};
  }
  .text-black {
    color: ${({theme}) => theme.blackColor};
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
        color: ${({theme}) => theme.secondaryColor};
        button {
          color: ${({theme}) => theme.secondaryColor};
          transition: none;
        }

        &:hover {
          background-color: ${({theme}) => theme.smallSubMenuItemHoverBackgroundColor};
          color: ${({theme}) => theme.smallSubMenuItemHoverTextColor};
          
          button {
            color: ${({theme}) => theme.smallSubMenuItemHoverTextColor};
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
      &__item {
        position: relative;
        border-bottom: 1px solid ${({theme}) => theme.borderColor};
        padding: 0.5rem 0.75rem;
        
        &.unseen {
          &::before {
            content: "";
            position: absolute;
            height: 100%;
            width: 0.25rem;
            top: 0;
            left: 0;
            background-color: ${({theme}) => theme.mainColor};
          }
        }
      }
    }
  }
`
