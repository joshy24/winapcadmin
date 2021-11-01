import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const baseUrl = "https://win-apc.herokuapp.com/api";
// const baseUrl = "http://localhost:7000/api";

const getCandidates = createAsyncThunk("candidates/getCandidates", async () => {
  const { data } = await axios.get(`${baseUrl}/politicians`);
  return data;
});

const createCandidate = createAsyncThunk(
  "candidates/createCandidate",
  async ({ candidate_name, position, state, lga }) => {
    const config = {
      method: "post",
      url: `${baseUrl}/politician`,
      data: {
        candidate_name,
        position,
        state,
        lga,
      },
    };

    const { data } = await axios(config);
    console.log(data);
    return data;
  }
);

const slice = createSlice({
  name: "candidates",
  initialState: {
    ui: {
      isLoading: false,
      hasError: false,
      message: "",
    },
    data: {
      items: [],
      itemDetail: {},
    },
  },
  reducers: {},
  extraReducers: {
    [getCandidates.pending]: (state) => {
      state.ui.message = "";
      state.ui.hasError = false;
      state.ui.isLoading = true;
    },
    [getCandidates.fulfilled]: (state, { payload }) => {
      console.log({ payload });
      state.ui.message = "success";
      state.data.items = payload;
      state.ui.isLoading = false;
    },
    [getCandidates.rejected]: (state, { error }) => {
      console.log({ error });
      state.ui.message = error.message;
      state.ui.hasError = true;
      state.ui.isLoading = true;
    },
    //* ------------------ *//
    [createCandidate.pending]: (state) => {
      state.ui.message = "";
      state.ui.hasError = false;
      state.ui.isLoading = true;
    },
    [createCandidate.fulfilled]: (state, { payload }) => {
      state.ui.message = "success";
      state.data.items = payload;
      state.ui.isLoading = false;
    },
    [createCandidate.rejected]: (state, { error }) => {
      console.log({ error });
      state.ui.message = error.message;
      state.ui.hasError = true;
      state.ui.isLoading = true;
    },
  },
});

export { getCandidates, createCandidate };
export default slice.reducer;
