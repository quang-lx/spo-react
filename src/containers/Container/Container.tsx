import React from 'react';
import * as S from './Container.style';
import {Flex} from '@fluentui/react-northstar';
import ContainerToolbar from "./ContainerToolbar";
import {ContainerContent, ContainerToolbarInner} from "./Container.style";
import {ContainerProps} from "../../interfaces/ContainerInterfaces";

export const Container: React.FunctionComponent<ContainerProps> = (props) => {
  const {children} = props
  return (
    <S.ContainerBlock>
      <Flex className="h-100" column>
        <Flex.Item>
          <S.ContainerToolbarWrapper>
            <ContainerToolbarInner>
              <Flex className="h-100" vAlign="center">
                <ContainerToolbar/>
              </Flex>
            </ContainerToolbarInner>
          </S.ContainerToolbarWrapper>
        </Flex.Item>
        <Flex.Item>
          <ContainerContent>
            {children}
          </ContainerContent>
        </Flex.Item>
      </Flex>
    </S.ContainerBlock>
  );
}