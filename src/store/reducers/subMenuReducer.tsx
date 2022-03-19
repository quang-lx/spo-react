import {createSlice} from "@reduxjs/toolkit";
import {ISmallSubMenuReducer} from "../../interfaces/SubMenuInterfaces";

const initialState: ISmallSubMenuReducer = {
  open: true
}

const actionToggleSmallSubMenu = (state: ISmallSubMenuReducer) => {
  console.log("actionToggleSmallSubMenu");
  state.open = !state.open;
}

const subMenuSlice = createSlice({
  name: "SubMenu",
  initialState,
  reducers: {
    toggleSmallSubMenu: actionToggleSmallSubMenu
  },
  extraReducers: (builder) => {

  }
})

export const {toggleSmallSubMenu} = subMenuSlice.actions;

export const subMenuReducer = subMenuSlice.reducer;