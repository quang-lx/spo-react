import React from 'react';
import * as S from './Header.style';
import { Layout } from '@fluentui/react-northstar';
import { Link } from 'react-router-dom';

interface HeaderProps {

}

export const Header: React.FunctionComponent<HeaderProps> = (props) => {
  // const { children, to, className } = props
  return (
    <S.HeaderBlock>
      <Layout start="Logo" main={<Search />} end="User profile"/>
    </S.HeaderBlock>
  );
}

const Search = () => {
  return (
    <nav>
      <Link to="request">Request List</Link> |{" "}
      <Link to="request/create">Request Create</Link> |{" "}
      <Link to="app">App</Link>
    </nav>
  )
}