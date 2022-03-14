import * as React from "react";
import {Segment, Flex, Text} from "@fluentui/react-northstar";
import {} from "@fluentui/react-icons-northstar";
import {Print20Regular} from "@fluentui/react-icons";
import * as S from "./RequestDetail.style";
import {Follower, IFollower} from "../../components/User";

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

  return (
    <S.RequestContentWrapper>
      <Flex column>
        <Segment className="pt-2 pb-2">
          <Flex vAlign={"center"}>
            <Flex.Item>
              <Follower list={followers}/>
            </Flex.Item>
            <Flex.Item push>
              <Text color={"brand"}>
                <Print20Regular className={"cursor-pointer"}/>
              </Text>
            </Flex.Item>
            <Flex.Item>
              <Text className={"ml-3"} content="Thu gọn" color={"brand"}/>
            </Flex.Item>
          </Flex>
        </Segment>
        <Segment>2</Segment>
      </Flex>
    </S.RequestContentWrapper>
  )
}

export default RequestContent;