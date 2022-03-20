import React, {useEffect} from 'react';
import * as S from './SubMenu.style';
import {Flex} from '@fluentui/react-northstar';
import SmallSubMenuToolbar from "./SmallSubMenuToolbar";
import SmallSubMenu from "./SmallSubMenu";
import BigSubMenu from "./BigSubMenu";
import BigSubMenuToolbar from "./BigSubMenuToolbar";
import {SubMenuProps} from "../../interfaces/SubMenuInterfaces";
import {RootState} from "../../store";
import {useSelector} from "react-redux";

export const SubMenu: React.FunctionComponent<SubMenuProps> = (props) => {
  // const { children, to, className } = props
  const {open} = useSelector((state: RootState) => state.subMenuReducer.smallSubMenu);

  useEffect(() => {

  },[open])

  return (
    <S.SubMenuBlock className={`sub-menu-block ${open ? 'active-small-sub-menu' : ''}`}>
      <Flex className="h-100" column>
        <Flex.Item>
          <S.SubMenuToolbar>
            <S.SubMenuToolbarContent>
              <Flex className="h-100" vAlign="center">
                <Flex.Item>
                  <S.SmallSubMenuToolbarInner className="small-sub-menu-toolbar-inner">
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
              <S.SmallSubMenuBlock className="small-sub-menu-block">
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
