import React from 'react';
import {Flex, Text, Layout, List, Avatar, ItemLayout} from '@fluentui/react-northstar';
import {TagIcon, UrgentIcon} from '@fluentui/react-icons-northstar';
import {TextContainerTitle} from '../../components/Text';
import * as S from './RequestDetail.style';
import CustomScrollbars from "../../components/CustomScrollbars";
import {Comment} from "../../components/Comment";
import {Follower, IFollower} from "../../components/User";
import RequestContent from "./RequestContent";

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
        <S.ContentWrapper>
          <Layout
            className="h-100 layout-inner-full-height"
            alignItems="start"
            main={<RequestDetailContent/>}
          />
        </S.ContentWrapper>
      </Flex.Item>
    </Flex>
  );
}

const RequestDetailContent: React.FunctionComponent = () => {
  const items = [
    {
      key: 'ykien',
      header: <Text content="Tóm tắt đề xuất" size="small" weight="semibold"/>,
      content: <Text as="p" size="medium" className="text-pre-wrap">
        Kính trình CEO và ban giám đốc.
        <br/>BP.XDMN trình phát sinh lần 1 công trình Jiang Hu Aeon Mall Tân Phú.
        <br/>- Phát sinh tăng hạng mục xây dựng, nội thất, M&E ( điều chỉnh BOQ cho phù hợp): 121.914.600đ
        <br/>- Phát sinh tăng hạng mục quảng cáo ( do thay đổi thiết kế sau khi chốt BOQ) : 11.520.000đ
        <br/>- Phát sinh giảm: -93.072.500đ
        <br/>= Tổng phát sinh tăng giảm theo đơn giá dự kiến: 40.362.100đ (chưa VAT) (như file đính kèm : Biên bản hiện trường, BOQ phát sinh ).
        <br/>
        <br/>Kính trình anh chị xét duyệt.
      </Text>,
      className: "mb-2"
    }
  ];

  return (
    <S.Content>
      <CustomScrollbars disableHorizontalScrolling={true}>
        <S.ContentInner>
          {/*<List items={items}/>*/}
          {/*<S.FollowerWrapper>*/}
          {/*  <Follower list={followers}/>*/}
          {/*</S.FollowerWrapper>*/}
          <RequestContent/>
          <Comment/>
        </S.ContentInner>
      </CustomScrollbars>
    </S.Content>
  )
}

const RequestDetailAdditionInfo: React.FunctionComponent = () => {
  const items = [
    {
      key: 'y-kien-title',
      header: <Text content="Ý KIẾN CHỈ ĐẠO" size="medium" weight="semibold" color="brand"/>,
      className: 'unset-height mb-2'
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
      header: <Text content="CHI TIẾT" size="medium" weight="semibold"/>,
      className: 'unset-height mt-5 mb-2'
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
          <Avatar image="https://i.ibb.co/Vjq1gg7/148714090-3979558975396760-8986126341265647886-n.jpg"/>
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
      header: <Text content="THÔNG TIN THÊM" size="medium" weight="semibold"/>,
      className: 'unset-height mt-5 mb-2'
    },
    {
      key: 'nt',
      header: <Text content="Người trình" size="small" weight="semibold"/>,
      content: <ItemLayout
        className="pl-0"
        media={
          <Avatar
            image="https://yt3.ggpht.com/ytc/AKedOLTebUysiOUr2VCeE1wqYTQkrVM00kZZO2CgnL7t9g=s900-c-k-c0x00ffffff-no-rj"
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
    {
      key: 'loai-van-ban',
      header: <Text content="Loại văn bản" size="small" weight="semibold"/>,
      content: <Text size="medium" content="Tờ trình đề xuất"/>,
      className: "mb-2"
    }
  ]

  return (
    <S.AdditionInfo>
      <CustomScrollbars disableHorizontalScrolling={true}>
        <S.AdditionInfoInner>
          <List items={items}/>
        </S.AdditionInfoInner>
      </CustomScrollbars>
    </S.AdditionInfo>
  )
}

export default RequestDetail;