import { configureStore } from "@reduxjs/toolkit";
import statesReducer from './Slices/statesSlice';
import positionsReducer from './Slices/positionSlice'


export default configureStore({
    reducer: {
        states: statesReducer,
        positions: positionsReducer,
    }
}) 