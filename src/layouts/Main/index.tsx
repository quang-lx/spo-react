import * as React from 'react';
import Header from "../../containers/Header";
import Menu from "../../containers/Menu";
import MainContainer from "../../containers/MainContainer";
import { Flex } from '@fluentui/react-northstar';
import { Outlet } from 'react-router-dom';

interface MainLayoutProps {

}

const MainLayout: React.FunctionComponent<MainLayoutProps> = (props) => {
    return (
      <Flex column>
        <Flex.Item size="size.large">
          <Header {...props} />
        </Flex.Item>
        <Flex.Item size="size.large">
          <Flex>
            <Flex.Item>
              <Menu {...props} />
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