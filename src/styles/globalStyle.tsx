import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  html {
    height: 100%;
    overflow: hidden;
    font-size: calc(1em * .625);
  }
  body {
    height: 100%;
    overflow: hidden;
    background-color: #ccc;
    font-size: 1.4rem;
    line-height: 1.4286;
    transition: .44s,.22s,ease-out,opacity;
  }
`
