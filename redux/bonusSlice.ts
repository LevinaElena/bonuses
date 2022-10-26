import {
    createAsyncThunk,
    createSlice,
    PayloadAction,
} from '@reduxjs/toolkit';
import axios from 'axios';
import type { RootState } from './store'
import {bonusCardType} from "../types";

// declaring the types for our state
export type bonusState = {
    data: Array<bonusCardType>
    pending: boolean;
    error: boolean;
};

const initialState: bonusState = {
    data: [],
    pending: false,
    error: false,
};

export const getBonuses = createAsyncThunk('kanye/kanyeQuote', async () => {
    const response = await axios.get(`${process.env.API_HOST}/bonuses/`);
    return response.data;
});

export const bonusSlice = createSlice({
    name: 'bonus',
    initialState,
// The `reducers` field lets us define reducers and generate associated actions.
// In this example, 'increment', 'decrement' and 'incrementByAmount' are actions. They can be triggered from outside this slice, anywhere in the app.
// So for example, if we make a dispatch to the 'increment' action here from the index page, it will get triggered and change the value of the state from 0 to 1.
    reducers: {
//         increment: state => {
// // Redux Toolkit allows us to write "mutating" logic in reducers.
// // It doesn't actually mutate the state because it uses the Immer library, which detects changes to a "draft state" and produces a brand new immutable state based off those changes
//             state.value++;
//         },
//         decrement: state => {
//             state.value--;
//         },
// // 'The increment by amount' action here, has one job and that is to take whatever value is passed to it and add that to state.value.
// // The PayloadAction type here is used to declare the contents of `action.payload`
//         incrementByAmount: (state, action: PayloadAction<number>) => {
//             state.value += action.payload;
//         },
    },
    extraReducers: builder => {
        builder
            .addCase(getBonuses.pending, state => {
                state.pending = true;
            })
            .addCase(getBonuses.fulfilled, (state, { payload }) => {
                state.pending = false;
                state.data = payload;
            })
            .addCase(getBonuses.rejected, state => {
                state.pending = false;
                state.error = true;
            });
    },
});
// Here we are just exporting the actions from this slice, so that we can call them anywhere in our app.
// export const {
//     increment,
//     decrement,
//     incrementByAmount,
// } = bonusSlice.actions;

// calling the above actions would be useless if we could not access the data in the state. So, we use something called a selector which allows us to select a value from the state.
export const selectBonus = (state: RootState) => state.bonus;

// exporting the reducer here, as we need to add this to the store
export default bonusSlice.reducer;