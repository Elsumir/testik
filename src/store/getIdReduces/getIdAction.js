import { URL_API, token } from '../../api/const';

import { createAsyncThunk } from '@reduxjs/toolkit';

export const idRequestAsync = createAsyncThunk(
  'id/idRequestAsync',
  async (params, thunkAPI) => {
    const count = thunkAPI.getState().count.value;
    const type = thunkAPI.getState().typeAction.action;

    const postParams = () => {
      params.offset = 50 * count;
      params.limit = 50;
      return params;
    };

    return await fetch(`${URL_API}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'X-Auth': token },
      body: JSON.stringify({
        action: type,
        params: postParams(),
      }),
    })
      .then((res) => res.json())
      .then(({ result }) => result)
      .catch((error) => {
        console.log(error);
      });
  }
);
