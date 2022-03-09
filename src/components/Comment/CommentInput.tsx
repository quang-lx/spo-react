import React from 'react';
import {
  Flex,
  Text,
  Layout,
  Avatar,
  Toolbar,
  ToolbarItemProps,
  Button,
  MenuButton
} from '@fluentui/react-northstar';
import {AcceptIcon, TriangleDownIcon, UserFriendsIcon} from '@fluentui/react-icons-northstar';
import * as S from './Comment.style';


interface CommentInputProps {

}

const CommentInput: React.FunctionComponent<CommentInputProps> = (props) => {
  return (
    <Layout
      alignItems="start"
      start={
        <S.CommentLeftColumn>
          <Avatar image="https://yt3.ggpht.com/ytc/AKedOLTebUysiOUr2VCeE1wqYTQkrVM00kZZO2CgnL7t9g=s900-c-k-c0x00ffffff-no-rj"/>
        </S.CommentLeftColumn>
      }
      main={
        <CommentInputBox/>
      }
    />
  )
}

const CommentInputBox: React.FunctionComponent = () => {
  return (
    <Flex column>
      <S.CommentInputBoxWrapper>
        <Flex column>
          <CommentInputToolbar/>
          <CommentInputText/>
          <CommentInputAttachment/>
        </Flex>
      </S.CommentInputBoxWrapper>
      <CommentInputButtons/>
    </Flex>
  )
}

const CommentInputToolbar = () => {
  return (
    <div>CommentInputToolbar</div>
  )
}

const CommentInputText = () => {
  return (
    <div>CommentInputText</div>
  )
}

const CommentInputAttachment = () => {
  return (
    <div>CommentInputAttachment</div>
  )
}

interface CommentInputButtonsItemProps extends ToolbarItemProps {
  key: string,
  /** kind: toggle, more, custom, divider */
  kind?: string
}

const CommentInputButtons = () => {
  const items: CommentInputButtonsItemProps[] = [
    {
      key: "save",
      kind: 'custom',
      content: <Button content="Gửi" flat primary/>,
      className: "p-0"
    },
    {
      key: "privacy",
      kind: 'custom',
      content: <CommentPrivacyMenu/>,
      className: "p-0 ml-auto"
    }
  ]

  return (
    <Toolbar
      className="mt-2"
      items={items}
    />
  )
}

const CommentPrivacyMenu = () => {
  return(
    <MenuButton
      trigger={
        <Button flat text
                icon={<UserFriendsIcon size="small" outline/>}
                content={
                  <Layout
                    gap="0.25rem"
                    main={<Text content="Công khai" weight="regular"/>}
                    end={<TriangleDownIcon/>}
                  />
                }
                className="p-0"
        />
      }
      menu={[
        {
          icon: <AcceptIcon size="small"/>,
          key: 'public',
          content: 'Công khai'
        },
        {
          icon: <AcceptIcon size="small" className="text-transparent"/>,
          key: 'private',
          content: 'Riêng tư'
        }
      ]}
    />
  )
}

export default CommentInput;