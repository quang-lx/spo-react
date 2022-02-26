import * as React from 'react';
import Header from "../../containers/Header";
import AppMenu from "../../containers/AppMenu";
import MainContainer from "../../containers/MainContainer";
import { Flex } from '@fluentui/react-northstar';
import { Outlet } from 'react-router-dom';

interface MainLayoutProps {

}

const MainLayout: React.FunctionComponent<MainLayoutProps> = (props) => {
    return (
      <Flex column fill>
        <Flex.Item size="size.large">
          <Header {...props} />
        </Flex.Item>
        <Flex.Item size="size.large" grow>
          <Flex fill>
            <Flex.Item>
              <AppMenu {...props} />
            </Flex.Item>
            <Flex.Item>
              <MainContainer {...props}>
                <Outlet />
              </MainContainer>
            </Flex.Item>
          </Flex>
        </Flex.Item>
      </Flex>
    );
}

export default MainLayout;