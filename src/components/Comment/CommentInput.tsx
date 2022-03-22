import React from 'react';
import {
  Flex,
  Text,
  Layout,
  Avatar,
  Toolbar,
  ToolbarItemProps,
  Button,
  MenuButton,
  Attachment, AttachmentProps
} from '@fluentui/react-northstar';
import {
  AcceptIcon,
  TriangleDownIcon,
  UserFriendsIcon,
  WordColorIcon,
  ExcelColorIcon,
  PowerPointColorIcon,
  CloseIcon,
  FilesPdfIcon
} from '@fluentui/react-icons-northstar';
import * as S from './Comment.style';
import CommentInputText from "./CommentInputText";

interface CommentInputProps {

}

const CommentInput: React.FunctionComponent<CommentInputProps> = (props) => {
  return (
    <Flex className="comment-input">
      <S.CommentLeftColumn>
        <Avatar
          image="https://yt3.ggpht.com/ytc/AKedOLTebUysiOUr2VCeE1wqYTQkrVM00kZZO2CgnL7t9g=s900-c-k-c0x00ffffff-no-rj"/>
      </S.CommentLeftColumn>
      <CommentInputBox/>
    </Flex>
  )
}

const CommentInputBox: React.FunctionComponent = () => {
  const files = [
    {
      key: "f1",
      icon: <WordColorIcon/>,
      header: "File word File word File word File word.docx",
      actionable: true
    },
    {
      key: "f2",
      icon: <ExcelColorIcon/>,
      header: "File excel.xlsx",
      actionable: true
    },
    {
      key: "f3",
      icon: <PowerPointColorIcon/>,
      header: "File powerpoint.pptx",
      actionable: true
    },
    {
      key: "f4",
      icon: <FilesPdfIcon/>,
      header: "File pdf.pdf",
      actionable: true
    }
  ]

  return (
    <S.CommentInputBoxWrapper>
      <Flex column>
        <S.CommentInputBoxInner>
          <Flex column>
            <CommentInputText/>
            <CommentInputAttachment items={files}/>
          </Flex>
        </S.CommentInputBoxInner>
        <CommentInputButtons/>
      </Flex>
    </S.CommentInputBoxWrapper>
  )
}

interface CommentAttachmentProps extends AttachmentProps {
  key?: string
}

interface CommentInputAttachmentProps {
  items: CommentAttachmentProps[],
  className?: string
}

const CommentInputAttachment: React.FunctionComponent<CommentInputAttachmentProps> = (props) => {
  const handleClick = (action, index) => () => console.log(`'${action}' was clicked`);
  const {items, className} = props;

  return (
    <S.CommentInputAttachmentWrapper className={className}>
      <div className="row m-0">
        {items.map((item, index) =>
          <div className="col-md-6 p-0" key={index}>
            <Attachment
              icon={item.icon}
              header={item.header}
              actionable={item.actionable}
              action={
                item.actionable ? {
                  icon: <CloseIcon/>,
                  onClick: handleClick('Remove', index),
                  title: 'Close',
                } : undefined
              }
            />
          </div>
        )}
      </div>
    </S.CommentInputAttachmentWrapper>
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
  return (
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

export {CommentInputAttachment}

export default CommentInput;