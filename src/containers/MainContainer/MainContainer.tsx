import React from 'react';
import * as S from './MainContainer.style';
import {MainContainerProps} from "../../interfaces/MainContainerInterfaces";

export const MainContainer: React.FunctionComponent<MainContainerProps> = (props) => {
  const { children } = props
  return (
    <S.MainContainerBlock>
      {children}
    </S.MainContainerBlock>
  );
}