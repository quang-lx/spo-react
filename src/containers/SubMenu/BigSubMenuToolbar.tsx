import {Button, Toolbar, MenuButton, MenuProps, MenuItemProps} from "@fluentui/react-northstar";
import {
  TabsIcon,
  ChevronDownMediumIcon,
  AcceptIcon,
  ArrowDownIcon,
  CloseIcon,
  CircleIcon
} from "@fluentui/react-icons-northstar";
import React, {useEffect, useState} from "react";
import {BigSubMenuToolbarProps, SortButtonProps} from "../../interfaces/SubMenuInterfaces";
import {useSelector, useDispatch} from "react-redux";
import {RootState} from "../../store";
import {Icon} from "../../components/Icon";
import {setBigSubMenuToolbar} from "../../store/reducers/subMenuReducer";

const BigSubMenuToolbar: React.FunctionComponent<BigSubMenuToolbarProps> = (props) => {
  const {title, icon} = useSelector((state: RootState) => state.subMenuReducer.bigSubMenu);

  const [items, setItems] = useState([
    {
      key: "toggle",
      kind: "custom",
      content: <Button disabled flat text icon={<TabsIcon/>}
                       content={title}
                       className="p-0 text-black justify-content-start"
      />,
      className: "big-sub-menu-toolbar-title overflow-hidden"
    },
    // {
    //   key: "sorted",
    //   kind: "custom",
    //   content: <Button content="Thời gian" flat text primary icon={<CloseIcon size="smaller"/>} iconPosition="after"/>,
    //   fitted: "horizontally",
    //   className: "ml-auto"
    // },
    // {
    //   key: "sort-direction",
    //   kind: "custom",
    //   content: <Button flat text iconOnly icon={<ArrowDownIcon size="small"/>}/>,
    //   fitted: "horizontally",
    //   className: "mr-2"
    // },
    {
      key: "add-button",
      kind: "custom",
      content: <SortButton/>,
      fitted: "horizontally",
      className: "mr-2 ml-auto"
    }
  ])
  useEffect(() => {
    let updatedItems = [...items];
    updatedItems[0].content = <Button disabled flat text icon={<Icon name={icon}/>}
                                      content={title}
                                      className="p-0 text-black justify-content-start"
    />;

    setItems(updatedItems);
  }, [title, icon]);

  useEffect(() => {

  }, [items])

  return (
    <Toolbar
      aria-label="Toolbar can contain custom content"
      items={items}
      className="big-sub-menu-toolbar"
    />
  )
}

const SortButton: React.FunctionComponent<SortButtonProps> = (props) => {
  const [menu, setMenu] = useState({
    onActiveIndexChange: (e, props) => {
      selectItem(props?.activeIndex)
    },
    items: [
      {
        icon: <AcceptIcon size="small"/>,
        key: 'tat-ca',
        content: 'Tất cả',
        className: "active"
      },
      {
        icon: <AcceptIcon size="small"/>,
        key: 'thoi-gian-nhan',
        content: 'Thời gian',
        className: ""
      },
      {
        icon: <AcceptIcon size="small"/>,
        key: 'quy-trinh',
        content: 'Quy trình',
        className: ""
      },
      {
        icon: <AcceptIcon size="small"/>,
        key: 'nguoi-gui',
        content: 'Người gửi',
        className: ""
      }
    ]
  } as MenuProps)

  const selectItem = (activeIndex) => {
    let updatedMenu = {...menu};
    updatedMenu.items = updatedMenu.items as MenuItemProps[];
    updatedMenu.items = updatedMenu.items.map(
      (item, index) => {
        item = item as MenuItemProps;
        item.className = index === activeIndex ? "active" : "";
        return item;
      }
    )

    setMenu(updatedMenu);
  }

  useEffect(() => {

  }, [menu])

  return (
    <MenuButton
      trigger={<Button flat text icon={<ChevronDownMediumIcon/>} content="Sắp xếp" iconPosition="after" primary/>}
      menu={menu}
      className="big-sub-menu-toolbar-sort"
    />
  )
}

export default BigSubMenuToolbar;