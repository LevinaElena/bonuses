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

export const getBonuses = createAsyncThunk('bonus/bonuses', async (bonusType:number) => {
    const response = await axios.get(`http://localhost:3000/api/bonuses?type=${bonusType}`);
    return response.data;
});

export const bonusSlice = createSlice({
    name: 'bonus',
    initialState,
    reducers: {
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