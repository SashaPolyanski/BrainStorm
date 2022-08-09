import React, { useState } from 'react';

import { useSelector } from 'react-redux';

import { selectIsAuth } from '../../../bll/selectors/selectors';
import { logout } from '../../../bll/slices/authReducer';
import { setPacksThunk } from '../../../bll/slices/packsReducer';
import { useAppDispatch } from '../../../bll/store';
import { useDebounce } from '../../../bll/utils/useDebounce';
import DoubleRangeInput from '../../components/doubleRangeInput/DoubleRangeInput';
import { Input } from '../../components/input/Input';

const Profile = () => {
  const isAuth = useSelector(selectIsAuth);
  const dispatch = useAppDispatch();

  // if (!isAuth) {
  //   return <Navigate to={PATH.LOGIN} />;
  // }

  const debouncedRange = useDebounce((min?: number, max?: number, packName?: string) => {
    dispatch(setPacksThunk({ min, pageCount: max, packName }));
  }, 500);

  const debouncedInput = useDebounce((packName?: string) => {
    dispatch(setPacksThunk({ packName }));
  }, 500);

  const onChangeHandler = ({
    min,
    max,
    packName,
  }: {
    min: number;
    max: number;
    packName?: string;
  }) => {
    // console.log(`min = ${min}, max = ${max}`);
    debouncedRange(min, max, packName);
  };

  const onInputHandler = (e: any) => {
    const text = e && e.currentTarget.value;
    debouncedInput(text);
  };

  return (
    <div>
      Profile
      <button
        type="button"
        onClick={() => {
          dispatch(logout());
        }}
      >
        logout
      </button>
      <input type="text" name="search" onInput={onInputHandler} />
      <Input type="text" />
      <DoubleRangeInput min={1} max={100} onChange={onChangeHandler} />
    </div>
  );
};

export default Profile;
