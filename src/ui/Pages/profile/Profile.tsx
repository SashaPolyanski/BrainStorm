import React from 'react';

import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { selectIsAuth } from '../../../bll/selectors/selectors';
import { logout } from '../../../bll/slices/authReducer';
import { useAppDispatch } from '../../../bll/store';
import { PATH } from '../../../common/constants/constants';

const Profile = () => {
  const inRef = useRef<HTMLInputElement>(null);
  const isAuth = useSelector(selectIsAuth);
  const user = useSelector(selectUser);
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

  const uploadHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length) {
      const file = e.target.files[0];
      if (file.size < 4000000) {
        convertFileToBase64(file, (file64: string) => {
          dispatch(updateUserAvatar(file64));
        });
      } else {
        // dispatch(setAppErrorAC('Файл слишком большого размера'));
      }
    }
  };
  const convertFileToBase64 = (file: File, callBack: (value: string) => void) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      const file64 = reader.result as string;
      callBack(file64);
    };
    reader.readAsDataURL(file);
  };
  const uploadHandler2 = () => {
    inRef && inRef.current && inRef.current.click();
  };
  const registrationDate = user.created.slice(0, 10).split('-').reverse().join('-');
  if (!isAuth) {
    return <Navigate to={PATH.LOGIN} />;
  }

  return (
    <AuthWrapper>
      <div className={s.container}>
        <div className={s.userAvatar}>
          <img className={s.userAvatarImg} src={user.avatar} alt="" />
          {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions */}
          <img
            onClick={uploadHandler2}
            className={s.iconDownloadPhoto}
            src={iconPhoto}
            alt=""
          />
          <input
            ref={inRef}
            type="file"
            style={{ display: 'none' }}
            onChange={uploadHandler}
          />
        </div>
        <div className={s.descriptionUser}>
          <div className={s.cardsCount}>
            Cards Packs: {user.publicCardPacksCount} quantity
          </div>
          <div className={s.userName}>Name: {user.name}</div>
          <div className={s.userEmail}>Email: {user.email}</div>
          <div>Registration: {registrationDate}</div>
        </div>
        <div className={s.buttonWrapper}>
          <Button variant="auth" name="Logout" />
        </div>
      </div>
    </AuthWrapper>
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
