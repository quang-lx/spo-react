import React, {useState} from 'react';
import {Chat, ChatItemProps, Avatar, Text, MentionIcon, Flex, Accordion, Button} from '@fluentui/react-northstar';
import {} from '@fluentui/react-icons-northstar';
import * as S from './Comment.style';


interface CommentHistoryProps {
  className?: string
}

interface CommentHistoryItemProps extends ChatItemProps {
  key: string
}

const CommentHistory: React.FunctionComponent<CommentHistoryProps> = (props) => {
  const {className} = props;

  const items: CommentHistoryItemProps[]= [
    {
      gutter: <Avatar
        image="https://i.ibb.co/jL8msg3/271914657-2051122095047442-6201605861733351206-n.jpg"
      />,
      message:  <Chat.Message
        content={
          <div>
            Tham khảo NCC dịch vụ quảng cáo <a href="#">spsvn.com</a>
          </div>
        }
        author="Nguyễn Như Hiếu"
        timestamp="10:28"
      />,
      key: 'message-id-4',
      className: 'comment-item'
    },
    {
      gutter: <Avatar
        image="https://i.ibb.co/Vjq1gg7/148714090-3979558975396760-8986126341265647886-n.jpg"
      />,
      message: (
        <Flex column>
          <Chat.Message
            content={
              <>
                <Text atMention="me" content="Nguyễn Mạnh Cường" />
                {" em kiểm tra lại báo giá nhé. Thời hạn trong báo giá đã quá rồi"}
              </>
            }
            author="Trần Đình Thủy"
            timestamp="Hôm qua, 17:31"
            badge={{
              icon: <MentionIcon />,
            }}
            variables={{
              hasMention: true,
            }}
          />
          <Reply/>
        </Flex>
      ),
      key: 'message-id-2',
      className: 'comment-item'
    },
    {
      gutter: <Avatar
        image="https://i.ibb.co/tZcDv99/236285939-3308320666067112-4201085366173673459-n.jpg"
      />,
      message: (
        <Chat.Message
          content={
            <div>
              Chi phí quảng cáo không phù hợp
            </div>
          }
          author="Trần Hoàng Huy"
          timestamp="Hôm qua, 17:30"
        />
      ),
      key: 'message-id-8',
      className: 'comment-item'
    }
  ]

  return (
    <Chat
      className={`pl-0 pr-0 ${className}`}
      items={items}
    />
  )
}

const Reply = () => {
  const replyItems: CommentHistoryItemProps[] = [
    {
      gutter: <Avatar
        image="https://yt3.ggpht.com/ytc/AKedOLTebUysiOUr2VCeE1wqYTQkrVM00kZZO2CgnL7t9g=s900-c-k-c0x00ffffff-no-rj"
      />,
      message: (
        <Chat.Message
          content={
            <div>
              Em đã kiểm tra lại và cập nhật báo giá ạ
            </div>
          }
          author="Nguyễn Mạnh Cường"
          timestamp="11:12"
        />
      ),
      key: 'message-id-99',
    },
    {
      gutter: <Avatar
        image="https://i.ibb.co/Vjq1gg7/148714090-3979558975396760-8986126341265647886-n.jpg"
      />,
      message:  <Chat.Message
        content={
          <div>
            Tham khảo NCC dịch vụ quảng cáo <a href="#">spsvn.com</a>. Sau đó, <Text atMention="me" content="Nguyễn Mạnh Cường" /> cập nhật lại báo giá
          </div>
        }
        author="Trần Đình Thủy"
        timestamp="10:28"
        badge={{
          icon: <MentionIcon />,
        }}
        variables={{
          hasMention: true,
        }}
      />,
      key: 'message-id-44',
    },
    {
      gutter: <Avatar
        image="https://i.ibb.co/C7QpdVM/72742010-2473508566058165-7682836468292648960-n.jpg"
      />,
      message: (
        <Chat.Message
          content={
            <div>
              Em thấy NCC SPSVN đang chào giá hợp lý đó
            </div>
          }
          author="Ngô Hoàng Nam"
          timestamp="Hôm qua, 17:28"
        />
      ),
      key: 'message-id-88',
    }
  ];

  const [title, setTitle] = useState("Thu gọn");

  const toggleReply = (props) => {
    const {activeIndex} = props;
    setTitle(activeIndex.length ? "Thu gọn" : "4 bình luận từ Nguyễn Mạnh Cường, Trần Hoàng Huy và 2 người khác");
  }

  const items = [
    {
      key: 'reply',
      title: title,
      content: <Chat key="reply-comments" items={replyItems}/>
    }
  ]

  return (
    <S.ReplyCommentWrapper>
      <Accordion
        onActiveIndexChange={(e, props) => {toggleReply(props)}}
        className="comment-reply" defaultActiveIndex={[0]} panels={items}
      />
      <Button content="Trả lời" text className="unset-width pl-3" primary/>
    </S.ReplyCommentWrapper>
  )
}

export default CommentHistory;