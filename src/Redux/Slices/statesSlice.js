import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const baseUrl = "https://win-apc.herokuapp.com/api/state";

export const getStates = createAsyncThunk("states/getStates", async () => {
  const { data } = await axios.get(`https://win-apc.herokuapp.com/api/state`);

  return data;
});

const statesSlice = createSlice({
  name: "states",
  initialState: {
    loading: "PENDING",
    data: [],
  },
  reducers: {},
  extraReducers: {
    [getStates.pending]: (state) => {
      state.loading = "PENDING";
    },
    [getStates.fulfilled]: (state, { payload }) => {
      state.loading = "FULFILLED";
      state.data = payload;
    },
    [getStates.rejected]: (state, { error }) => {
      console.log({ error });
      state.loading = "REJECTED";
    },
  },
});

export default statesSlice.reducer;
