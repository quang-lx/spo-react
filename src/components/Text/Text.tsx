import * as React from 'react';
import * as S from './Text.style';

interface TextProps {

}

export const TextContainerTitle: React.FunctionComponent<TextProps> = (props) => {
  const {children} = props

  return (
    <S.TextContainerTitle>
      {children}
    </S.TextContainerTitle>
  );
}