import { createStore, applyMiddleware, compose } from 'redux';
import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import API from 'service/api';
import API_BOOK from 'service/endpoints';
import { history } from "helpers/common";
import toast from "components/Toast";
import { todoReducer } from './feature/todoSlice'

const composeEnhancers = window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] as typeof compose || compose;
const middlewareEnhancer = applyMiddleware(
    thunk.withExtraArgument({
        API,
        API_BOOK,
        toast,
        history
    })
);

// const store = createStore(
//     rootReducer,
//     undefined,
//     composeEnhancers(middlewareEnhancer)
// );

export const store = configureStore ({
    reducer: {
        todo: todoReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store