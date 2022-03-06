import styled from 'styled-components';

export const ContentWrapper = styled.div `
  background-color: white;
  padding: 0 1rem 0 0.5rem;
  border-top: 1px solid ${props => props.theme.siteVariables.borderColor};
`

export const AdditionInfo = styled.div `
  width: ${props => props.theme.siteVariables.rightBarWidth};
  //background-color: beige;
  height: 3000px;
  border-left: 1px solid ${props => props.theme.siteVariables.borderColor};
  padding: 1rem 0 0.5rem;
`
export const Content = styled.div `
  padding: 1rem 0.5rem 0.5rem;
  //background-color: olive;
`