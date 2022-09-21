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
  TvIcon,
  ArrowDownIcon,
  ParticipantAddIcon,
  MeetingNewIcon,
  AcceptIcon
} from "@fluentui/react-icons-northstar";
import {
  CircleSmall20Filled
} from "@fluentui/react-icons";

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
    case "ArrowDownIcon":
      icon = <ArrowDownIcon/>;
      break;
    case "CircleSmall20Filled":
      icon = <CircleSmall20Filled/>;
      break;
    case "ParticipantAddIcon":
      icon = <ParticipantAddIcon/>;
      break;
    case "MeetingNewIcon":
      icon = <MeetingNewIcon/>;
      break;
    case "AcceptIcon":
      icon = <AcceptIcon/>;
      break;
    default:
      icon = <TabsIcon/>;
  }

  return icon;
}

export default Icon;