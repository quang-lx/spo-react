import {Button, Toolbar} from "@fluentui/react-northstar";
import {MenuIcon} from "@fluentui/react-icons-northstar";
import React from "react";

interface MainContainerToolbarProps {

}

const ContainerToolbar: React.FunctionComponent<MainContainerToolbarProps> = (props) => {
  const items = [
    {
      key: 'approve',
      kind: 'custom',
      content: <Button content="Phê duyệt" flat primary/>,
      fitted: 'horizontally',
      className: "ml-2"
    },
    {
      key: 'forward',
      kind: 'custom',
      content: <Button content="Chuyển xử lý" flat primary tinted/>,
      fitted: 'horizontally',
      className: "ml-2"
    },
    {
      key: 'return',
      kind: 'custom',
      content: <Button content="Trả lại" flat primary tinted/>,
      fitted: 'horizontally',
      className: "ml-2"
    },
    {
      key: 'reject',
      kind: 'custom',
      content: <Button content="Từ chối" flat primary tinted/>,
      fitted: 'horizontally',
      className: "ml-2"
    }
  ]

  return (
    <Toolbar
      aria-label="Toolbar can contain custom content"
      items={items}
    />
  )
}

export default ContainerToolbar;