import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IContainer, IToolbarRawItem} from "../../interfaces/ContainerInterfaces";

const initialState: IContainer = {
  toolbar: []
}

const actionSetToolbar = (state, action: PayloadAction<IToolbarRawItem[]>) => {
  state.toolbar = action.payload;
}

const actionApprove = (state, action) => {
  console.log(action);
}

const containerSlice = createSlice({
  name: "Container",
  initialState,
  reducers: {
    setToolbar: actionSetToolbar,
    approve: actionApprove
  },
  extraReducers: (builder) => {

  }
})

export const {setToolbar} = containerSlice.actions;

export const containerReducer = containerSlice.reducer;