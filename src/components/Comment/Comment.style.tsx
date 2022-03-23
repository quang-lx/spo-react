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

export const CommentInputBoxInner = styled.div`
  border-radius: 4px;
  border: 1px solid ${props => props.theme.siteVariables.naturalColors.grey[200]};
  background-color: white;
`

export const CommentInputBoxWrapper = styled.div`
  width: calc(100% - 2.5rem);
`

export const ReplyCommentWrapper = styled.div`
  background-color: white;
  border-top: 1px solid ${props => props.theme.siteVariables.colors.grey[150]};
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
`

export const CommentInputAttachmentWrapper = styled.div `
  padding: 1rem 1rem 0.75rem 1rem;
`