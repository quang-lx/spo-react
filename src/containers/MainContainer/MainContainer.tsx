import React from 'react';
import * as S from './MainContainer.style';

interface MainContainerProps {

}

export const MainContainer: React.FunctionComponent<MainContainerProps> = (props) => {
  // const { children, to, className } = props
  return (
    <S.MainContainerBlock>
      main
    </S.MainContainerBlock>
  );
}