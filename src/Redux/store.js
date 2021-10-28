import { configureStore } from "@reduxjs/toolkit";
import statesReducer from "./Slices/statesSlice";
import candidates from "./Slices/candidates";

export default configureStore({
  reducer: {
    states: statesReducer,
    candidates,
  },
});
