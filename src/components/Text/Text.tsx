import * as React from 'react';
import * as S from './Text.style';
import {useFluentContext} from '@fluentui/react-northstar';

interface TextProps {

}

export const TextContainerTitle: React.FunctionComponent<TextProps> = (props) => {
  const {children} = props
  const fluentContext = useFluentContext();
  const styles = {
    color: fluentContext.theme.siteVariables.naturalColors.grey[600]
  }

  return (
    <S.TextContainerTitle className="test-color">
      {children}
    </S.TextContainerTitle>
  );
}