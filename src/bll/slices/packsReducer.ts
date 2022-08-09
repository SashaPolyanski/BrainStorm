import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { GetPacksType } from '../../common/types/requestTypes';
import { PackType } from '../../common/types/ResponseTypes';
import { fetchPacks } from '../../dal/packs';

// Thank
export const setPacksThunk = createAsyncThunk(
  'packs/setPacks',
  async (data: GetPacksType, { dispatch }) => {
    try {
      const response = await fetchPacks.getPacks(data);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  },
);

// Slice
const slice = createSlice({
  name: 'packs',
  initialState: [
    {
      _id: '',
      user_id: '',
      name: 'No name',
      cardsCount: 25,
      created: '2020-05-09T15:40:40.339Z',
      updated: '2020-05-09T15:40:40.339Z',
    },
  ] as PackType[],
  reducers: {
    setPacks(state, action: PayloadAction<{ packs: PackType[] }>) {
      state.push(...action.payload.packs);
    },
  },
});

export const packsReducer = slice.reducer;
export const { setPacks } = slice.actions;
