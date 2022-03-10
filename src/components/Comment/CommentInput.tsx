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
  Attachment
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
        <Avatar image="https://yt3.ggpht.com/ytc/AKedOLTebUysiOUr2VCeE1wqYTQkrVM00kZZO2CgnL7t9g=s900-c-k-c0x00ffffff-no-rj"/>
      </S.CommentLeftColumn>
      <CommentInputBox/>
    </Flex>
  )
}

const CommentInputBox: React.FunctionComponent = () => {
  return (
    <S.CommentInputBoxWrapper>
      <Flex column>
        <S.CommentInputBoxInner>
          <Flex column>
            <CommentInputText/>
            <CommentInputAttachment/>
          </Flex>
        </S.CommentInputBoxInner>
        <CommentInputButtons/>
      </Flex>
    </S.CommentInputBoxWrapper>
  )
}

const CommentInputAttachment = () => {
  const handleClick = action => () => console.log(`'${action}' was clicked`)

  return (
    <S.CommentInputAttachmentWrapper>
      <div className="row m-0">
        <div className="col-md-6 p-0">
          <Attachment
            icon={<WordColorIcon />}
            header="File word File word File word File word.docx"
            actionable
            action={
              {
                icon: <CloseIcon />,
                onClick: handleClick('Remove'),
                title: 'Close',
              }
            }
          />
        </div>
        <div className="col-md-6 p-0">
          <Attachment
            icon={<ExcelColorIcon />}
            header="File excel.docx"
            actionable
            action={
              {
                icon: <CloseIcon />,
                onClick: handleClick('Remove'),
                title: 'Close',
              }
            }
          />
        </div>
        <div className="col-md-6 p-0">
          <Attachment
            icon={<PowerPointColorIcon />}
            header="File powerpoint.docx"
            actionable
            action={
              {
                icon: <CloseIcon />,
                onClick: handleClick('Remove'),
                title: 'Close',
              }
            }
          />
        </div>
        <div className="col-md-6 p-0">
          <Attachment
            icon={<FilesPdfIcon />}
            header="File pdf.docx"
            actionable
            action={
              {
                icon: <CloseIcon />,
                onClick: handleClick('Remove'),
                title: 'Close',
              }
            }
          />
        </div>
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