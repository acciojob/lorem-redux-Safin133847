import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchLorem = createAsyncThunk('lorem/fetchLorem', async () => {
  const response = await fetch('https://api.lorem.com/ipsum ');
  return response.json();
});

const loremSlice = createSlice({
  name: 'lorem',
  initialState: { data: null, loading: false, error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchLorem.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchLorem.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchLorem.rejected, (state) => {
        state.loading = false;
        state.error = 'Failed to fetch data';
      });
  }
});

export default loremSlice.reducer;
