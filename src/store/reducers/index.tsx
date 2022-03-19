import {combineReducers} from 'redux';
import profile from './profile';
import requestReducer from './requestReducer';
import {todoReducer} from '../feature/todoSlice';
import {subMenuReducer} from "./subMenuReducer";

export default combineReducers({
  profile,
  requestReducer,
  todoReducer,
  subMenuReducer
})