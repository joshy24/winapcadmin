import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const baseUrl = "https://win-apc.herokuapp.com/api";

// const baseUrl = "http://localhost:7000/api";

export const getPositions = createAsyncThunk("positions/getPositions", async () => {
  const { data } = await axios.get(`${baseUrl}/positions`);
  return data;
});

export const createPosition = createAsyncThunk("position/createPosition", async () => {
    const { data } = await axios.post(`${baseUrl}/position`);
    return data;
  });

const positionsSlice = createSlice({
  name: "positions",
  initialState: {
    loading: null,
    data: [],
  },
  reducers: {},
  extraReducers: {
    [getPositions.pending]: (state) => {
      state.loading = "PENDING";
    },
    [getPositions.fulfilled]: (state, { payload }) => {
      // console.log({payload})
      state.loading = "FULFILLED";
      state.data = payload;
    },
    [getPositions.rejected]: (state, { error }) => {
      console.log({ error });
      state.loading = "REJECTED";
    },
    [createPosition.pending]: (state) => {
      state.loading = "PENDING";
    },
    [createPosition.fulfilled]: (state, { payload }) => {
      state.loading = "FULFILLED";
      state.data = payload;
    },
    [createPosition.rejected]: (state, { error }) => {
      console.log({ error });
      state.loading = "REJECTED";
    },
  },
});


export default positionsSlice.reducer;
