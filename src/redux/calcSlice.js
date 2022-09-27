import { createSlice } from '@reduxjs/toolkit';

export const calcSlice = createSlice({
    name: 'calc',
    initialState: {
        result: 0,
    },
    reducers: {
        setResult: (state, action) => {
            state.result = action.payload;
        },
        setPercentlCalc: (state) => {
            state.result /= 100;
        },
        setSignlCalc: (state) => {
            state.result *= -1;
        },
    },
});

export const { setSignlCalc, setResult, setPercentlCalc } = calcSlice.actions;

export default calcSlice.reducer;
