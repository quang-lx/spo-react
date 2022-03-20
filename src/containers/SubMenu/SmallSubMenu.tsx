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
import {SmallSubMenuProps, ISmallSubMenuItem} from "../../interfaces/SubMenuInterfaces";
import {useDispatch} from "react-redux";
import {setBigSubMenuToolbar} from "../../store/reducers/subMenuReducer";

const SmallSubMenu: React.FunctionComponent<SmallSubMenuProps> = () => {
  const dispatch = useDispatch();

  const [selectedIndexes, setSelectedIndexes] = useState({
    itemIndex: 0,
    parentIndex: -1
  });
  const [items, setItems] = useState([] as ISmallSubMenuItem[]);

  const setActiveItem = (newItemIndex: number, newParentIndex: number = -1, title: string = "", icon: string = "") => {
    dispatch(setBigSubMenuToolbar({title, icon}))
    setSelectedIndexes({itemIndex: newItemIndex, parentIndex: newParentIndex});
  }

  const getNavs = () => {
    let data: ISmallSubMenuItem[] = [
      {
        id: 'all',
        title: <Button
          content={<Text content="Tất cả" weight="regular" size="medium"/>}
          className="p-0 justify-content-start"
          icon={<TabsIcon/>}
          text
          fluid
        />,
        className: `tree-item-parent-node`,
        itemtitle: "Tất cả",
        itemicon: "TabsIcon"
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
              icon={<StarIcon/>}
              text
              fluid
            />,
            className: "",
            itemtitle: "Quan trọng",
            itemicon: "StarIcon"
          },
          {
            id: 'my-2',
            title: <Button
              content={<Text content="Sắp đến hạn" weight="regular" size="medium"/>}
              className="p-0 justify-content-start"
              icon={<RedbangIcon/>}
              text
              fluid
            />,
            className: "",
            itemtitle: "Sắp đến hạn",
            itemicon: "RedbangIcon"
          },
          {
            id: 'my-3',
            title: <Button
              content={<Text content="Quá hạn" weight="regular" size="medium"/>}
              className="p-0 justify-content-start"
              icon={<UrgentIcon/>}
              text
              fluid
            />,
            className: "",
            itemtitle: "Qúa hạn",
            itemicon: "UrgentIcon"
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
            className: "",
            itemtitle: "Hôm nay",
            itemicon: "CalendarIcon"
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
            className: "",
            itemtitle: "Tuần này",
            itemicon: "CalendarIcon"
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
            className: "",
            itemtitle: "Tháng này",
            itemicon: "CalendarIcon"
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
            className: "",
            itemtitle: "Tờ trình",
            itemicon: "BookmarkIcon"
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
            className: "",
            itemtitle: "Báo cáo",
            itemicon: "BookmarkIcon"
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
            className: "",
            itemtitle: "QT PD giá trên 50tr",
            itemicon: "CircleIcon"
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
            className: "",
            itemtitle: "QT PD giá trên 100tr",
            itemicon: "CircleIcon"
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
            className: "",
            itemtitle: "QT mua sắm cho tòa nhà 123456",
            itemicon: "CircleIcon"
          }
        ],
      },
    ];

    setItems(data);
    dispatch(setBigSubMenuToolbar({title: data[0].itemtitle, icon: data[0].itemicon}));
  }

  useEffect(() => {
    getNavs();
  }, []);

  useEffect(() => {

  }, [items]);

  useEffect(() => {

  }, [selectedIndexes])

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
      it = {
        ...it, onClick: () => {
          setActiveItem(idx, parentIndex, it.itemtitle, it.itemicon)
        }
      }

      if (parentIndex === selectedIndexes.parentIndex && idx === selectedIndexes.itemIndex) {
        it.className = it.className?.concat(" active");
      }

      return it;
    });

    return childs;
  }

  const processNavs = (navs) => {
    navs = navs.map((item, index) => {
      if (Array.isArray(item.items) && item.items.length) {
        let childs = item.items as unknown as TreeItemProps[];
        childs = processNavChilds(childs, index);

        item = {...item, items: childs}
      } else {
        item = {
          ...item, onClick: () => {
            setActiveItem(index, -1, item.itemtitle, item.itemicon)
          }
        }

        if (index === selectedIndexes.itemIndex && selectedIndexes.parentIndex === -1) {
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