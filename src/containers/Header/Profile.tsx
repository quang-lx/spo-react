import * as S from "./Header.style";
import {BellIcon, ContactCardIcon, ToDoListIcon} from "@fluentui/react-icons-northstar";
import {Avatar, Button, Divider, ItemLayout, List, Popup, Text, Flex} from "@fluentui/react-northstar";
import React from "react";
import {ProfileProps, ProfilePopupProps, ProfilePopupContentProps} from "../../interfaces/HeaderInterfaces";

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

const ProfilePopup: React.FunctionComponent<ProfilePopupProps> = () => {
  return (
    <Popup
      trigger={
        <S.HeaderAvatarWrapper className="mr-1">
          <Avatar
            image="https://yt3.ggpht.com/ytc/AKedOLTebUysiOUr2VCeE1wqYTQkrVM00kZZO2CgnL7t9g=s900-c-k-c0x00ffffff-no-rj"
          />
        </S.HeaderAvatarWrapper>
      }
      content={<ProfilePopupContent/>}
    />
  )
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
        media={
          <Avatar
            size="larger"
            image="https://yt3.ggpht.com/ytc/AKedOLTebUysiOUr2VCeE1wqYTQkrVM00kZZO2CgnL7t9g=s900-c-k-c0x00ffffff-no-rj"
          />
        }
        header={<Text weight="semibold" truncated>Nguyễn Mạnh Cường</Text>}
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