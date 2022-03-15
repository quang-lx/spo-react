import { RequestActionType } from '../actionTypes';
import { IRequest, IRequestReducer } from '../../interfaces/RequestInterfaces';

const initialState: IRequestReducer = {
    requests: [],
    request: {} as IRequest
}

const requestReducer = (state = { ...initialState }, action) => {
    switch (action.type) {
        case RequestActionType.GET_REQUESTS:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}

export default requestReducer;