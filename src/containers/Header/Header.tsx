import React from 'react';
import * as S from './Header.style';
import { Layout, Avatar, Text, Flex, Button } from '@fluentui/react-northstar';
import { BellIcon } from '@fluentui/react-icons-northstar';
import { Link } from 'react-router-dom';

interface HeaderProps {

}

export const Header: React.FunctionComponent<HeaderProps> = (props) => {
  // const { children, to, className } = props
  return (
    <S.HeaderWrapper>
      <S.HeaderBlock>
        <Flex vAlign="center" fill>
          <Flex.Item size="size.large" grow>
            <Layout start={<Logo />} main={<Search />} end={<Profile />} />
          </Flex.Item>
        </Flex>
      </S.HeaderBlock>
    </S.HeaderWrapper>
  );
}

const Logo = () => {
  return (
    <Text content="SPSVN" size="large" color="white" weight="semibold" />
  )
}

const Search = () => {
  return (
    <nav>
      {/*<Link to="request">Request List</Link> |{" "}*/}
      {/*<Link to="request/create">Request Create</Link> |{" "}*/}
      {/*<Link to="app">App</Link>*/}
    </nav>
  )
}

const Profile = () => {
  return (
    <div>
      <Button icon={<BellIcon />} text iconOnly title="Thông báo" />
      <Avatar name="User Profile"/>
    </div>
  )
}