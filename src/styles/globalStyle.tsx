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
  
  .unset-width {
    min-width: unset;
    width: auto;
  }

  .unset-height {
    min-height: unset;
    height: auto;
  }
  
  .layout-inner-full-height {
    .ui-layout__main {
      height: 100%;
    }
    .ui-layout__end {
      height: 100%;
    }
  }
  
  .text-pre-wrap {
    white-space: pre-wrap;
  }
  
  .comment-reply {
    .ui-accordion__content {
      margin-inline-start: 0;
    }
    .ui-chat {
      background-color: ${({theme}) => theme.siteVariables.commentReplyBackgroundColor};
      padding-left: 1rem;
      padding-right: 0;
    }
    .ui-chat__item {
      padding-top: 0;
    }
    .ui-box {
      margin-right: 0;
      //overflow: hidden;
      //white-space: nowrap;
      //text-overflow: ellipsis;
    }
    .ui-chat__message {
      margin-right: 0;
      background-color: transparent;
      max-width: unset;
    }
    .ui-chat__message__bar {
      left: -3.5rem;
    }
    .ui-accordion__title__content-wrapper {
      overflow: hidden;
      
      .ui-box {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
    }
  }
  
  .comment-item {
    .ui-chat__message {
      margin-right: 0;
      max-width: unset;
    }
  }
  
  .comment-input {
    .e-control {
      font-family: ${({theme}) => theme.siteVariables.bodyFontFamily};
    }
    .e-richtexteditor {
      border: none !important;
      //.e-toolbar-wrapper {
      //  height: 2rem !important;
      //}

      .e-toolbar {
        min-height: 2rem !important;

        .e-hor-nav {
          width: 2rem;
          min-height: 2rem;
          height: 2rem;
          border-top-right-radius: 4px;
        }
      }

      .e-toolbar-items {
        min-height: 2rem !important;
        height: 2rem !important;
        border-top-left-radius: 4px;
      }

      .e-toolbar-item {
        &:not(.e-separator) {
          min-width: 2rem !important;
          min-height: 2rem !important;

          .e-tbar-btn {
            min-height: 2rem !important;
            min-width: 2rem !important;
          }
        }

        &.e-separator {
          margin-top: 0 !important;
          margin-bottom: 0 !important;
        }
      }

      .e-rte-content {
        border-bottom: none;
      }
    }
    .e-rte-inline-dropdown .e-rte-color-content .e-rte-elements {
      line-height: inherit;
    }

    .e-richtexteditor .e-rte-toolbar .e-toolbar-item .e-icons {
      color: ${({theme}) => theme.siteVariables.bodyColor}; 
    }

    .ui-attachment {
      width: calc(100% - 0.25rem);
      box-shadow: none;
      margin-bottom: 0.25rem;
    }
    .ui-attachment__body {
      overflow: hidden;
    }
    .ui-attachment__header {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
`
