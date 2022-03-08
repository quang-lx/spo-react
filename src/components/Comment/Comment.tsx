import React from 'react';
import {Flex} from '@fluentui/react-northstar';
import * as S from './Comment.style';
import CommentToolbar from "./CommentToolbar";
import CommentInput from "./CommentInput";
import CommentHistory from "./CommentHistory";

interface CommentProps {

}

const Comment: React.FunctionComponent<CommentProps> = (props) => {
  return (
    <S.CommentWrapper>
      <Flex column>
        <CommentToolbar/>
        <CommentInput/>
        <CommentHistory/>
      </Flex>
    </S.CommentWrapper>
  )
}

export default Comment;