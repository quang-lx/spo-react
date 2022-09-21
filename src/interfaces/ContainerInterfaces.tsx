import {
  ToolbarItemProps
} from "@fluentui/react-northstar";

interface ContainerProps {

}

interface IContainer {
  toolbar: IToolbarRawItem[]
}

interface MainContainerToolbarProps {

}

interface IToolbarItem extends ToolbarItemProps {
  key?: string | number,
  kind: "custom" | "item" | "divider" | "toggle",
  fitted?: boolean | 'horizontally' | 'vertically'
}

interface IToolbarRawItem {
  key: string | number,
  kind: "custom" | "item" | "divider" | "toggle",
  fitted: boolean | 'horizontally' | 'vertically',
  className?: string,
  buttonContent: string,
  buttonTinted?: boolean,
  buttonPrimary?: boolean,
  buttonFlat?: boolean,
  buttonClassName?: string,
  buttonIcon?: string,
  buttonText?: boolean,
  buttonAction?: string,
  actionPayload?: any
}

export type {
  ContainerProps,
  MainContainerToolbarProps,
  IToolbarItem,
  IContainer,
  IToolbarRawItem
}