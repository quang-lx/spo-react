import React, {useEffect, useState} from 'react';
import {Flex, Text, Layout, List, Avatar, ItemLayout, Button} from '@fluentui/react-northstar';
import {MoleculeIcon, PollIcon, TagIcon, TvIcon, UrgentIcon} from '@fluentui/react-icons-northstar';
import * as S from './RequestDetail.style';
import CustomScrollbars from "../../components/CustomScrollbars";
import {Comment} from "../../components/Comment";
import RequestContent from "./RequestContent";
import {useDispatch} from "react-redux";
import {IToolbarItem} from "../../interfaces/ContainerInterfaces";

const RequestDetail: React.FunctionComponent = () => {
  const [toolbarItems, setToolbarItems] = useState([
    {
      key: 'approve',
      kind: 'custom',
      content: <Button className="pl-2 pr-2" content="Phê duyệt" flat primary/>,
      fitted: 'horizontally',
      className: "ml-3"
    },
    // {
    //   key: 'forward',
    //   kind: 'custom',
    //   content: <Button className="pl-2 pr-2" content="Chuyển xử lý" flat primary tinted/>,
    //   fitted: 'horizontally',
    //   className: "ml-2"
    // },
    {
      key: 'return',
      kind: 'custom',
      content: <Button className="pl-2 pr-2" content="Trả lại" flat primary tinted/>,
      fitted: 'horizontally',
      className: "ml-2"
    },
    {
      key: 'reject',
      kind: 'custom',
      content: <Button className="pl-2 pr-2" content="Từ chối" flat primary tinted/>,
      fitted: 'horizontally',
      className: "ml-2"
    },
    {
      key: 'overview',
      kind: 'custom',
      content: <Button
        className="p-0 unset-width"
        icon={<TvIcon/>}
        content={
          <Text weight="regular">Tổng quan</Text>
        }
        flat
        text
        primary
      />,
      fitted: 'horizontally',
      className: "ml-auto"
    },
    {
      key: 'workflow',
      kind: 'custom',
      content: <Button
        className="p-0 unset-width"
        icon={<MoleculeIcon />}
        content={
          <Text weight="regular">Quy trình</Text>
        }
        flat
        text
        primary
      />,
      fitted: 'horizontally',
      className: "ml-3"
    },
    {
      key: 'task',
      kind: 'custom',
      content: <Button
        className="p-0 unset-width"
        icon={<PollIcon/>}
        content={
          <Text weight="regular">Công việc</Text>
        }
        flat
        text
        primary
      />,
      fitted: 'horizontally',
      className: "ml-3"
    }
  ] as IToolbarItem[]);

  const dispatch = useDispatch();

  useEffect(() => {

  }, [])

  return (
    <Flex column fill>
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
  return (
    <S.Content>
      <CustomScrollbars disableHorizontalScrolling={true}>
        <S.ContentInner>
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