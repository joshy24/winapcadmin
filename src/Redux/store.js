import { configureStore } from "@reduxjs/toolkit";
<<<<<<< HEAD
import statesReducer from './Slices/statesSlice';
import positionsReducer from './Slices/positionSlice'


export default configureStore({
    reducer: {
        states: statesReducer,
        positions: positionsReducer,
    }
}) 
=======
import statesReducer from "./Slices/statesSlice";
import candidates from "./Slices/candidates";

export default configureStore({
  reducer: {
    states: statesReducer,
    candidates,
  },
});
>>>>>>> 83b7b2e28dfcadd56be5126417fab5b8573b06a7
