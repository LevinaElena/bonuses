import {Action, AnyAction, combineReducers, configureStore, ThunkAction} from '@reduxjs/toolkit';
import {composeWithDevTools} from "redux-devtools-extension";
import {createWrapper, HYDRATE} from 'next-redux-wrapper';
import bonusReducer from './bonusSlice';
import {applyMiddleware} from "@reduxjs/toolkit";
import thunk from "redux-thunk";

const middleware = [thunk];

const combinedReducer = combineReducers({
    bonus: bonusReducer,
    /*TBD other reducers*/
});

const reducer = (state: ReturnType<typeof combinedReducer>, action: AnyAction) => {
    if (action.type === HYDRATE) {
        const nextState = {
            ...state,
            ...action.payload,
        };
        return nextState;
    } else {
        return combinedReducer(state, action);
    }
};

export const makeStore = () =>
    configureStore({
            reducer
        },
    );

type Store = ReturnType<typeof makeStore>;

export type AppDispatch = Store['dispatch'];
export type RootState = ReturnType<Store['getState']>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType,
    RootState,
    unknown,
    Action<string>>;

export const wrapper = createWrapper(makeStore, {debug: true});