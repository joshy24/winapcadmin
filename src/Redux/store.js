import { configureStore } from "@reduxjs/toolkit";
import statesReducer from "./Slices/statesSlice";
import candidates from "./Slices/candidates";
import positionsReducer from "./Slices/positionSlice";

export default configureStore({
  reducer: {
    states: statesReducer,
    positions: positionsReducer,
    candidates,
  },
});
