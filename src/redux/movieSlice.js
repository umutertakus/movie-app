import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchMovies = createAsyncThunk(
  "movie/getMovie",
  async (params) => {
    const { term, sendValue, pageValue } = params;
    const res = await axios(
      `http://www.omdbapi.com/?apikey=2ccecf61&s=${term}&type=${sendValue}&page=${pageValue}&`
    );
    return res.data;
  }
);

export const moviceSlice = createSlice({
  name: "movie",
  initialState: {
    items: {
      Search: [],
      totalResults: 0,
      Response: "",
      pageValue: 1,
    },
    status: "idle",
  },
  reducers: {
    pageChange: (state, action) => {
      state.items.pageValue = action.payload;
    },
  },
  extraReducers: {
    [fetchMovies.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchMovies.fulfilled]: (state, action) => {
      state.items = { ...state.items, ...action.payload };
      state.status = "succeeded";
    },
    [fetchMovies.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});

export const selectPageValue = (state) => state.movie.items.pageValue;
export const selectResults = (state) => state.movie.items.totalResults;
export const selectData = (state) => state.movie.items;
export const selectStatus = (state) => state.movie.status;

export const { pageChange } = moviceSlice.actions;
export default moviceSlice.reducer;
