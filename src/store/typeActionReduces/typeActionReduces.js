import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  action: 'get_ids',
};

export const typeActionSlice = createSlice({
  name: 'type',
  initialState,
  reducers: {
    typeAction: (state, { payload }) => {
      state.action = payload;
    },
  },
});

export const { typeAction } = typeActionSlice.actions;
export default typeActionSlice.reducer;
