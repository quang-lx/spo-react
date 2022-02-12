import * as React from 'react';
import Header from "../../containers/Header";
import Menu from "../../containers/Menu";
import SubMenu from "../../containers/SubMenu";
import MainContainer from "../../containers/MainContainer";
import { Flex } from '@fluentui/react-northstar';

interface SubMenuLayoutProps {

}

const MainLayout: React.FunctionComponent<SubMenuLayoutProps> = (props) => {
    const { children } = props
    return (
      <Flex column>
        <Flex.Item size="size.large" align="stretch">
          <Flex>
            <Flex.Item className="app-menu">
              <SubMenu {...props} />
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