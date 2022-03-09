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

export const CommentInputBoxWrapper = styled.div`
  border-radius: 4px;
  border: 1px solid ${props => props.theme.siteVariables.naturalColors.grey[400]};
`

export const ReplyCommentWrapper = styled.div`
  background-color: white;
  border-top: 1px solid ${props => props.theme.siteVariables.borderColor};
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
`