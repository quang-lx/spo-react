import React from 'react';
import { Flex, Text } from '@fluentui/react-northstar';
import {} from '@fluentui/react-icons-northstar';
import {TextContainerTitle} from '../../components/Text';

const RequestDetail: React.FunctionComponent = () => {

  return (
    <Flex column>
      <Flex.Item>
        <TextContainerTitle>
          <Text
            size="large"
            content="Phát sinh tăng hạng mục xây dựng, nội thất, m&e ( điều chỉnh boq cho phù hợp): 121.914.600đ - phát sinh tăng hạng mục quảng cáo ( do thay đổi thiết kế sau khi chốt boq) : 11.520.000đ"
            weight="semibold"
          />
        </TextContainerTitle>
      </Flex.Item>
      <Flex.Item>
        <div></div>
      </Flex.Item>
    </Flex>
  );
}

export default RequestDetail;