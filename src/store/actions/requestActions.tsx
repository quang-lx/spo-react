import {RequestActionType} from '../actionTypes';

export const getList = () => {
  return {
      type: RequestActionType.GET_REQUESTS,
      payload: []
  }
}