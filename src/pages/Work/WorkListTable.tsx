import {Table, Button, Flex, MenuButton, Checkbox, Text, Avatar, ItemLayout} from '@fluentui/react-northstar';
import {
  gridNestedBehavior,
  gridCellWithFocusableElementBehavior,
  gridCellMultipleFocusableBehavior,
} from '@fluentui/accessibility';
import * as React from 'react';
import {MoreIcon} from '@fluentui/react-icons-northstar';
import {Icon} from "../../components/Icon";
import {Follower, IFollower} from "../../components/User"

const WorkListTableHeader = () => {

}

const WorkListTable: React.FunctionComponent = () => {
  const followers: IFollower[] = [
    {
      avatar: "https://i.ibb.co/Vjq1gg7/148714090-3979558975396760-8986126341265647886-n.jpg",
      name: "Trần Đình Thủy"
    },
    {
      avatar: "https://i.ibb.co/jL8msg3/271914657-2051122095047442-6201605861733351206-n.jpg",
      name: "Nguyễn Như Hiếu"
    },
    {
      avatar: "https://i.ibb.co/tZcDv99/236285939-3308320666067112-4201085366173673459-n.jpg",
      name: "Trần Hoàng Huy"
    },
    {
      name: "+ 5"
    }
  ]

  const followers2: IFollower[] = [
    {
      avatar: "https://i.ibb.co/KyZKy3Z/unnamed.jpg",
      name: "Nguyễn Mạnh Cường"
    }
  ]

  const handleRowClick = (index) => {
    // alert(`OnClick on the row ${index} executed.`);
  }

  const header = {
    key: 'header',
    items: [
      {content: <Checkbox/>, key: 'id', className: "col-checkbox"},
      {className: "col-title", content: <Button fluid className={"table-header-button"} content={<Text weight={"regular"} content={"Tiêu đề"}/>} text flat icon={<Icon name={"ArrowDownIcon"}/>} iconPosition={"after"}/>, key: 'title'},
      {className: "col-resource", content: <Button className={"table-header-button"} content={<Text weight={"regular"} content={"Người xử lý"}/>} text flat/>, key: 'pic'},
      {className: "col-source", content: <Button className={"table-header-button"} content={<Text weight={"regular"} content={"Nguồn công việc"}/>} text flat/>, key: 'action'},
      {className: "col-priority", content: <Button className={"table-header-button"} content={<Text weight={"regular"} content={"Mức độ"}/>} text flat/>, key: 'tags'},
      {className: "col-due", content: <Button className={"table-header-button"} content={<Text weight={"regular"} content={"Thời hạn"}/>} text flat/>, key: 'due'},
      {className: "col-status", content: <Button className={"table-header-button"} content={<Text weight={"regular"} content={"Trạng thái"}/>} text flat/>, key: 'status'},
      {key: 'more options', 'aria-label': 'options', className: "col-more"},
    ],
    className: "work-list-table-header"
  };

  const moreOptionCell = {
    content: <Button tabIndex={-1} icon={<MoreIcon/>} circular text iconOnly title="More options"/>,
    truncateContent: true,
    accessibility: gridCellWithFocusableElementBehavior,
    onClick: e => {
      // alert('more option button clicked');
      // e.stopPropagation();
    },
  };

  const moreActionCell = {
    content: (
      <Flex gap="gap.small" vAlign="center">
        <Button size="small" content="tag 1"/>
        <Button size="small" content="tag 2"/>
        {/* table layout not support now more content in the cell */}
        {/* <Button tabIndex={-1} icon="edit" circular text iconOnly title="edit tags" /> */}
      </Flex>
    ),
    accessibility: gridCellMultipleFocusableBehavior,
  };

  const contextMenuItems = ['Add to selection', 'Remove', 'Download'];

  const rowsPlain = [
    {
      key: 1,
      items: [
        {content: <Checkbox/>, key: '1-1', className: "col-checkbox"},
        {
          content: 'I. Triển khai sử dụng đầy đủ các chức năng nhập, xuất để thay thế hệ thống cũ tại ALSW',
          key: '1-2',
          truncateContent: true,
          className: "col-title"
        },
        {
          content: <Follower size={"small"} list={followers}/>,
          key: '1-3',
          className: "col-resource"
        },
        {
          content: <ItemLayout
            media={
              <Avatar size={"small"} image={"https://i.ibb.co/NmB8NNn/als.png"} square/>
            }
            header={<Text content={"[AOMS]- Triển khai hệ thống phần mềm cho Nhà ga hàng không kéo dài"} truncated/>}
            className={"p-0"}
          />,
          truncateContent: true,
          key: '3-4',
          className: "col-source"
        },
        {key: '1-8', content: <Text color={"red"}><Icon name={"RedbangIcon"}/></Text>, className: "col-priority"},
        {key: '1-5', content: <Flex gap={"gap.small"} vAlign={"center"}><Text color={"brand"} content={<Icon name={"CalendarIcon"}/>}/><Text content={"31/03"}/></Flex>, className: "col-due"},
        {key: '1-6', content: "Đang thực hiện", className: "col-status"},
        {key: '1-7', ...moreOptionCell, className: "col-more"},
      ],
      onClick: () => handleRowClick(1),
      children: (Component, {key, ...rest}) => (
        <MenuButton menu={contextMenuItems} key={key} contextMenu trigger={<Component {...rest} />}/>
      ),
    },
    {
      key: 2,
      items: [
        {content: <Checkbox/>, key: '2-1', className: "col-checkbox"},
        {
          content: 'II. Triển khai sử dụng đầy đủ các chức năng nhập, xuất để thay thế hệ thống cũ tại ALSB, ALSE, CLC',
          key: '2-2',
          truncateContent: true,
          className: "col-title"
        },
        {
          content: <Follower size={"small"} list={followers}/>,
          key: '2-3',
          className: "col-resource"
        },
        {
          content: <ItemLayout
            media={
              <Avatar size={"small"} image={"https://i.ibb.co/NmB8NNn/als.png"} square/>
            }
            header={<Text content={"[AOMS]- Triển khai hệ thống phần mềm cho Nhà ga hàng không kéo dài"} truncated/>}
            className={"p-0"}
          />,
          truncateContent: true,
          key: '3-4',
          className: "col-source"
        },
        {key: '2-8', content: <Text color={"red"}><Icon name={"UrgentIcon"}/></Text>, className: "col-priority"},
        {key: '2-5', content: <Flex gap={"gap.small"} vAlign={"center"}><Text color={"brand"} content={<Icon name={"CalendarIcon"}/>}/><Text content={"31/03"}/></Flex>, className: "col-due"},
        {key: '2-6', content: "Đang thực hiện", className: "col-status"},
        {key: '2-7', ...moreOptionCell, className: "col-more"},
      ],
      onClick: () => handleRowClick(1),
      children: (Component, {key, ...rest}) => (
        <MenuButton menu={contextMenuItems} key={key} contextMenu trigger={<Component {...rest} />}/>
      ),
    },
    {
      key: 3,
      items: [
        {content: <Checkbox/>, key: '3-1', className: "col-checkbox"},
        {
          content: 'III. Triển khai các chức năng nâng cao, tích hợp với hệ thống của đối tác lớn (Samsung, ASG, eTruck...)',
          key: '3-2',
          truncateContent: true,
          className: "col-title"
        },
        {
          content: <Follower size={"small"} list={followers}/>,
          key: '3-3',
          className: "col-resource"
        },
        {
          content: <ItemLayout
            media={
              <Avatar size={"small"} image={"https://i.ibb.co/NmB8NNn/als.png"} square/>
            }
            header={<Text content={"[AOMS]- Triển khai hệ thống phần mềm cho Nhà ga hàng không kéo dài"} truncated/>}
            className={"p-0"}
          />,
          truncateContent: true,
          key: '3-4',
          className: "col-source"
        },
        {key: '3-8', content: <Text color={"green"}><Icon name={"CircleSmall20Filled"}/></Text>, className: "col-priority"},
        {key: '3-5', content: <Flex gap={"gap.small"} vAlign={"center"}><Text color={"brand"} content={<Icon name={"CalendarIcon"}/>}/><Text content={"31/03"}/></Flex>, className: "col-due"},
        {key: '3-6', content: "Đang thực hiện", className: "col-status"},
        {key: '3-7', ...moreOptionCell, className: "col-more"},
      ],
      onClick: () => handleRowClick(1),
      children: (Component, {key, ...rest}) => (
        <MenuButton menu={contextMenuItems} key={key} contextMenu trigger={<Component {...rest} />}/>
      ),
    },
    {
      key: 100,
      items: [
        {content: <Checkbox/>, key: '3-1', className: "col-checkbox"},
        {
          content: 'I. Xây dựng yêu cầu kỹ thuật và hồ sơ mời thầu/chào giá',
          key: '100-2',
          truncateContent: true,
          className: "col-title"
        },
        {
          content: <Follower size={"small"} list={followers2}/>,
          key: '100-3',
          className: "col-resource"
        },
        {
          content: <ItemLayout
            media={
              <Avatar size={"small"} image={"https://i.ibb.co/mX5h4h5/vpi.png"} square/>
            }
            header="Dự án Ảo hóa"
            className={"p-0"}
          />,
          truncateContent: true,
          key: '100-4',
          className: "col-source"
        },
        {key: '100-8', content: <Text color={"brand"}><Icon name={"ArrowDownIcon"}/></Text>, className: "col-priority"},
        {key: '100-5', content: <Flex gap={"gap.small"} vAlign={"center"}><Text color={"brand"} content={<Icon name={"CalendarIcon"}/>}/><Text content={"31/03"}/></Flex>, className: "col-due"},
        {key: '100-6', content: "Đang thực hiện", className: "col-status"},
        {key: '100-7', ...moreOptionCell, className: "col-more"},
      ],
      onClick: () => handleRowClick(100),
      children: (Component, {key, ...rest}) => (
        <MenuButton menu={contextMenuItems} key={key} contextMenu trigger={<Component {...rest} />}/>
      ),
    },
    {
      key: 101,
      items: [
        {content: <Checkbox/>, key: '101-1', className: "col-checkbox"},
        {
          content: 'II. Đấu thầu/ chào giá cạnh tranh - lựa chọn nhà thầu, ký kết HĐ',
          key: '101-2',
          truncateContent: true,
          className: "col-title"
        },
        {
          content: <Follower size={"small"} list={followers2}/>,
          key: '101-3',
          className: "col-resource"
        },
        {
          content: <ItemLayout
            media={
              <Avatar size={"small"} image={"https://i.ibb.co/mX5h4h5/vpi.png"} square/>
            }
            header="Dự án Ảo hóa"
            className={"p-0"}
          />,
          truncateContent: true,
          key: '101-4',
          className: "col-source"
        },
        {key: '101-8', content: <Text color={"red"}><Icon name={"RedbangIcon"}/></Text>, className: "col-priority"},
        {key: '101-5', content: <Flex gap={"gap.small"} vAlign={"center"}><Text color={"brand"} content={<Icon name={"CalendarIcon"}/>}/><Text content={"31/03"}/></Flex>, className: "col-due"},
        {key: '101-6', content: "Đang thực hiện", className: "col-status"},
        {key: '101-7', ...moreOptionCell, className: "col-more"},
      ],
      onClick: () => handleRowClick(100),
      children: (Component, {key, ...rest}) => (
        <MenuButton menu={contextMenuItems} key={key} contextMenu trigger={<Component {...rest} />}/>
      ),
    },
    {
      key: 102,
      items: [
        {content: <Checkbox/>, key: '102-1', className: "col-checkbox"},
        {
          content: 'III. Thực hiện / triển khai',
          key: '102-2',
          truncateContent: true,
          className: "col-title"
        },
        {
          content: <Follower size={"small"} list={followers2}/>,
          key: '102-3',
          className: "col-resource"
        },
        {
          content: <ItemLayout
            media={
              <Avatar size={"small"} image={"https://i.ibb.co/mX5h4h5/vpi.png"} square/>
            }
            header="Dự án Ảo hóa"
            className={"p-0"}
          />,
          truncateContent: true,
          key: '102-4',
          className: "col-source"
        },
        {key: '102-8', content: <Text color={"red"}><Icon name={"RedbangIcon"}/></Text>, className: "col-priority"},
        {key: '102-5', content: <Flex gap={"gap.small"} vAlign={"center"}><Text color={"brand"} content={<Icon name={"CalendarIcon"}/>}/><Text content={"31/03"}/></Flex>, className: "col-due"},
        {key: '102-6', content: "Đang thực hiện", className: "col-status"},
        {key: '102-7', ...moreOptionCell, className: "col-more"},
      ],
      onClick: () => handleRowClick(100),
      children: (Component, {key, ...rest}) => (
        <MenuButton menu={contextMenuItems} key={key} contextMenu trigger={<Component {...rest} />}/>
      ),
    },
    {
      key: 103,
      items: [
        {content: <Checkbox/>, key: '103-1', className: "col-checkbox"},
        {
          content: 'IV. Nghiệm thu dự án',
          key: '103-2',
          truncateContent: true,
          className: "col-title"
        },
        {
          content: <Follower size={"small"} list={followers2}/>,
          key: '103-3',
          className: "col-resource"
        },
        {
          content: <ItemLayout
            media={
              <Avatar size={"small"} image={"https://i.ibb.co/mX5h4h5/vpi.png"} square/>
            }
            header="Dự án Ảo hóa"
            className={"p-0"}
          />,
          truncateContent: true,
          key: '103-4',
          className: "col-source"
        },
        {key: '103-8', content: <Text color={"red"}><Icon name={"RedbangIcon"}/></Text>, className: "col-priority"},
        {key: '103-5', content: <Flex gap={"gap.small"} vAlign={"center"}><Text color={"brand"} content={<Icon name={"CalendarIcon"}/>}/><Text content={"31/03"}/></Flex>, className: "col-due"},
        {key: '103-6', content: "Đang thực hiện", className: "col-status"},
        {key: '103-7', ...moreOptionCell, className: "col-more"},
      ],
      onClick: () => handleRowClick(100),
      children: (Component, {key, ...rest}) => (
        <MenuButton menu={contextMenuItems} key={key} contextMenu trigger={<Component {...rest} />}/>
      ),
    }
  ];

  return (
    <Table
      className={"work-list-table"}
      variables={{cellContentOverflow: 'none'}}
      header={header}
      rows={rowsPlain}
      aria-label="Nested navigation"
      accessibility={gridNestedBehavior}
    />
  )
}

export default WorkListTable;