import React from 'react';
import {Flex, Text, Layout, List, Avatar, ItemLayout, Image} from '@fluentui/react-northstar';
import {TagIcon, UrgentIcon} from '@fluentui/react-icons-northstar';
import {TextContainerTitle} from '../../components/Text';
import * as S from './RequestDetail.style';
import CustomScrollbars from "../../components/CustomScrollbars";

const RequestDetail: React.FunctionComponent = () => {

  return (
    <Flex column fill>
      <Flex.Item>
        <TextContainerTitle>
          <Text
            size="large"
            content="Phát sinh tăng hạng mục xây dựng, nội thất, m&e ( điều chỉnh boq cho phù hợp): 121.914.600đ - phát sinh tăng hạng mục quảng cáo ( do thay đổi thiết kế sau khi chốt boq) : 11.520.000đ"
            weight="semibold"
          />
        </TextContainerTitle>
      </Flex.Item>
      <Flex.Item grow>
        <CustomScrollbars disableHorizontalScrolling={true}>
          <S.ContentWrapper>
            <Layout
              gap="0.5rem"
              alignItems="start"
              main={<RequestDetailContent/>}
              end={<RequestDetailAdditionInfo/>}
            />
          </S.ContentWrapper>
        </CustomScrollbars>
      </Flex.Item>
    </Flex>
  );
}

const RequestDetailContent: React.FunctionComponent = () => {

  return (
    <S.Content></S.Content>
  )
}

const RequestDetailAdditionInfo: React.FunctionComponent = () => {
  const items = [
    {
      key: 'y-kien-title',
      header: <Text content="Ý KIẾN CHỈ ĐẠO" size="medium" weight="semibold" color="brand"/>
    },
    {
      key: 'ykien',
      content: <Text size="medium">
        Đồng ý.
        <br/>
        <Text content="@Ngô Hoàng Nam" atMention/> thực hiện chỉ đạo.
        <br/>
        <Text content="@Nguyễn Mạnh Cường" atMention="me"/> theo dõi và báo cáo.
      </Text>,
      className: "mb-2"
    },
    {
      key: 'chi-tiet',
      header: <Text content="CHI TIẾT" size="medium" weight="semibold"/>
    },
    {
      key: 'trang-thai',
      header: <Text content="Trạng thái" size="small" weight="semibold"/>,
      content: <Text color="orange" content="Chờ Chủ tịch HĐQT phê duyệt" size="medium"/>,
      className: "mb-2"
    },
    {
      key: 'nxl',
      header: <Text content="Người xử lý" size="small" weight="semibold"/>,
      content: <ItemLayout
        className="pl-0"
        media={
          <Image
            src="https://i.ibb.co/Vjq1gg7/148714090-3979558975396760-8986126341265647886-n.jpg"
            avatar
          />
        }
        header="Trần Đình Thủy"
        content="thuy@spsvn.com"
      />,
      className: "mb-2"
    },
    {
      key: 'thoi-han-xu-ly',
      header: <Text content="Thời hạn xử lý" size="small" weight="semibold"/>,
      content: <Text size="medium">
        <Text color="red" className="pr-2"><UrgentIcon size="small"/></Text>11:30 06/03/2022
      </Text>,
      className: "mb-2"
    },
    {
      key: 'nhan',
      header: <Text content="Nhãn" size="small" weight="semibold"/>,
      content: <Text size="medium">
        <Text color="red"><TagIcon size="smaller"/></Text> Khẩn cấp
      </Text>,
      className: "mb-2"
    },
    {
      key: 'cap-phe-duyet',
      header: <Text content="Cấp phê duyệt" size="small" weight="semibold"/>,
      content: <Text size="medium">
        HĐQT
      </Text>,
      className: "mb-2"
    },
    {
      key: 'thong-tin-them',
      header: <Text content="THÔNG TIN THÊM" size="medium" weight="semibold"/>
    },
    {
      key: 'nt',
      header: <Text content="Người trình" size="small" weight="semibold"/>,
      content: <ItemLayout
        className="pl-0"
        media={
          <Image
            src="https://yt3.ggpht.com/ytc/AKedOLTebUysiOUr2VCeE1wqYTQkrVM00kZZO2CgnL7t9g=s900-c-k-c0x00ffffff-no-rj"
            avatar
          />
        }
        header="Nguyễn Mạnh Cường"
        content="cuongnm@spsvn.com"
      />,
      className: "mb-2"
    },
    {
      key: 'thoi-han-trinh',
      header: <Text content="Thời gian trình" size="small" weight="semibold"/>,
      content: <Text size="medium" content="17:30 05/03/2022"/>,
      className: "mb-2"
    },
    {
      key: 'linh-vuc',
      header: <Text content="Lĩnh vực" size="small" weight="semibold"/>,
      content: <Text size="medium" content="Marketing"/>,
      className: "mb-2"
    },
  ]

  return (
    <S.AdditionInfo>
      <List items={items}/>
    </S.AdditionInfo>
  )
}

export default RequestDetail;