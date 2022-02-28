import React from 'react';
import * as S from './SubMenu.style';
import {Flex, Button, Menu, Toolbar, Tree} from '@fluentui/react-northstar';
import {MenuIcon, BookmarkIcon, WordIcon, TriangleDownIcon, TriangleEndIcon} from '@fluentui/react-icons-northstar';

interface SubMenuProps {

}

export const SubMenu: React.FunctionComponent<SubMenuProps> = (props) => {
  // const { children, to, className } = props
  return (
    <S.SubMenuBlock>
      <Flex className="h-100" column>
        <Flex.Item>
          <S.SubMenuButtonsBlock>
            <S.SubMenuButtonsBlockContent>
              <Flex className="h-100" vAlign="center">
                <Flex.Item>
                  <S.SmallSubMenuButtonsBlock>
                    <SmallSubMenuButtons/>
                  </S.SmallSubMenuButtonsBlock>
                </Flex.Item>
                <Flex.Item>
                  <S.BigSubMenuButtonsBlock>
                    big buttons
                  </S.BigSubMenuButtonsBlock>
                </Flex.Item>
              </Flex>
            </S.SubMenuButtonsBlockContent>
          </S.SubMenuButtonsBlock>
        </Flex.Item>
        <Flex.Item>
          <Flex className="h-100">
            <Flex.Item>
              <S.SmallSubMenuBlock>
                small sub menu
              </S.SmallSubMenuBlock>
            </Flex.Item>
            <Flex.Item>
              <S.BigSubMenuBlock>
                big sub menu
              </S.BigSubMenuBlock>
            </Flex.Item>
          </Flex>
        </Flex.Item>
      </Flex>
    </S.SubMenuBlock>
  );
}

export const SmallSubMenuButtons = () => {
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

export const SmallSubMenu = () => {
  const items = [
    {
      icon: (
        <BookmarkIcon
          {...{
            outline: true,
          }}
        />
      ),
      key: 'editorials',
      content: 'Editorials',
    },
    {
      icon: <WordIcon {...{}} />,
      key: 'review',
      content: 'Reviews',
    },
    {
      key: 'events',
      content: 'Upcoming Events',
    }
  ];

  return (
    <Menu defaultActiveIndex={0} items={items} vertical/>
  )
}
