import {Button, Toolbar} from "@fluentui/react-northstar";
import {MenuIcon} from "@fluentui/react-icons-northstar";
import React from "react";

interface SmallSubMenuToolbarProps {

}

const SmallSubMenuToolbar: React.FunctionComponent<SmallSubMenuToolbarProps> = (props) => {
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

export default SmallSubMenuToolbar;