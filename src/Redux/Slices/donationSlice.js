import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


// const baseUrl = "https://win-apc.herokuapp.com/api";
const baseUrl = "http://localhost:7000/api";


export const getDonations = createAsyncThunk("donations/getDonations", async () => {
  const { data } = await axios.get(`${baseUrl}/donations`);
  return data;
});

const donationsSlice = createSlice({
  name: "donations",
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
