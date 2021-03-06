import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const baseUrl = "https://win-apc.herokuapp.com/api";

// const baseUrl = "http://localhost:7000/api";

export const getStates = createAsyncThunk("states/getStates", async () => {
  const { data } = await axios.get(`${baseUrl}/state`);
  return data;
});

const statesSlice = createSlice({
  name: "states",
  initialState: {
    loading: null,
    data: [],
  },
  reducers: {},
  extraReducers: {
    [getStates.pending]: (state) => {
      state.loading = "PENDING";
    },
    [getStates.fulfilled]: (state, { payload }) => {
      // console.log({payload})
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
