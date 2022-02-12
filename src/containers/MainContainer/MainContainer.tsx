import React from 'react';
import * as S from './MainContainer.style';

interface MainContainerProps {

}

export const MainContainer: React.FunctionComponent<MainContainerProps> = (props) => {
  const { children } = props
  return (
    <S.MainContainerBlock>
      {children}
    </S.MainContainerBlock>
  );
}