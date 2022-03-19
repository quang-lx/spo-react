import * as React from "react";
import {SubMenuActionType} from "../actionTypes";

const getList = () => {
  return {
    type: SubMenuActionType.GET_SUB_MENU,
    payload: []
  }
}

const toggleSmallMenu = () => {
  return {
    type: SubMenuActionType.TOGGLE_SMALL_SUB_MENU
  }
}

export {
  getList,
  toggleSmallMenu
}