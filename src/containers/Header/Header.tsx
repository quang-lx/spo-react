import React from 'react';
import * as S from './Header.style';
import {Layout, Flex} from '@fluentui/react-northstar';
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import Profile from "./Profile";

interface HeaderProps {

}

export const Header: React.FunctionComponent<HeaderProps> = (props) => {
  // const { children, to, className } = props
  return (
    <S.HeaderWrapper>
      <S.HeaderBlock>
        <Flex vAlign="center" fill>
          <Flex.Item size="size.large" grow>
            <Layout start={<Logo/>} main={<SearchBar/>} end={<Profile/>}/>
          </Flex.Item>
        </Flex>
      </S.HeaderBlock>
    </S.HeaderWrapper>
  );
}