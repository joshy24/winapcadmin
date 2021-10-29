import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const baseUrl = "https://win-apc.herokuapp.com/api";

// const baseUrl = "http://localhost:7000/api";

export const getPositions = createAsyncThunk(
  "positions/getPositions",
  async () => {
    const { data } = await axios.get(`${baseUrl}/positions`);
    return data;
  }
);

export const createPosition = createAsyncThunk(
  "position/createPosition",
  async ({ name }) => {
    const config = {
      method: "post",
      url: `${baseUrl}/position`,
      data: {
        name,
      },
    };

    const { data } = await axios(config);
    return data;
  }
);

export const deletePosition = createAsyncThunk(
  "position/deletePosition",
  async (id) => {
    const config = {
      method: "delete",
      url: `${baseUrl}/position/${id}`,
    };

    const { data } = await axios(config);
    return data;
  }
);

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
      state.loading = "FULFILLED";
      state.data = payload;
    },
    [getPositions.rejected]: (state, { error }) => {
      state.loading = "REJECTED";

    },
    //* ---------------- *//
    [createPosition.pending]: (state) => {
      state.loading = "PENDING";
    },
    [createPosition.fulfilled]: (state, { payload }) => {
      state.loading = "FULFILLED";
      state.data = payload;

    },
    [createPosition.rejected]: (state, { error }) => {
      state.loading = "REJECTED";
      state.error = error;
    },
    //* ---------------- *//
    [deletePosition.pending]: (state) => {
      state.loading = "PENDING";
    },
    [deletePosition.fulfilled]: (state, { payload }) => {
      state.loading = "FULFILLED";
      state.data = payload;
    },
    [deletePosition.rejected]: (state, { error }) => {
      state.loading = "REJECTED";
      state.error = error;
    },
  },
});

export default positionsSlice.reducer;
