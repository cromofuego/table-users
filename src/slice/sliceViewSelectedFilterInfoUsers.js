import { createSlice } from "@reduxjs/toolkit";

const sliceViewSelectedFilterInfoUsers = createSlice({
    name: 'users',
    initialState: {
        count: 2,
        resetActionCounter: 0,
    },
    reducers: {
        setCountSelect: (state, action) => {
            state.count = Number(action.payload);
        },
        buttonResetAllFilter: (state, action) => {
            state.resetActionCounter += action.payload
        }
    }
})

export const { setCountSelect, buttonResetAllFilter } = sliceViewSelectedFilterInfoUsers.actions;

export default sliceViewSelectedFilterInfoUsers.reducer;
