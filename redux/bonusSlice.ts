import {
    createAsyncThunk,
    createSlice,
    PayloadAction,
} from '@reduxjs/toolkit';
import axios from 'axios';
import type { RootState } from './store'
import {bonusCardType} from "../types/bonusCardType";

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

export const selectBonus = (state: RootState) => state.bonus;
export default bonusSlice.reducer;