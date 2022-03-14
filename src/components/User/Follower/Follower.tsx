import * as React from "react";
import {Avatar, Flex, Text} from "@fluentui/react-northstar";
import {} from "@fluentui/react-icons-northstar";
import * as S from "./Follower.style";

export interface IFollower {
  avatar?: string,
  name?: string
}

interface FollowerProps {
  list?: IFollower[]
}

const Follower: React.FunctionComponent<FollowerProps> = (props) => {
  const {list} = props;

  return (
    <Flex vAlign={"center"}>
      {list?.map((user) => {
        return (
          <Avatar image={user.avatar} name={user.name}/>
        )
      })}
      <Text className="ml-2" content="người theo dõi"/>
    </Flex>
  )
}

export default Follower;