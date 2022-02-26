import React from 'react';
import * as S from './AppMenu.style';
import { Menu, Text } from '@fluentui/react-northstar';
import { SendIcon, SurveyIcon, GridIcon, PollIcon, DoorArrowLeftIcon } from '@fluentui/react-icons-northstar';
// import { Alert20Regular } from '@fluentui/react-icons';

interface MenuProps {

}

export const AppMenu: React.FunctionComponent<MenuProps> = (props) => {
  // const { children, to, className } = props
  const items = [
    {
      icon: <SurveyIcon />,
      key: 'request',
      content: 'Request'
    },
    {
      icon: <SendIcon {...{outline: true}} />,
      key: 'vb-di',
      content: 'VB Đi'
    },
    {
      icon: <DoorArrowLeftIcon {...{outline: true}} />,
      key: 'vb-den',
      content: 'VB Đến'
    },
    {
      icon: <PollIcon {...{outline: true}} />,
      key: 'cv',
      content: 'Công việc'
    },
    {
      icon: <GridIcon {...{outline: true}} />,
      key: 'da',
      content: 'Dự án'
    },
  ]

  return (
    <S.MenuBlock>
      <Menu
        defaultActiveIndex={0}
        vertical
        fluid
        pointing
        className="pt-0 pb-0 w-100 bg-transparent h-100 app-menu"
        iconOnly
      >
        {items.map((item, index) => (
          <MenuItem {...item} index={index} />
        ))}
      </Menu>
    </S.MenuBlock>
  );
}

interface MenuItemProps {
  icon: JSX.Element,
  key: string,
  content: string,
  index: number
}

const MenuItem: React.FunctionComponent<MenuItemProps> = (props) => {
  return (
    <Menu.Item index={props.index} className="item-wrapper">
      <Menu.ItemContent className="text-center">
        {props.icon}
        <Text content={props.content} size="smaller" truncated className="d-block mt-1" />
      </Menu.ItemContent>
    </Menu.Item>
  );
}