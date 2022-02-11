import React from 'react';
import * as S from './Header.style';
import { Segment } from '@fluentui/react-northstar';

interface HeaderProps {

}

export const Header: React.FunctionComponent<HeaderProps> = (props) => {
  // const { children, to, className } = props
  return (
    <S.HeaderBlock>
      <Segment content="Header" color="blue" />
    </S.HeaderBlock>
  );
}