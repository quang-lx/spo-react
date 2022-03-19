import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import Api from "./../../service/apitest";
import {
  DetailResponse,
  ITask,
  ITaskPost,
  ITaskRedux,
  ITaskUpdateRedux,
  ListResponse
} from "../../interfaces/TodoInterface";

const initialState: ITaskRedux = {
  task: undefined,
  loading: false,
  message: "",
  taskDetail: undefined
}

const getAllTodo = createAsyncThunk('Todo/getall', async () => {
  const res = await Api.get<ListResponse<ITask>>('/api/todo');
  return res.data
})

const addTodo = createAsyncThunk('Todo/addTodo', async (item: ITaskPost) => {
  const res = await Api.post<DetailResponse<ITaskPost>>('/api/todo', item)
  return res.data
})

const updateTodo = createAsyncThunk('Todo/update', async (item: ITaskUpdateRedux<ITaskPost>) => {
  const res = await Api.put(`/api/todo/${item.id}`, item.model)
  return res.data
})

const findTask = createAsyncThunk('Todo/findTask', async (id: string) => {
  const res = await Api.get<DetailResponse<ITask>>(`/api/todo/${id}`)
  return await res.data
})

const deleteTaskRedux = createAsyncThunk('Todo/deleteTask', async (id: string) => {
  const res = await Api.delete(`/api/todo/${id}`);
  return res.data
})

const successTaskRedux = createAsyncThunk('Todo/successTask', async (id: string) => {
  const res = await Api.patch(`/api/todo/finish/${id}`)
  return res.data
})

const todoSlice = createSlice({
  name: 'Todo',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllTodo.fulfilled, (state, action: PayloadAction<ListResponse<ITask>>) => {
        state.task = action.payload
    })
    builder.addCase(addTodo.fulfilled, (state, action: PayloadAction<DetailResponse<ITaskPost>>) => {})
    builder.addCase(findTask.fulfilled, (state, action: PayloadAction<DetailResponse<ITask>>) => {
        state.taskDetail = action.payload
    })
    builder.addCase(deleteTaskRedux.fulfilled, (state, action) => {})
    builder.addCase(successTaskRedux.fulfilled, (state, action) => {})
  }
})

export {
  getAllTodo,
  addTodo,
  updateTodo,
  findTask,
  deleteTaskRedux,
  successTaskRedux
}
export const todoReducer = todoSlice.reducer