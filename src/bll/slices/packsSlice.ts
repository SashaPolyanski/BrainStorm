import { log } from 'util';

import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

import { GetPacksParamsType, packApi, PacksType } from '../../dal/packs';
import { AppRootStateType } from '../store';

import { isLoading, setIsLoading } from './appSlice';

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
      dispatch(isLoading({ loading: true }));
      const { data } = await packApi.fetchPacks(payload);
      dispatch(setTotalCount({ count: data.cardPacksTotalCount }));
      dispatch(setRangeValue({ min: data.minCardsCount, max: data.maxCardsCount }));
      return data;
    } catch (err) {
      const error = err as AxiosError;
    } finally {
      dispatch(isLoading({ loading: false }));
    }
  },
);

export const addPack = createAsyncThunk(
  'packs/addPack',
  async (param: { name: string; isPrivate?: boolean }, { dispatch }) => {
    try {
      dispatch(isLoading({ loading: true }));
      await packApi.addNewPack(param);
      dispatch(setPacks());
    } catch (err) {
      const error = err as AxiosError;
    } finally {
      dispatch(isLoading({ loading: false }));
    }
  },
);

export const updatePackName = createAsyncThunk(
  'packs/updatePackName',
  async (param: { _id: string; name: string }, { dispatch }) => {
    try {
      dispatch(isLoading({ loading: true }));
      await packApi.updatePack(param);
      dispatch(setPacks());
    } catch (err) {
      const error = err as AxiosError;
    } finally {
      dispatch(isLoading({ loading: false }));
    }
  },
);

export const deletePack = createAsyncThunk(
  'packs/deletePack',
  async (id: string, { dispatch }) => {
    try {
      dispatch(isLoading({ loading: true }));
      await packApi.deletePack(id);
      dispatch(setPacks());
    } catch (err) {
      const error = err as AxiosError;
    } finally {
      dispatch(isLoading({ loading: false }));
    }
  },
);

const slice = createSlice({
  name: 'packs',
  initialState: {
    cardsPack: [],
    packName: '',
    cardPacksTotalCount: 0,
    min: 0,
    max: 0,
    sortPacks: '0updated',
    page: 1,
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
    setPage(state, action: PayloadAction<{ page: number }>) {
      state.page = action.payload.page;
    },
    setTotalCount(state, action: PayloadAction<{ count: number }>) {
      state.cardPacksTotalCount = action.payload.count;
    },
    showCertainPacks(state, action: PayloadAction<{ id: string }>) {
      state.user_id = action.payload.id;
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

export const {
  setSortPacks,
  setRangeValue,
  setSearchValue,
  showCertainPacks,
  setTotalCount,
  setPage,
} = slice.actions;
export const packsSlice = slice.reducer;

type InitialStateType = GetPacksParamsType & {
  cardsPack: Array<PacksType>;
};
