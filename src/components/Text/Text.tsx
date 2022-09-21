import * as React from 'react';
import * as S from './Text.style';

interface TextProps {
  className?: string
}

export const TextContainerTitle: React.FunctionComponent<TextProps> = (props) => {
  const {children, className} = props

  return (
    <S.TextContainerTitle className={className}>
      {children}
    </S.TextContainerTitle>
  );
}