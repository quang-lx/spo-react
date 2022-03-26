import * as React from "react";
import {SvgIconProps} from "@fluentui/react-northstar";
import {
  BookmarkIcon,
  CalendarIcon,
  CircleIcon,
  StarIcon,
  UrgentIcon,
  RedbangIcon,
  TabsIcon,
  MoleculeIcon,
  PollIcon,
  TvIcon
} from "@fluentui/react-icons-northstar";
// import {} from "@fluentui/react-icons";

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
    case "MoleculeIcon":
      icon = <MoleculeIcon/>;
      break;
    case "PollIcon":
      icon = <PollIcon/>;
      break;
    case "TvIcon":
      icon = <TvIcon/>;
      break;
    default:
      icon = <TabsIcon/>;
  }

  return icon;
}

export default Icon;