import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchMovies = createAsyncThunk("movie/getMovie", async () => {
  const res = await axios(
    `http://www.omdbapi.com/?apikey=2ccecf61&s=harry&type=movie&`
  );
  return res.data;
});

export const moviceSlice = createSlice({
  name: "movie",
  initialState: {
    items: {
      Search: [],
    },
  },
  reducers: {},
  extraReducers: {
    [fetchMovies.fulfilled]: (state, action) => {
      state.items = action.payload;
    },
  },
});

export default moviceSlice.reducer;
