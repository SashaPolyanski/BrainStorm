import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

import { GetPacksParamsType, packApi, PacksType } from '../../dal/packs';
import { AppRootStateType } from '../store';

import { setIsLoading } from './appReducer';

export const setPacks = createAsyncThunk(
  'packs/setPacks',
  async (_, { dispatch, rejectWithValue, getState }) => {
    const { packs } = getState() as AppRootStateType;
    const { packName, min, max, sortPacks, page, pageCount, user_id } = packs;
    const payload = {
      packName,
      min,
      max,
      sortPacks,
      page,
      pageCount,
      user_id,
    };
    try {
      dispatch(setIsLoading({ loading: true }));
      const { data } = await packApi.fetchPacks(payload);
      return data;
    } catch (err) {
      const error = err as AxiosError;
    } finally {
      dispatch(setIsLoading({ loading: false }));
    }
  },
);

export const addPack = createAsyncThunk(
  'packs/addPack',
  async (param: { name: string; isPrivate?: boolean }, { dispatch }) => {
    try {
      dispatch(setIsLoading({ loading: true }));
      await packApi.addNewPack(param);
      dispatch(setPacks());
    } catch (err) {
      const error = err as AxiosError;
    } finally {
      dispatch(setIsLoading({ loading: false }));
    }
  },
);

export const updatePackName = createAsyncThunk(
  'packs/updatePackName',
  async (param: { _id: string; name: string }, { dispatch }) => {
    try {
      dispatch(setIsLoading({ loading: true }));
      await packApi.updatePack(param);
      dispatch(setPacks());
    } catch (err) {
      const error = err as AxiosError;
    } finally {
      dispatch(setIsLoading({ loading: false }));
    }
  },
);

export const deletePack = createAsyncThunk(
  'packs/deletePack',
  async (id: string, { dispatch }) => {
    try {
      await packApi.deletePack(id);
      dispatch(setPacks());
    } catch (err) {
      const error = err as AxiosError;
    } finally {
      dispatch(setIsLoading({ loading: false }));
    }
  },
);

const slice = createSlice({
  name: 'packs',
  initialState: {
    cardsPack: [],
    packName: '',
    min: 0,
    max: 0,
    sortPacks: '0updated',
    page: 0,
    pageCount: 5,
    user_id: '',
  } as InitialStateType,
  reducers: {
    setSortPacks(
      state,
      action: PayloadAction<{ filterOrder: number; filterName: string }>,
    ) {
      state.sortPacks = `${action.payload.filterOrder}${action.payload.filterName}`;
    },
    setRangeValue(state, action: PayloadAction<{ min: number; max: number }>) {
      state.min = action.payload.min;
      state.max = action.payload.max;
    },
    setSearchValue(state, action: PayloadAction<{ packName: string }>) {
      state.packName = action.payload.packName;
    },
  },
  extraReducers: builder => {
    builder.addCase(setPacks.fulfilled, (state, action) => {
      if (action.payload) {
        state.cardsPack = action.payload.cardPacks;
      }
    });
  },
});

export const { setSortPacks, setRangeValue, setSearchValue } = slice.actions;
export const packsReducer = slice.reducer;

type InitialStateType = GetPacksParamsType & {
  cardsPack: Array<PacksType>;
};
