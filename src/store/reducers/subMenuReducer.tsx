import {createSlice} from "@reduxjs/toolkit";
import {ISubMenu} from "../../interfaces/SubMenuInterfaces";

const initialState: ISubMenu = {
  smallSubMenu: {
    open: true
  },
  bigSubMenu: {
    title: "",
    icon: "",
    sort: {
      active: 0,
      field: "",
      direction: "ASC"
    }
  }
}

const actionToggleSmallSubMenu = (state: ISubMenu) => {
  state.smallSubMenu.open = !state.smallSubMenu.open;
}

const actionSetBigSubMenuToolbar = (state: ISubMenu, action) => {
  // console.log(action);
  state.bigSubMenu = {
    ...state.bigSubMenu,
    ...action.payload
  }
}

const subMenuSlice = createSlice({
  name: "SubMenu",
  initialState,
  reducers: {
    toggleSmallSubMenu: actionToggleSmallSubMenu,
    setBigSubMenuToolbar: actionSetBigSubMenuToolbar
  },
  extraReducers: (builder) => {

  }
})

export const {toggleSmallSubMenu, setBigSubMenuToolbar} = subMenuSlice.actions;

export const subMenuReducer = subMenuSlice.reducer;