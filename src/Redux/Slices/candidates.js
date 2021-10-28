import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import api from "../../api";

const getCandidates = createAsyncThunk("candidates/getCandidates", async () => {
  const { data } = await axios.get(`${api.baseUrl}/politicians`);
  return data;
});

const createCandidates = createAsyncThunk(
  "candidates/createCandidates",
  async () => {
    const config = {
      method: "post",
      url: `${api.baseUrl}/politicians`,
      data: {
        firstname: "Joseph",
        lastname: "Martins",
        party: "APC",
        position: "Party Chairman",
        state: "NGA2850",
        lga: "Ikeja",
      },
    };

    const { data } = await axios(config);
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
  },
});

export { getCandidates };
export default slice.reducer;
