import {Button, Toolbar, Text} from "@fluentui/react-northstar";
import {TvIcon, PollIcon, MoleculeIcon} from "@fluentui/react-icons-northstar";
import React from "react";

interface MainContainerToolbarProps {

}

const ContainerToolbar: React.FunctionComponent<MainContainerToolbarProps> = (props) => {
  const items = [
    {
      key: 'approve',
      kind: 'custom',
      content: <Button className="pl-2 pr-2" content="Phê duyệt" flat primary/>,
      fitted: 'horizontally',
      className: "ml-3"
    },
    // {
    //   key: 'forward',
    //   kind: 'custom',
    //   content: <Button className="pl-2 pr-2" content="Chuyển xử lý" flat primary tinted/>,
    //   fitted: 'horizontally',
    //   className: "ml-2"
    // },
    {
      key: 'return',
      kind: 'custom',
      content: <Button className="pl-2 pr-2" content="Trả lại" flat primary tinted/>,
      fitted: 'horizontally',
      className: "ml-2"
    },
    {
      key: 'reject',
      kind: 'custom',
      content: <Button className="pl-2 pr-2" content="Từ chối" flat primary tinted/>,
      fitted: 'horizontally',
      className: "ml-2"
    },
    {
      key: 'overview',
      kind: 'custom',
      content: <Button
        className="p-0 unset-width"
        icon={<TvIcon/>}
        content={
          <Text weight="regular">Tổng quan</Text>
        }
        flat
        text
        primary
      />,
      fitted: 'horizontally',
      className: "ml-auto"
    },
    {
      key: 'workflow',
      kind: 'custom',
      content: <Button
        className="p-0 unset-width"
        icon={<MoleculeIcon />}
        content={
          <Text weight="regular">Quy trình</Text>
        }
        flat
        text
        primary
      />,
      fitted: 'horizontally',
      className: "ml-3"
    },
    {
      key: 'task',
      kind: 'custom',
      content: <Button
        className="p-0 unset-width"
        icon={<PollIcon/>}
        content={
          <Text weight="regular">Công việc</Text>
        }
        flat
        text
        primary
      />,
      fitted: 'horizontally',
      className: "ml-3"
    }
  ]

  return (
    <Toolbar
      className="w-100 pr-2"
      aria-label="Toolbar can contain custom content"
      items={items}
    />
  )
}

export default ContainerToolbar;