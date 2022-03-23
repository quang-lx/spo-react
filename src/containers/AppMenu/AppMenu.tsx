import React, {useEffect, useState} from 'react';
import * as S from './AppMenu.style';
import {Menu, Tooltip} from '@fluentui/react-northstar';
import {
  SendIcon,
  SurveyIcon,
  GridIcon,
  PollIcon,
  DoorArrowLeftIcon
} from '@fluentui/react-icons-northstar';
import {MenuProps, IMenuItem} from "../../interfaces/AppMenuInterfaces";
import {RoutePaths} from "../../routes/RenderRoutes";
import { useNavigate } from "react-router-dom";

export const AppMenu: React.FunctionComponent<MenuProps> = (props) => {
  // const { children, to, className } = props
  const navigate = useNavigate();

  const initMenuItems: IMenuItem[] = [
    {
      key: 'dashboard',
      icon: <Tooltip trigger={<PollIcon {...{outline: true}}/>} content="Dashboard" pointing position="after"/>,
      className: "active",
      onClick: () => {navigate(RoutePaths.Home)}
    },
    {
      key: 'request',
      icon: <Tooltip trigger={<SurveyIcon/>} content="Request" pointing position="after"/>,
      className: "",
      onClick: () => {navigate(RoutePaths.Request)}
    },
    {
      key: 'da',
      icon: <Tooltip trigger={<GridIcon {...{outline: true}} />} content="Dự án" pointing position="after"/>,
      className: ""
    },
    {
      key: 'cv',
      icon: <Tooltip trigger={<PollIcon {...{outline: true, rotate: 90}} />} content="Công việc" pointing position="after"/>,
      className: "",
      onClick: () => {navigate(RoutePaths.WorkList)}
    },
    {
      key: 'vb-di',
      icon: <Tooltip trigger={<SendIcon {...{outline: true}} />} content="Văn bản đi" pointing position="after"/>,
      className: ""
    },
    {
      key: 'vb-den',
      icon: <Tooltip trigger={<DoorArrowLeftIcon {...{outline: true}} />} content="Văn bản đến" pointing position="after"/>,
      className: ""
    }
  ]

  const [items, setItems] = useState(initMenuItems);

  useEffect(() => {

  }, [items])

  const updateActiveItem = (props) => {
    let newItems = [...initMenuItems];
    newItems[0].className = "";
    newItems[props.activeIndex].className = "active";

    setItems(newItems);
  }

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
        onActiveIndexChange={(e, props) => {
          updateActiveItem(props)
        }}
      />
    </S.MenuBlock>
  );
}