import { createSlice } from '@reduxjs/toolkit';
import { idRequestAsync } from './getIdAction';

const initialState = {
  loading: true,
  ids: [],
  error: {},
};

export const getIdSlice = createSlice({
  name: 'id',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(idRequestAsync.pending, (state) => {
      state.error = '';
      state.loading = true;
    });
    builder.addCase(idRequestAsync.fulfilled, (state, { payload }) => {
      state.ids = payload;
      state.error = '';
      state.loading = false;
    });
    builder.addCase(idRequestAsync.rejected, (state) => {
      state.loading = false;
    });
  },
});

export default getIdSlice.reducer;
