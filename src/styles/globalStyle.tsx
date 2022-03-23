import styled, {createGlobalStyle} from 'styled-components';
import {ThemeType} from './theme';
import {SmallSubMenuToolbarInner} from "../containers/SubMenu/SubMenu.style"

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
            background-color: ${({theme}) => theme.siteVariables.colors.brand[300]};
            color: ${({theme}) => theme.siteVariables.colors.brand[800]};

            button {
              color: ${({theme}) => theme.siteVariables.colors.brand[800]};
              
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
          background-color: ${({theme}) => theme.siteVariables.colors.brand[300]};
          color: ${({theme}) => theme.siteVariables.colors.brand[800]};
          
          button {
            color: ${({theme}) => theme.siteVariables.colors.brand[800]};
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
        border-bottom: 1px solid ${({theme}) => theme.siteVariables.colors.grey[150]};
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
            background-color: ${({theme}) => theme.siteVariables.colors.brand[600]};
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

  .tribute-container {
    position: absolute;
    top: 0;
    left: 0;
    height: auto;
    max-height: 21.875rem;
    max-width: 25rem;
    min-width: 18.75rem;
    overflow-x: hidden;
    overflow-y: auto;
    display: block;
    z-index: 999999;
    margin: 2px 0 0 0;
    padding: 0 0.125rem;
    border-radius: 4px;
    background: white;
    box-shadow: ${({theme}) => theme.siteVariables.shadow16};

    ul {
      list-style: none;
      padding: 0;
      margin: 0;
      
      li {
        padding: 0.5rem 1rem;
        cursor: pointer;
        border-radius: 4px;
        
        &.highlight {
          background: ${({theme}) => theme.siteVariables.mentionHoveredBackground};
        }
        
        &.no-match {
          cursor: default;
        }
        
        &:first-child {
          margin-top: 0.5rem;
        }
        
        &:last-child {
          margin-bottom: 0.5rem;
        }

        span {

        }
        
        .mention {
          &__item {
            display: flex;
            align-items: center;
          }
          &__itemmedia {
            img {
              width: 2rem;
              height: 2rem;
              border-radius: 9999px;
              margin-right: 0.75rem;
            }
          }
          &__item__main {
            display: flex;
            flex-direction: column;
            flex-grow: 1
          }
          &__itemcontent {
            font-size: 0.75rem;
          }
          &__itemheader {
            margin-bottom: -0.25rem;
            span {
              font-weight: 700;
            }
          }
        }
      }
    }

    .menu-highlighted {

    }
  }
  
  .comment-history {
    background-color: transparent;
    border: none;
  }
  
  .text-mention {
    color: ${({theme}) => theme.siteVariables.colors.brand[600]};
  }
  
  #document-editor_editor_viewerContainer {
    scrollbar-color: ${({theme}) => theme.siteVariables.naturalColors.grey[200]} transparent !important;
    scrollbar-width: thin !important;
  }
  #document-editor {
    .e-de-ctnr-properties-pane {
      border-top: 0;
    }
  }
  
  .big-sub-menu {
    .ui-list__item__main {
      .ui-list__itemheader {
        .ui-icon svg {
          margin-top: -1px;
        }
      }
      .ui-list__itemheadermedia {
        .ui-icon svg {
          margin-top: -0.25rem;
        }
      }
      .ui-list__itemcontent {
        .ui-icon svg {
          margin-top: -0.25rem;
        }
      }
    }
  }
  
  .sub-menu-block {
    &:not(.active-small-sub-menu) {
      .small-sub-menu-toolbar-inner {
        width: 0;
        z-index: 1;
      }
      .small-sub-menu-block {
        width: 0;
      }
      .big-sub-menu-toolbar-title {
        display: none;
      }
    }
  }
  .big-sub-menu-toolbar {
    .big-sub-menu-toolbar-sort {
      .ui-menu__item {
        &:not(.active) {
          .ui-menu__itemicon {
            color: transparent;
          }
        }
      }
    }
  }
  .request-detail-title {
    .ui-text {
      background-color: ${({theme}) => theme.siteVariables.colorScheme.brand.background6};
      padding: 0.25rem 0.625em;
      border-radius: 1px;
      display: inline-block;
    }
    .request-detail-title-icon {
      background-color: ${({theme}) => theme.siteVariables.colors.brand[600]};
      svg {
        margin-top: -4px;
      }
    }
  }
  
  .request-description {
    word-wrap: break-word;
    white-space: pre-wrap;
  }
  
  .fit-content {
    height: fit-content !important;
    width: fit-content !important;
  }
`
