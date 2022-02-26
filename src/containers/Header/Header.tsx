import React from 'react';
import * as S from './Header.style';
import { Layout, Text, Flex, Popup, Avatar } from '@fluentui/react-northstar';
import { BellIcon, ToDoListIcon } from '@fluentui/react-icons-northstar';
import { useFluentContext } from '@fluentui/react-bindings';


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
    <Text content="SPSVN" size="large" color="white" weight="semibold" className="ml-3" />
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
      <S.ActionButton icon={<BellIcon size="large" />} text iconOnly title="Thông báo" className="text-white" />
      <S.ActionButton icon={<ToDoListIcon size="large" />} text iconOnly title="Công việc" className="text-white" />
      <ProfilePopup />
    </S.ProfileBlock>
  )
}

const ProfilePopup = () => {
  return (
    <Popup trigger={<S.HeaderAvatar name="User Profile" className="mr-1" />} content={<ProfilePopupContent />} />
  )
}

interface ProfilePopupContentProps {

}

const ProfilePopupContent: React.FunctionComponent<ProfilePopupContentProps> = (props) => {
  const context = useFluentContext();

  return (
    <S.ProfilePopupContent>
      <Flex>
        <Flex.Item size="size.large">
          <Flex vAlign="center">
            <Flex.Item size="size.quarter">
              <Avatar name="User Profile" size="larger" />
            </Flex.Item>
            <Flex.Item>
              <div>
                <div>
                  <Text content="Nguyễn Mạnh Cường" weight="semibold" truncated />
                </div>
                <div>
                  <Text content={context.theme.siteVariables.contextualColors.brand[100]} size="small" truncated color="#fff" />
                </div>
                <div>
                  <Text content="Chuyên viên lập trình - SPSVN" size="small" truncated />
                </div>
              </div>
            </Flex.Item>
          </Flex>
        </Flex.Item>
      </Flex>
    </S.ProfilePopupContent>
  )
}