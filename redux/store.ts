import {Action, configureStore, ThunkAction} from '@reduxjs/toolkit';
import bonusReducer from './bonusSlice';
import faqReducer from './faqSlice';

export const store = configureStore({
    reducer: {
        bonus: bonusReducer,
        faq: faqReducer
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;