import * as React from "react";
import {Flex, Text, ItemLayout, Avatar, Accordion} from "@fluentui/react-northstar";
import {
  TagIcon,
  UrgentIcon,
  ShiftActivityIcon,
  WordColorIcon,
  ExcelColorIcon,
  PowerPointColorIcon, FilesPdfIcon
} from "@fluentui/react-icons-northstar";
import * as S from "./RequestDetail.style";
import {Follower, IFollower} from "../../components/User";
import {TextContainerTitle} from '../../components/Text';
import {IRequestDetailItem, IRequestDetailItems} from "../../interfaces/RequestInterfaces";
import {CommentInputAttachment} from "../../components/Comment/CommentInput";

interface RequestContentProps {

}

const RequestContent: React.FunctionComponent<RequestContentProps> = (props) => {
  const followers: IFollower[] = [
    {
      avatar: "https://i.ibb.co/Vjq1gg7/148714090-3979558975396760-8986126341265647886-n.jpg"
    },
    {
      avatar: "https://i.ibb.co/jL8msg3/271914657-2051122095047442-6201605861733351206-n.jpg"
    },
    {
      avatar: "https://i.ibb.co/tZcDv99/236285939-3308320666067112-4201085366173673459-n.jpg"
    },
    {
      name: "+ 5"
    }
  ]

  const files = [
    {
      key: "f1",
      icon: <WordColorIcon/>,
      header: "File word File word File word File word.docx"
    },
    {
      key: "f2",
      icon: <ExcelColorIcon/>,
      header: "File excel.xlsx"
    },
    {
      key: "f3",
      icon: <PowerPointColorIcon/>,
      header: "File powerpoint.pptx"
    },
    {
      key: "f4",
      icon: <FilesPdfIcon/>,
      header: "File pdf.pdf"
    }
  ]

  const approvement = [
    {
      key: 'approvement',
      title: <Text content={"Nội dung"} weight={"semibold"} size={"small"}/>,
      content: <DetailItems
        items={[
          {
            key: "y-kien-chi-dao",
            title: <Text content={"Nội dung phê duyệt"} color={"brand"}/>,
            content: <Text size="medium">
              Đồng ý.
              <br/>
              <Text content="@Ngô Hoàng Nam" atMention/> <Text content="@Nguyễn Như Hiếu" atMention/> thực hiện chỉ đạo.
              <br/>
              <Text content="@Nguyễn Mạnh Cường" atMention="me"/> theo dõi và báo cáo.
            </Text>
          },
          {
            key: "thoi-gian-phe-duyet",
            title: "Thời gian phê duyệt",
            content: "11:30 06/03/2022"
          },
          {
            key: "nguoi-phe-duyet",
            title: "Người phê duyệt",
            content: <ItemLayout
              className="pl-0"
              media={
                <Avatar image="https://i.ibb.co/Vjq1gg7/148714090-3979558975396760-8986126341265647886-n.jpg"/>
              }
              header="Trần Đình Thủy"
              content="thuy@spsvn.com"
            />,
            align: "center"
          },
          {
            key: "tom-tat",
            title: "Nội dung yêu cầu",
            content: <p className={"request-description"}>
              {`Trong thời gian triển khai thực tế sản phẩm, tổ triển khai dự án thuộc TNTECH đã có một số hoạt động để thu thập, phân tích; qua đó đưa ra những đánh giá căn bản về sản phẩm trong giai đoạn 1 như sau:
•   Giao diện phần mềm khó sử dụng cho người dùng.
•   Chưa tối ưu cho việc phát triển tích hợp các ứng dụng công nghệ mở
•   Không đủ khả năng giải quyết bài toán tổng thể của doanh nghiệp
•   Dữ liệu không tập trung, khó quản lý
•   Sản phẩm đóng gói, khó cho việc tùy chỉnh theo nhu cầu của người dùng.
•   Phiên bản mobile còn hạn chế`}
            </p>
          }
        ]}
      />
    }
  ]

  const importantDetails = [
    {
      key: 'important-details',
      title: <Text content={"Chi tiết"} weight={"semibold"} size={"small"}/>,
      content: <DetailItems items={[
        {
          key: 'cap-phe-duyet',
          title: "Cấp phê duyệt",
          content: "HĐQT"
        },
        {
          key: "nhan",
          title: "Nhãn",
          content: <Text size="medium">
            <Text color="red" className="pr-2"><TagIcon size="smaller"/></Text> Khẩn cấp
          </Text>
        },
        {
          key: "thoi-han-xu-ly",
          title: "Thời hạn xử lý",
          content: <Text size="medium">
            <Text color="red" className="pr-2"><UrgentIcon size="small"/></Text>11:30 06/03/2022
          </Text>
        },
        {
          key: "nxl",
          title: "Người xử lý",
          content: <ItemLayout
            className="pl-0"
            media={
              <Avatar image="https://i.ibb.co/Vjq1gg7/148714090-3979558975396760-8986126341265647886-n.jpg"/>
            }
            header="Trần Đình Thủy"
            content="thuy@spsvn.com"
          />,
          align: "center"
        }
      ]}/>
    }
  ]

  const extendDetails = [
    {
      key: 'extend-details',
      title: <Text content={"Thông tin thêm"} weight={"semibold"} size={"small"}/>,
      content: <DetailItems items={[
        {
          key: 'thoi-han-trinh',
          title: "Thời gian trình",
          content: "17:30 05/03/2022",
        },
        {
          key: 'nt',
          title: "Người trình",
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
          align: "center"
        },
        {
          key: 'linh-vuc',
          title: "Lĩnh vực",
          content: "Marketing",
        },
        {
          key: 'loai-van-ban',
          title: "Loại văn bản",
          content: "Tờ trình đề xuất",
        },
        {
          key: 'nguoi-theo-doi',
          title: "Người theo dõi",
          content: <Follower list={followers}/>,
          align: "center"
        }
      ]}/>
    }
  ]

  const attachments = [
    {
      key: 'attachments',
      title: <Text content={"File đính kèm"} weight={"semibold"} size={"small"}/>,
      content: <CommentInputAttachment className={"comment-input pl-0 pr-0"} items={files}/>
    }
  ]

  return (
    <S.RequestContentWrapper>
      <Flex column>
        <S.RequestContentInner>
          <S.RequestDetailTitle className="request-detail-title">
            <Text color={"brand"} weight={"semibold"}>
              Chờ Chủ tịch HĐQT phê duyệt
            </Text>
            <Text color={"white"} className={"request-detail-title-icon"}>
              <ShiftActivityIcon/>
            </Text>
          </S.RequestDetailTitle>
          <TextContainerTitle className={"mt-3 mb-3"}>
            <Text
              size="large"
              content="V/v: Triển khai dự án Mua bản quyền Microsoft và Triển khai eOffice cho Hệ thống ALS"
              weight="semibold"
            />
          </TextContainerTitle>
          <Accordion defaultActiveIndex={[0]} panels={approvement}/>
          <Accordion defaultActiveIndex={[0]} panels={importantDetails} className={"mt-2"}/>
          <Accordion defaultActiveIndex={[0]} panels={extendDetails} className={"mt-2"}/>
          <Accordion defaultActiveIndex={[0]} panels={attachments} className={"mt-2"}/>
        </S.RequestContentInner>
      </Flex>
    </S.RequestContentWrapper>
  )
}

const DetailItems: React.FunctionComponent<IRequestDetailItems> = (props) => {
  const {items} = props;

  return (
    <>
      {items.map((item, index) => <DetailItem key={item.key} title={item.title} content={item.content} className={item.className} align={item.align}/>)}
    </>
  )
}

const DetailItem: React.FunctionComponent<IRequestDetailItem> = (props) => {
  const {title, content, className, align} = props;

  return (
    <Flex vAlign={align} className={`mb-2 ${className ? className : ""}`}>
      <S.DetailItemTitle>
        {title}
      </S.DetailItemTitle>
      <S.DetailItemContent>
        {content}
      </S.DetailItemContent>
    </Flex>
  )
}

export default RequestContent;