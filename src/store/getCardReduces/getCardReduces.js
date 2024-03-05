import { URL_API, token } from '../../api/const';

import { createAsyncThunk } from '@reduxjs/toolkit';

export const cardRequestAsync = createAsyncThunk(
  'card/cardRequestAsync',
  async (ids) => {
    if (!ids || !ids.length) {
      return;
    }
    return await fetch(`${URL_API}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'X-Auth': token },
      body: JSON.stringify({
        action: 'get_items',
        params: { ids: ids },
      }),
    })
      .then((res) => res.json())
      .then(({ result }) => result)
      .catch((error) => {
        console.log(error);
      });
  }
);
