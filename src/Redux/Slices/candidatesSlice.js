import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// const baseUrl = "https://win-apc.herokuapp.com/api";
const baseUrl = "http://localhost:7000/api";

const getCandidates = createAsyncThunk("candidates/getCandidates", async () => {
  const { data } = await axios.get(`${baseUrl}/politicians`);
  return data;
});

const createCandidate = createAsyncThunk(
  "candidates/createCandidate",
  async (formData) => {
    const { data } = await axios.post(`${baseUrl}/politician`, formData);
    return data;
  }
);

const updateCandidate = createAsyncThunk(
  "candidates/updateCandidate",
  async ({id, content }) => {
    const {data} = await axios.put(`${baseUrl}/politician/${id}`, content);
    return data.user
  }
)

const deleteCandidate = createAsyncThunk(
  "candidates/deleteCandidate",
  async ({id}) => {
    console.log(id)
    await axios.delete(`${baseUrl}/politician/${id}`)
    return id
  }
)

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
      state.data.items = state.data.items.concat(payload);
      state.ui.isLoading = false;
    },
    [createCandidate.rejected]: (state, { error }) => {
      console.log({ error });
      state.ui.message = error.message;
      state.ui.hasError = true;
      state.ui.isLoading = true;
    },
    //*-------------------------------------------------------*//
    [updateCandidate.fulfilled]: (state, {payload}) => {
      const index = state.data.items.findIndex(politician => politician._id === payload._id)
      state.data.items[index] = {
        ...state.data.items[index],
        ...payload
      }
    },
    //*-------------------------------------------------------*//
    [deleteCandidate.fulfilled]: (state, {payload}) => {
      let index = state.data.items.findIndex(({id}) => id === payload.id)
      state.data.items.splice(index, 1)
    }
  },
});

export { getCandidates, createCandidate, updateCandidate, deleteCandidate };
export default slice.reducer;
