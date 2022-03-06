import * as React from 'react';
import SubMenu from "../../containers/SubMenu";
import Container from "../../containers/Container";
import { Flex } from '@fluentui/react-northstar';
import { Outlet } from 'react-router-dom';

interface SubMenuLayoutProps {

}

const SubMenuLayout: React.FunctionComponent<SubMenuLayoutProps> = (props) => {
    return (
      <Flex fill className="layout-has-submenu">
        <Flex.Item  className="layout-submenu">
          <SubMenu {...props} />
        </Flex.Item>
        <Flex.Item grow className="layout-container">
          <Flex column>
            <Container {...props}>
              <Outlet />
            </Container>
          </Flex>
        </Flex.Item>
      </Flex>
    );
}

export default SubMenuLayout;