import React from 'react';
import * as S from './AppMenu.style';
import { Menu, Text } from '@fluentui/react-northstar';
import { SendIcon, SurveyIcon, GridIcon, PollIcon, DoorArrowLeftIcon } from '@fluentui/react-icons-northstar';

interface MenuProps {

}

export const AppMenu: React.FunctionComponent<MenuProps> = (props) => {
  // const { children, to, className } = props
  const items = [
    {
      key: 'request',
      content: <MenuItem icon={<SurveyIcon />} content="Request" />
    },
    {
      key: 'cv',
      content: <MenuItem icon={<PollIcon {...{outline: true}} />} content="Công việc" />
    },
    {
      key: 'da',
      content: <MenuItem icon={<GridIcon {...{outline: true}} />} content="Dự án" />
    },
    {
      key: 'vb-di',
      content: <MenuItem icon={<SendIcon {...{outline: true}} />} content="VB đi" />
    },
    {
      key: 'vb-den',
      content: <MenuItem icon={<DoorArrowLeftIcon {...{outline: true}} />} content="VB đến" />
    }
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
        items={items}
      />
    </S.MenuBlock>
  );
}

interface MenuItemProps {
  icon: JSX.Element,
  content: string
}

const MenuItem: React.FunctionComponent<MenuItemProps> = (props) => {
  return (
    <div className="text-center">
      {props.icon}
      <Text content={props.content} size="smaller" truncated className="d-block mt-1" />
    </div>
  );
}