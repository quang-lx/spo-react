import { combineReducers } from 'redux';
import profile from './profile';
import requestReducer from './requestReducer';

export default combineReducers({
    profile,
    requestReducer
})