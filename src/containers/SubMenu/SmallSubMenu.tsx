import {Button, Text, Tree} from "@fluentui/react-northstar";
import {
  BookmarkIcon,
  CalendarIcon,
  CircleIcon,
  TriangleDownIcon,
  TriangleEndIcon,
  StarIcon,
  UrgentIcon,
  RedbangIcon,
  TabsIcon
} from "@fluentui/react-icons-northstar";
import React from "react";

interface SmallSubMenuProps {

}
const SmallSubMenu: React.FunctionComponent<SmallSubMenuProps> = () => {
  const items = [
    {
      id: 'all',
      title: <Button
        content={<Text content="Tất cả" weight="regular" size="medium"/>}
        className="p-0 justify-content-start"
        icon={<TabsIcon />}
        text
        fluid
      />,
      className: 'tree-item-parent-node'
    },
    {
      id: 'my',
      title: 'Của tôi',
      className: 'tree-item-parent-node',
      items: [
        {
          id: 'my-1',
          title: <Button
            content={<Text content="Quan trọng" weight="regular" size="medium"/>}
            className="p-0 justify-content-start"
            icon={<StarIcon />}
            text
            fluid
          />
        },
        {
          id: 'my-2',
          title: <Button
            content={<Text content="Sắp đến hạn" weight="regular" size="medium"/>}
            className="p-0 justify-content-start"
            icon={<RedbangIcon />}
            text
            fluid
          />
        },
        {
          id: 'my-3',
          title: <Button
            content={<Text content="Quá hạn" weight="regular" size="medium"/>}
            className="p-0 justify-content-start"
            icon={<UrgentIcon />}
            text
            fluid
          />
        }
      ],
    },
    {
      id: 'time',
      title: 'Thời gian',
      className: 'tree-item-parent-node',
      items: [
        {
          id: 'time-1',
          title: <Button
            content={<Text content="Hôm nay" weight="regular" size="medium"/>}
            className="p-0 justify-content-start"
            icon={<CalendarIcon/>}
            text
            fluid
          />
        },
        {
          id: 'time-2',
          title: <Button
            content={<Text content="Tuần này" weight="regular" size="medium"/>}
            className="p-0 justify-content-start"
            icon={<CalendarIcon/>}
            text
            fluid
          />
        },
        {
          id: 'time-3',
          title: <Button
            content={<Text content="Tháng này" weight="regular" size="medium"/>}
            className="p-0 justify-content-start"
            icon={<CalendarIcon/>}
            text
            fluid
          />
        }
      ],
    },
    {
      id: 'recently',
      title: 'Gần đây',
      className: 'tree-item-parent-node',
      items: [
        {
          id: 'recently-1',
          title: <Button
            content={<Text content="Tờ trình" weight="regular" size="medium"/>}
            className="p-0 justify-content-start"
            icon={<BookmarkIcon/>}
            text
            fluid
          />
        },
        {
          id: 'recently-2',
          title: <Button
            content={<Text content="Báo cáo" weight="regular" size="medium"/>}
            className="p-0 justify-content-start"
            icon={<BookmarkIcon/>}
            text
            fluid
          />
        }
      ],
    },
    {
      id: 'workflow',
      title: 'Quy trình',
      className: 'tree-item-parent-node',
      items: [
        {
          id: 'workflow-1',
          title: <Button
            content={<Text content="QT PD giá trên 50tr" weight="regular" size="medium"/>}
            className="p-0 justify-content-start"
            icon={<CircleIcon/>}
            text
            fluid
          />,
        },
        {
          id: 'workflow-2',
          title: <Button
            content={<Text content="QT PD giá trên 100tr" weight="regular" size="medium"/>}
            className="p-0 justify-content-start"
            icon={<CircleIcon/>}
            text
            fluid
          />,
        },
        {
          id: 'workflow-3',
          title: <Button
            content={<Text content="QT mua sắm cho tòa nhà" weight="regular" size="medium"/>}
            className="p-0 justify-content-start"
            icon={<CircleIcon/>}
            text
            fluid
          />,
        }
      ],
    },
  ]

  const titleRenderer = (Component, restProps) => (
    <Component expanded={restProps.expanded} hasSubtree={restProps.hasSubtree} {...restProps}>
      <div>
        {restProps.hasSubtree ? (restProps.expanded ? <TriangleDownIcon/> : <TriangleEndIcon/>) : null}
        {restProps.content}
      </div>
    </Component>
  )

  return (
    <Tree
      aria-label="submenu"
      className="small-sub-menu pl-0 pt-2"
      items={items}
      renderItemTitle={titleRenderer}
      defaultActiveItemIds={['recently', 'workflow', 'time', 'my']}
    />
  )
}

export default SmallSubMenu;