import React from 'react';
import * as S from './SubMenu.style';

interface SubMenuProps {

}

export const SubMenu: React.FunctionComponent<SubMenuProps> = (props) => {
  // const { children, to, className } = props
  return (
    <S.MenuBlock>
      sub menu
    </S.MenuBlock>
  );
}