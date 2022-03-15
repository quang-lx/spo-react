import {Button, Text, Tree, TreeItemProps} from "@fluentui/react-northstar";
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
import React, {useEffect, useState} from "react";
import CustomScrollbars from "../../components/CustomScrollbars";
import {SmallSubMenuProps} from "../../interfaces/SubMenuInterfaces";

const SmallSubMenu: React.FunctionComponent<SmallSubMenuProps> = () => {
  const [selectedIndexes, setSelectedIndexes] = useState({
    itemIndex: 0,
    parentIndex: -1
  });
  const [items, setItems] = useState([] as TreeItemProps[]);

  const setActiveItem = (newItemIndex: number, newParentIndex: number = -1) => {
    setSelectedIndexes({itemIndex: newItemIndex, parentIndex: newParentIndex});
  }

  const getNavs = () => {
    let data: TreeItemProps[] = [
      {
        id: 'all',
        title: <Button
          content={<Text content="Tất cả" weight="regular" size="medium"/>}
          className="p-0 justify-content-start"
          icon={<TabsIcon />}
          text
          fluid
        />,
        className: `tree-item-parent-node`
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
            />,
            className: ""
          },
          {
            id: 'my-2',
            title: <Button
              content={<Text content="Sắp đến hạn" weight="regular" size="medium"/>}
              className="p-0 justify-content-start"
              icon={<RedbangIcon />}
              text
              fluid
            />,
            className: ""
          },
          {
            id: 'my-3',
            title: <Button
              content={<Text content="Quá hạn" weight="regular" size="medium"/>}
              className="p-0 justify-content-start"
              icon={<UrgentIcon />}
              text
              fluid
            />,
            className: ""
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
            />,
            className: ""
          },
          {
            id: 'time-2',
            title: <Button
              content={<Text content="Tuần này" weight="regular" size="medium"/>}
              className="p-0 justify-content-start"
              icon={<CalendarIcon/>}
              text
              fluid
            />,
            className: ""
          },
          {
            id: 'time-3',
            title: <Button
              content={<Text content="Tháng này" weight="regular" size="medium"/>}
              className="p-0 justify-content-start"
              icon={<CalendarIcon/>}
              text
              fluid
            />,
            className: ""
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
            />,
            className: ""
          },
          {
            id: 'recently-2',
            title: <Button
              content={<Text content="Báo cáo" weight="regular" size="medium"/>}
              className="p-0 justify-content-start"
              icon={<BookmarkIcon/>}
              text
              fluid
            />,
            className: ""
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
            className: ""
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
            className: ""
          },
          {
            id: 'workflow-3',
            title: <Button
              content={<Text content="QT mua sắm cho tòa nhà 123456" weight="regular" size="medium"/>}
              className="p-0 justify-content-start"
              icon={<CircleIcon/>}
              text
              fluid
            />,
            className: ""
          }
        ],
      },
    ];

    setItems(data);
  }

  useEffect(() => {
    getNavs();
  }, []);

  useEffect(() => {

  },[items]);

  useEffect(() => {

  },[selectedIndexes])

  const titleRenderer = (Component, restProps) => (
    <Component expanded={restProps.expanded} hasSubtree={restProps.hasSubtree} {...restProps}>
      <div>
        {restProps.hasSubtree ? (restProps.expanded ? <TriangleDownIcon/> : <TriangleEndIcon/>) : null}
        {restProps.content}
      </div>
    </Component>
  )

  const processNavChilds = (childs, parentIndex) => {
    childs = childs.map((it, idx) => {
      it = {...it, onClick: () => {setActiveItem(idx, parentIndex)}}

      if(parentIndex === selectedIndexes.parentIndex && idx === selectedIndexes.itemIndex) {
        it.className = it.className?.concat(" active");
      }

      return it;
    });

    return childs;
  }

  const processNavs = (navs) => {
    navs = navs.map((item, index) => {
      if(Array.isArray(item.items) && item.items.length) {
        let childs = item.items as unknown as TreeItemProps[];
        childs = processNavChilds(childs, index);

        item = {...item, items: childs}
      } else {
        item = {...item, onClick: () => {setActiveItem(index)}}

        if(index === selectedIndexes.itemIndex && selectedIndexes.parentIndex === -1) {
          item.className = item.className?.concat(" active");
        }
      }

      return item;
    });

    return navs
  }

  return (
    <CustomScrollbars disableHorizontalScrolling>
      <Tree
        aria-label="submenu"
        className="small-sub-menu pl-0 pt-2"
        items={processNavs(items)}
        renderItemTitle={titleRenderer}
        defaultActiveItemIds={['recently', 'workflow', 'time', 'my']}
      />
    </CustomScrollbars>
  )
}

export default SmallSubMenu;