import * as React from 'react';
import SubMenu from "../../containers/SubMenu";
import Container from "../../containers/Container";
import { Flex } from '@fluentui/react-northstar';
import { Outlet } from 'react-router-dom';

interface SubMenuLayoutProps {

}

const SunMenuLayout: React.FunctionComponent<SubMenuLayoutProps> = (props) => {
    return (
      <Flex column fill>
        <Flex.Item size="size.large" grow>
          <Flex className="h-100">
            <Flex.Item>
              <SubMenu {...props} />
            </Flex.Item>
            <Flex.Item grow>
              <Flex column>
                <Container {...props}>
                  <Outlet />
                </Container>
              </Flex>
            </Flex.Item>
          </Flex>
        </Flex.Item>
      </Flex>
    );
}

export default SunMenuLayout;