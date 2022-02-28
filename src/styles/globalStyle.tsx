import { createGlobalStyle } from 'styled-components';
import { ThemeType } from './theme';

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
    background-color: #ccc;
    font-size: 1rem * 0.875;
    line-height: 1.4286;
    transition: .44s,.22s,ease-out,opacity;
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
    color: ${({ theme }) => theme.secondaryColor};
  }
  .list-auto-height {
    .ui-list__item {
      height: auto;
      min-height: unset;
    }
  }
`
