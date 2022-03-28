import * as React from "react";
import {Avatar, AvatarProps, Flex, Text} from "@fluentui/react-northstar";
import {} from "@fluentui/react-icons-northstar";

export interface IFollower {
  avatar?: string,
  name?: string
}

interface FollowerProps extends AvatarProps {
  list?: IFollower[],
}

const Follower: React.FunctionComponent<FollowerProps> = (props) => {
  const {size, list} = props;

  return (
    <Flex vAlign={"center"}>
      {list?.map((user, index) => {
        return (
          <Avatar className="mr-2" key={index} image={user.avatar} name={user.name} size={size}/>
        )
      })}
      {list && list.length === 1 && list[0].name ? <Text content={list[0].name} truncated/> : <></>}
    </Flex>
  )
}

export default Follower;

Follower.defaultProps = {
  size: "medium"
}