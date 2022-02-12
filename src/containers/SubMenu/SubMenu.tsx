import React from 'react';
import * as S from './SubMenu.style';

interface MenuProps {

}

export const SubMenu: React.FunctionComponent<MenuProps> = (props) => {
  // const { children, to, className } = props
  return (
    <S.MenuBlock>
      sub menu
    </S.MenuBlock>
  );
}