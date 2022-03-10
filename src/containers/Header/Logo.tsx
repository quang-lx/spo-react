import * as S from "./Header.style";
import {Text} from "@fluentui/react-northstar";
import React from "react";

interface LogoProps {

}

const Logo: React.FunctionComponent<LogoProps> = () => {
  return (
    <S.LogoWrapper>
      {/*<Text content="SPSVN" size="large" color="white" weight="semibold" className="ml-3"/>*/}
    </S.LogoWrapper>
  )
}

export default Logo;