import * as React from 'react';
import Header from "../../containers/Header";
import Menu from "../../containers/Menu";
import MainContainer from "../../containers/MainContainer";
import { Flex } from '@fluentui/react-northstar';

interface MainLayoutLayoutProps {

}

const MainLayout: React.FunctionComponent<MainLayoutLayoutProps> = (props) => {
    const { children } = props
    return (
      <Flex column>
        <Flex.Item size="size.large">
          <Header {...props} />
        </Flex.Item>
        <Flex.Item size="size.large">
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