import React from 'react';
import * as S from './SubMenu.style';

interface SubMenuProps {

}

export const SubMenu: React.FunctionComponent<SubMenuProps> = (props) => {
  // const { children, to, className } = props
  return (
    <S.SubMenuBlock>
      <div className="app-sub-menu h-100">Sub Menu</div>
    </S.SubMenuBlock>
  );
}