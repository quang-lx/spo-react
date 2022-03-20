import {TreeItemProps} from "@fluentui/react-northstar";

interface SubMenuProps {

}

interface SmallSubMenuToolbarProps {

}

interface SmallSubMenuProps {

}

interface MoreButtonsProps {

}

interface BigSubMenuToolbarProps {

}

interface SortButtonProps {

}

interface ISmallSubMenuReducer {
  open: boolean
}

interface IBigSubMenuSort {
  active: number
  field: string,
  direction?: string
}

interface IBigSubMenuReducer {
  title: string,
  icon?: string,
  sort?: IBigSubMenuSort
}

interface ISubMenu {
  smallSubMenu: ISmallSubMenuReducer,
  bigSubMenu: IBigSubMenuReducer
}

interface ISmallSubMenuItem extends TreeItemProps{
  itemtitle?: string,
  itemicon?: string
}

export type {
  SubMenuProps,
  SmallSubMenuToolbarProps,
  SmallSubMenuProps,
  MoreButtonsProps,
  BigSubMenuToolbarProps,
  SortButtonProps,
  ISmallSubMenuReducer,
  ISubMenu,
  ISmallSubMenuItem,
  IBigSubMenuSort
}