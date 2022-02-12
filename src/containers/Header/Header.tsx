import React from 'react';
import * as S from './Header.style';
import { Layout } from '@fluentui/react-northstar';

interface HeaderProps {

}

export const Header: React.FunctionComponent<HeaderProps> = (props) => {
  // const { children, to, className } = props
  return (
    <S.HeaderBlock>
      <Layout start="Logo" main="Search" end="User profile"/>
    </S.HeaderBlock>
  );
}