import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchMovies = createAsyncThunk("movie/getMovie", async () => {
  const res = await axios(
    `http://www.omdbapi.com/?apikey=2ccecf61&s=batman&type=movie&`
  );
  return res.data;
});

export const moviceSlice = createSlice({
  name: "movie",
  initialState: {
    items: {
      Search: [],
    },
    status: "idle",
  },
  reducers: {},
  extraReducers: {
    [fetchMovies.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchMovies.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.status = "succeeded";
    },
    [fetchMovies.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});

export default moviceSlice.reducer;
