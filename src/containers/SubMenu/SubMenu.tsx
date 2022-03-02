import React from 'react';
import * as S from './SubMenu.style';
import {Flex} from '@fluentui/react-northstar';
import SmallSubMenuButtons from "./SmallSubMenuButtons";
import SmallSubMenu from "./SmallSubMenu";
import BigSubMenu from "./BigSubMenu";

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
