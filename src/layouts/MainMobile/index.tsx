import * as React from 'react';
import HeaderMobile from "../../containers/HeaderMobile";
import Footer from "../../containers/Footer";
import AppMenu from "../../containers/AppMenu";
import MainContainer from "../../containers/MainContainer";
import { Flex } from '@fluentui/react-northstar';
import { Outlet } from 'react-router-dom';

interface MainLayoutMobileProps {

}

const MainLayoutMobile: React.FunctionComponent<MainLayoutMobileProps> = (props) => {
  return (
    <Flex column fill>
      <Flex.Item size="size.large">
        <HeaderMobile />
      </Flex.Item>
      <Flex.Item size="size.large" grow>
        <MainContainer {...props}>
          <Outlet />
        </MainContainer>
      </Flex.Item>
      <Flex.Item size="size.large">
        <Footer />
      </Flex.Item>
    </Flex>
  );
}

export default MainLayoutMobile;