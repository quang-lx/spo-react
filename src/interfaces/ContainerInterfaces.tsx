import {
  ToolbarItemProps
} from "@fluentui/react-northstar";

interface ContainerProps {

}

interface MainContainerToolbarProps {

}

interface IToolbarItem extends ToolbarItemProps {
  key?: string | number,
  kind: "custom" | "item" | "divider" | "toggle",
  fitted?: boolean | 'horizontally' | 'vertically'
}

export type {
  ContainerProps,
  MainContainerToolbarProps,
  IToolbarItem
}