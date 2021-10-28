import { configureStore } from "@reduxjs/toolkit";
import statesReducer from './Slices/statesSlice'

export default configureStore({
    reducer: {
        states: statesReducer,
    }
}) 