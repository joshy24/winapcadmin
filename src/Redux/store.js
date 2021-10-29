import { configureStore } from "@reduxjs/toolkit";
import statesReducer from "./Slices/statesSlice";
import candidatesReducer from "./Slices/candidatesSlice";
import positionsReducer from "./Slices/positionSlice";
import donationsReducer from "./Slices/donationSlice";


export default configureStore({
  reducer: {
    states: statesReducer,
    positions: positionsReducer,
    candidates: candidatesReducer,
    donations: donationsReducer,
  },
});
