import {
    createAsyncThunk,
    createSlice,
} from '@reduxjs/toolkit';
import axios from 'axios';
import type { RootState } from './store';
import { listItemsType} from "../types/sidebarItemsType";

export type casinoState = {
    data: Array<listItemsType>;
    pending: boolean;
    error: boolean;
};

const initialState: casinoState = {
    data: [],
    pending: false,
    error: false,
};

export const getCasinos = createAsyncThunk('sidebar/casino', async () => {
    const response = await axios.get(`http://localhost:3000/api/sidebar/`);
    //const response = await axios.get(`${process.env.API_HOST}/sidebar/`);
    return response.data;
});

export const casinoSlice = createSlice({
    name: 'casino',
    initialState,
    reducers: {
    },
    extraReducers: builder => {
        builder
            .addCase(getCasinos.pending, state => {
                state.pending = true;
            })
            .addCase(getCasinos.fulfilled, (state, { payload }) => {
                state.pending = false;
                state.data = payload;
            })
            .addCase(getCasinos.rejected, state => {
                state.pending = false;
                state.error = true;
            });
    },
});

export const selectCasino = (state: RootState) => state.casino;

export default casinoSlice.reducer;