import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Асинхронный thunk для получения случайной цитаты
export const fetchRandomQuote = createAsyncThunk(
  "quote/fetchRandomQuote",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        "https://zenquotes.io/api/random"
      );

      return {
        text: response.data[0].q,
        author: response.data[0].a,
      };
    } catch (error) {
      return rejectWithValue("Ошибка загрузки цитаты");
    }
  }
);

const initialState = {
  text: "",
  author: "",
  status: "idle", // idle | loading | succeeded | failed
  error: null,
};

const quoteSlice = createSlice({
  name: "quote",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRandomQuote.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchRandomQuote.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.text = action.payload.text;
        state.author = action.payload.author;
      })
      .addCase(fetchRandomQuote.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export default quoteSlice.reducer;
