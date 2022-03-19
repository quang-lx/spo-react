import {Button, Toolbar, MenuButton} from "@fluentui/react-northstar";
import {TabsIcon, ChevronDownMediumIcon, AcceptIcon, ArrowDownIcon, CloseIcon, CircleIcon} from "@fluentui/react-icons-northstar";
import React from "react";
import {BigSubMenuToolbarProps, SortButtonProps} from "../../interfaces/SubMenuInterfaces";

const BigSubMenuToolbar: React.FunctionComponent<BigSubMenuToolbarProps> = (props) => {
  const items = [
    {
      key: "toggle",
      kind: "custom",
      content: <Button disabled flat text icon={<TabsIcon/>}
                       content="Tất cả" className="p-0 text-black justify-content-start"
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
  ]

  return (
    <Toolbar
      aria-label="Toolbar can contain custom content"
      items={items}
    />
  )
}

const SortButton: React.FunctionComponent<SortButtonProps> = (props) => {
  return (
    <MenuButton
      trigger={<Button flat text icon={<ChevronDownMediumIcon/>} content="Sắp xếp" iconPosition="after" primary/>}
      menu={[
        {
          icon: <AcceptIcon size="small"/>,
          key: 'tat-ca',
          content: 'Tất cả'
        },
        {
          icon: <AcceptIcon size="small" className="text-transparent"/>,
          key: 'thoi-gian-nhan',
          content: 'Thời gian'
        },
        {
          icon: <AcceptIcon size="small" className="text-transparent"/>,
          key: 'quy-trinh',
          content: 'Quy trình'
        },
        {
          icon: <AcceptIcon size="small" className="text-transparent"/>,
          key: 'nguoi-gui',
          content: 'Người gửi'
        }
      ]}
    />
  )
}

export default BigSubMenuToolbar;