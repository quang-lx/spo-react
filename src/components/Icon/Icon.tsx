import * as React from "react";
import {SvgIconProps} from "@fluentui/react-northstar";
import {
  BookmarkIcon,
  CalendarIcon,
  CircleIcon,
  StarIcon,
  UrgentIcon,
  RedbangIcon,
  TabsIcon
} from "@fluentui/react-icons-northstar";
import {} from "@fluentui/react-icons";

interface IconProps extends SvgIconProps {
  name: string | undefined
}
const Icon: React.FunctionComponent<IconProps> = (props) => {
  const {name} = props;

  let icon: JSX.Element;

  switch (name) {
    case "BookmarkIcon":
      icon = <BookmarkIcon/>;
      break;
    case "CalendarIcon":
      icon = <CalendarIcon/>;
      break;
    case "CircleIcon":
      icon = <CircleIcon/>;
      break;
    case "StarIcon":
      icon = <StarIcon/>;
      break;
    case "UrgentIcon":
      icon = <UrgentIcon/>;
      break;
    case "RedbangIcon":
      icon = <RedbangIcon/>;
      break;
    default:
      icon = <TabsIcon/>;
  }

  return icon;
}

export default Icon;