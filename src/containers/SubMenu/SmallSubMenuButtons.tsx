import {Button, Toolbar} from "@fluentui/react-northstar";
import {MenuIcon} from "@fluentui/react-icons-northstar";
import React from "react";

interface SmallSubMenuButtonsProps {

}

const SmallSubMenuButtons: React.FunctionComponent<SmallSubMenuButtonsProps> = (props) => {
  const items = [
    {
      key: 'toggle',
      kind: 'custom',
      content: <Button flat text iconOnly icon={<MenuIcon/>} primary/>,
    },
    {
      key: 'add-button',
      kind: 'custom',
      content: <Button content="Thêm mới" flat primary/>,
      fitted: 'horizontally',
    }
  ]

  return (
    <Toolbar
      aria-label="Toolbar can contain custom content"
      items={items}
    />
  )
}

export default SmallSubMenuButtons;