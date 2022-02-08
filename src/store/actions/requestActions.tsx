import {requestActionType} from '../actionTypes';

export const getList = () => {
  return {
      type: requestActionType.GET_REQUESTS,
      payload: []
  }
}