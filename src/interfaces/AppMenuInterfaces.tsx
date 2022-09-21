import {MenuItemProps} from "@fluentui/react-northstar";

interface MenuProps {

}

interface IMenuItem extends MenuItemProps {
  key?: string
}

export type {
  MenuProps,
  IMenuItem
}