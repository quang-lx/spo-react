import React from 'react';
import {
  Text,
  Layout,
  Toolbar,
  ToolbarItemProps,
  Button
} from '@fluentui/react-northstar';
import {ArrowDownIcon} from '@fluentui/react-icons-northstar';
import * as S from './Comment.style';


interface CommentToolbarProps {
  className?: string
}

interface CommentToolbarItemProps extends ToolbarItemProps {
  key: string,
  /** kind: toggle, more, custom, divider */
  kind?: string
}

const CommentToolbar: React.FunctionComponent<CommentToolbarProps> = (props) => {
  const {className} = props;
  const items: CommentToolbarItemProps[] = [
    {
      key: 'thao-luan',
      kind: "custom",
      content: <Button primary size="small" flat content={<Text weight="regular" content="Thảo luận"/>}/>,
      className: "pl-1 pr-1"
    },
    {
      key: 'lich-su',
      kind: "custom",
      content: <Button size="small" flat content={<Text weight="regular" content="Lịch sử"/>}/>,
      className: "pl-1 pr-1"
    },
    {
      key: "sorted",
      kind: "custom",
      content: <Button
        icon={<ArrowDownIcon size="small"/>}
        content={<Text weight="regular" content="Mới nhất"/>}
        flat
        text
        iconPosition="after"
        className="p-0 unset-width"
      />,
      className: "ml-auto p-0"
    }
  ]

  return (
    <Layout
      className={className}
      start={<S.CommentToolbarTitle><Text content="Hiển thị:"/></S.CommentToolbarTitle>}
      main={<Toolbar items={items}/>}
    />
  )
}

export default CommentToolbar;