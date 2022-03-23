import styled from 'styled-components';
import {Segment, Label} from "@fluentui/react-northstar";

export const ContentWrapper = styled.div `
  //background-color: white;
  border-top: 1px solid ${props => props.theme.siteVariables.colors.grey[150]};
  height: 100%;
`

export const AdditionInfo = styled.div `
  width: ${props => props.theme.siteVariables.rightBarWidth};
  //background-color: beige;
  //height: 3000px;
  border-left: 1px solid ${props => props.theme.siteVariables.colors.grey[150]};
  padding: 0.5rem 0 0.5rem;
  height: 100%;
`
export const Content = styled.div `
  padding: 0.5rem 0;
  //background-color: olive;
  height: 100%;
  //background: ${props => props.theme.siteVariables.colors.grey[100]};
`

export const ContentInner = styled.div `
  width: 210mm;
  max-width: 100%;
  margin-right: auto;
  margin-left: auto;
`

export const AdditionInfoInner = styled.div `
  
`

export const DocumentWrapper = styled.div `
  padding: 0 1.125rem 0 1.25rem;
  margin-bottom: 4rem;
`

export const FollowerWrapper = styled.div `
  padding: 0 1.125rem 0 1.25rem;
`

export const RequestContentWrapper = styled.div `
  padding: 0 1.125rem 0 1.25rem;
  margin-bottom: 3rem;
`

export const RequestContentInner = styled(Segment) `
  padding: 1.67rem 2.5rem;
  color: ${props => props.theme.siteVariables.colors.grey[750]}
  
`

export const RequestDetailTitle = styled.div `
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
`

export const DetailItemTitle = styled.div `
  width: 10rem;
  font-weight: 600;
`

export const DetailItemContent = styled.div `
  max-width: calc(100% - 10rem);
`
