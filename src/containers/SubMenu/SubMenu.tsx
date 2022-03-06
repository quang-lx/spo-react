import React from 'react';
import * as S from './SubMenu.style';
import {Flex} from '@fluentui/react-northstar';
import SmallSubMenuToolbar from "./SmallSubMenuToolbar";
import SmallSubMenu from "./SmallSubMenu";
import BigSubMenu from "./BigSubMenu";
import BigSubMenuToolbar from "./BigSubMenuToolbar";

interface SubMenuProps {

}

export const SubMenu: React.FunctionComponent<SubMenuProps> = (props) => {
  // const { children, to, className } = props
  return (
    <S.SubMenuBlock className="reserve-flex-width">
      <Flex className="h-100" column>
        <Flex.Item>
          <S.SubMenuToolbar>
            <S.SubMenuToolbarContent>
              <Flex className="h-100" vAlign="center">
                <Flex.Item>
                  <S.SmallSubMenuToolbarInner>
                    <SmallSubMenuToolbar/>
                  </S.SmallSubMenuToolbarInner>
                </Flex.Item>
                <Flex.Item>
                  <S.BigSubMenuToolbarInner>
                    <BigSubMenuToolbar/>
                  </S.BigSubMenuToolbarInner>
                </Flex.Item>
              </Flex>
            </S.SubMenuToolbarContent>
          </S.SubMenuToolbar>
        </Flex.Item>
        <Flex.Item>
          <Flex className="h-100">
            <Flex.Item>
              <S.SmallSubMenuBlock>
                <SmallSubMenu/>
              </S.SmallSubMenuBlock>
            </Flex.Item>
            <Flex.Item>
              <S.BigSubMenuBlock>
                <BigSubMenu/>
              </S.BigSubMenuBlock>
            </Flex.Item>
          </Flex>
        </Flex.Item>
      </Flex>
    </S.SubMenuBlock>
  );
}
