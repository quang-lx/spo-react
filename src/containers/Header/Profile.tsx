import * as S from "./Header.style";
import {BellIcon, ContactCardIcon, ToDoListIcon} from "@fluentui/react-icons-northstar";
import {Avatar, Button, Divider, ItemLayout, List, Popup, Text, Flex} from "@fluentui/react-northstar";
import React from "react";

interface ProfileProps {

}
const Profile: React.FunctionComponent<ProfileProps> = () => {
  return (
    <S.ProfileBlock>
      <Flex>
        <Flex.Item push>
          <S.ActionButton icon={<BellIcon size="medium"/>} text iconOnly title="Thông báo" className="text-white"/>
        </Flex.Item>
        <S.ActionButton icon={<ToDoListIcon size="medium"/>} text iconOnly title="Công việc" className="text-white"/>
        <ProfilePopup/>
      </Flex>
    </S.ProfileBlock>
  )
}

interface ProfilePopupProps {

}
const ProfilePopup: React.FunctionComponent<ProfilePopupProps> = () => {
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
        header={<Text content={<Text content=""/>} weight="semibold" truncated/>}
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

export default Profile;