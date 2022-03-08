import styled from "styled-components";

export const CommentWrapper = styled.div `
  padding: 0 1.125rem 0 1.25rem;
`

export const CommentToolbarTitle = styled.div `
  //width: ${props => props.theme.siteVariables.commentLeftColumnWidth};
  padding-right: 0.5rem;
`

export const CommentLeftColumn = styled.div `
  width: ${props => props.theme.siteVariables.commentLeftColumnWidth};
  padding-right: 0.5rem;
`