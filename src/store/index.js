import { configureStore } from "@reduxjs/toolkit";
import users from '../slice/sliceUsers';
import ViewSelectedFilterInfoUsers from '../slice/sliceViewSelectedFilterInfoUsers';

export const store = configureStore({
    reducer: {
        users,
        ViewSelectedFilterInfoUsers,
    }
})