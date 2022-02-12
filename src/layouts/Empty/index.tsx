import * as React from 'react';
import * as S from './style';
interface EmptyLayoutProps {

}

const EmptyLayout: React.FunctionComponent<EmptyLayoutProps> = (props) => {
  const { children } = props
  return (
    <S.MainContainer>
      {children}
    </S.MainContainer>
  );
}

export default EmptyLayout;