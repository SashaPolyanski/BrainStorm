import React, { ChangeEvent, useRef } from 'react';

import { useSelector } from 'react-redux';

import iconPhoto from '../../../../../assets/images/iconDownloadfoto.png';
import { selectUser } from '../../../../../bll/selectors/selectors';
import { updateUserInfo } from '../../../../../bll/slices/userSlice';
import { useAppDispatch } from '../../../../../bll/store';
import { convertFileToBase64 } from '../../../../../utils/convertToBase64';
import s from '../../Profile.module.scss';

const EditAvatarProfile = () => {
  const inRef = useRef<HTMLInputElement>(null);
  const user = useSelector(selectUser);
  const dispatch = useAppDispatch();

  const pickFile = () => {
    inRef && inRef.current && inRef.current.click();
  };
  const uploadHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length) {
      const file = e.target.files[0];
      if (file.size < 4000000) {
        convertFileToBase64(file, (file64: string) => {
          dispatch(updateUserInfo({ avatar: file64 }));
        });
      } else {
        // dispatch(setAppErrorAC('Файл слишком большого размера'));
      }
    }
  };
  return (
    <div className={s.userAvatar}>
      <img className={s.userAvatarImg} src={user.avatar} alt="" />
      {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions */}
      <img onClick={pickFile} className={s.iconDownloadPhoto} src={iconPhoto} alt="" />
      <input
        ref={inRef}
        type="file"
        style={{ display: 'none' }}
        onChange={uploadHandler}
      />
    </div>
  );
};

export default EditAvatarProfile;
