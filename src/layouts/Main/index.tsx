import * as React from 'react';
import Header from "../../containers/Header";
import Menu from "../../containers/Menu";
import MainContainer from "../../containers/MainContainer";
import { Flex } from '@fluentui/react-northstar';

interface MainLayoutProps {

}

const MainLayout: React.FunctionComponent<MainLayoutProps> = (props) => {
    const { children } = props
    return (
      <Flex column>
        <Flex.Item size="size.large">
          <Header {...props} />
        </Flex.Item>
        <Flex.Item size="size.large" align="stretch">
          <Flex>
            <Flex.Item className="app-menu">
              <Menu {...props} />
            </Flex.Item>
            <Flex.Item className="app-content">
              <MainContainer {...props}>
                {children}
              </MainContainer>
            </Flex.Item>
          </Flex>
        </Flex.Item>
      </Flex>
    );
}

export default MainLayout;