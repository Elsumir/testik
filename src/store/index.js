import { configureStore } from '@reduxjs/toolkit';
import getIdSlice from './getIdReduces/getIdSlice';
import getCardSlice from './getCardReduces/getCardSlice';
import counterReducer from './countReduces/countSlice';
import typeActionSlice from './typeActionReduces/typeActionReduces';
export const store = configureStore({
  reducer: {
    getId: getIdSlice,
    getCard: getCardSlice,
    count: counterReducer,
    typeAction: typeActionSlice,
  },
  devTools: true,
});
