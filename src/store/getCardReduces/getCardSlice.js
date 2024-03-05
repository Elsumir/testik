import { createSlice } from '@reduxjs/toolkit';
import { cardRequestAsync } from './getCardReduces';

const initialState = {
  loading: true,
  card: [],
  error: {},
};

export const getCardSlice = createSlice({
  name: 'card',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(cardRequestAsync.pending, (state) => {
      state.error = '';
      state.loading = true;
    });
    builder.addCase(cardRequestAsync.fulfilled, (state, { payload }) => {
      state.card = payload;
      state.error = '';
      state.loading = false;
    });
    builder.addCase(cardRequestAsync.rejected, (state) => {
      state.loading = false;
    });
  },
});

export default getCardSlice.reducer;
