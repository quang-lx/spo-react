import React from 'react';
import * as S from './Header.style';
import {Layout, Text, Flex, Popup, Avatar, ItemLayout, Divider, Button, List} from '@fluentui/react-northstar';
import {BellIcon, ToDoListIcon, ContactCardIcon} from '@fluentui/react-icons-northstar';

interface HeaderProps {

}

export const Header: React.FunctionComponent<HeaderProps> = (props) => {
  // const { children, to, className } = props
  return (
    <S.HeaderWrapper>
      <S.HeaderBlock>
        <Flex vAlign="center" fill>
          <Flex.Item size="size.large" grow>
            <Layout start={<Logo/>} main={<Search/>} end={<Profile/>}/>
          </Flex.Item>
        </Flex>
      </S.HeaderBlock>
    </S.HeaderWrapper>
  );
}

const Logo = () => {
  return (
    <Text content="SPSVN" size="large" color="white" weight="semibold" className="ml-3"/>
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
    <S.ProfileBlock>
      <S.ActionButton icon={<BellIcon size="medium"/>} text iconOnly title="Thông báo" className="text-white"/>
      <S.ActionButton icon={<ToDoListIcon size="medium"/>} text iconOnly title="Công việc" className="text-white"/>
      <ProfilePopup/>
    </S.ProfileBlock>
  )
}

const ProfilePopup = () => {
  return (
    <Popup trigger={<S.HeaderAvatar name="User Profile" className="mr-1"/>} content={<ProfilePopupContent/>}/>
  )
}

interface ProfilePopupContentProps {

}

const ProfilePopupContent: React.FunctionComponent<ProfilePopupContentProps> = (props) => {
  const items = [
    {
      key: 'account-setting',
      content: (
        <Button
          icon={<ContactCardIcon className="text-secondary"/>}
          className="p-0 justify-content-start"
          text
          fluid
          content={
            <Text className="text-secondary" content="Cài đặt tài khoản" weight="regular"/>
          }
        />
      )
    }
  ];

  const signOut = [
    {
      key: 'account-setting',
      content: (
        <Button
          className="p-0 justify-content-start"
          text
          fluid
          content={
            <Text className="text-secondary" content="Đăng xuất" weight="regular"/>
          }
        />
      )
    }
  ];

  return (
    <S.ProfilePopupContent>
      <ItemLayout
        className="pb-2"
        media={<Avatar name="User Profile" size="larger"/>}
        header={<Text content={<Text content="" />} weight="semibold" truncated/>}
        content={
          <div>
            <Text as="div" className="text-secondary" content="cuongnm@spsvn.com" size="small" truncated/>
            <Text as="div" className="pt-1" content="Chuyên viên lập trình - SPSVN" size="small" truncated/>
          </div>
        }
      />
      <Divider/>
      <List className="list-auto-height" navigable items={items}/>
      <Divider/>
      <List className="list-auto-height" navigable items={signOut}/>
    </S.ProfilePopupContent>
  )
}