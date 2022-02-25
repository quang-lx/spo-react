import React from 'react';
import * as S from './Container.style';

interface ContainerProps {

}

export const Container: React.FunctionComponent<ContainerProps> = (props) => {
  const { children } = props
  return (
    <S.ContainerBlock>
      {children}
    </S.ContainerBlock>
  );
}