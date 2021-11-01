import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const baseUrl = "https://win-apc.herokuapp.com/api";

export const getDonations = createAsyncThunk("donations/getDonations", async () => {
  const { data } = await axios.get(`${baseUrl}/state`);
  return data;
});

const donationsSlice = createSlice({
  name: "states",
  initialState: {
    loading: null,
    data: [],
  },
  reducers: {},
  extraReducers: {
    [getDonations.pending]: (state) => {
      state.loading = "PENDING";
    },
    [getDonations.fulfilled]: (state, { payload }) => {
      state.loading = "FULFILLED";
      state.data = payload;
    },
    [getDonations.rejected]: (state, { error }) => {
      state.loading = "REJECTED";
    },
  },
});

export default donationsSlice.reducer;
