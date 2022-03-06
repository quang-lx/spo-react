import * as React from 'react';
import * as S from './Flex.style';

interface ReserveFlexWidthProps {

}

const ReserveFlexWidth: React.FunctionComponent<ReserveFlexWidthProps> = (props) => {
  const {children} = props;

  return (
    <S.ReserveFlexWidth>
      {children}
    </S.ReserveFlexWidth>
  );
}

export default ReserveFlexWidth;