import { configureStore } from '@reduxjs/toolkit';
import allUserSlice from './userSlice'

export const store = configureStore({
    reducer: {
        Users: allUserSlice
    }
});
