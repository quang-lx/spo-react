import { requestActionType } from '../actionTypes';
import { IRequest } from '../../interfaces/RequestInterfaces';

interface IRequestReducer {
    requests: IRequest[],
    request: IRequest
}
const initialState: IRequestReducer = {
    requests: [],
    request: {} as IRequest
}

const requestReducer = (state = { ...initialState }, action) => {
    switch (action.type) {
        case requestActionType.GET_REQUESTS:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}

export default requestReducer;