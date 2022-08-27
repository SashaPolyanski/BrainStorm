import React, { useState } from 'react';

import { NavLink } from 'react-router-dom';

import { deletePack, updatePackName } from '../../../bll/slices/packsSlice';
import { useAppDispatch } from '../../../bll/store';
import { PacksType } from '../../../dal/packs';
import Button from '../button/Button';
import EditPackModal from '../modals/modalContent/editPackModal/EditPackModal';
import LearnPackModal from '../modals/modalContent/learnPackModal/LearnPackModal';

import s from './Pack.module.scss';

export const Pack = ({ pack }: PackPropsType) => {
  const { name, updated, cardsCount, user_name, _id } = pack;
  const dispatch = useAppDispatch();

  const deletePackHandler = () => {
    dispatch(deletePack(_id));
  };

  const updatePackNameHandler = (newName: string) => {
    if (newName) {
      dispatch(updatePackName({ _id, name: newName }));
    }
  };

  const updatedDate = updated.slice(0, 10).split('-').reverse().join('-');
  const updatedName = name.slice(0, 25);
  const updateUser_name = user_name.slice(0, 15);

  return (
    <div>
      <div className={s.pack}>
        <NavLink to={`/cards/${_id}`} className={s.name}>
          {updatedName}
        </NavLink>
        <div className={s.cardsCount}>{cardsCount}</div>
        <div className={s.updatedDate}>{updatedDate}</div>
        <div className={s.user_name}>{updateUser_name}</div>
        <div className={s.btnBlock}>
          <Button variant="delete" name="Delete" onClick={deletePackHandler} />
          <EditPackModal updatePackNameHandler={updatePackNameHandler} name={name} />
          <LearnPackModal />
        </div>
      </div>
    </div>
  );
};

export type PackPropsType = {
  pack: PacksType;
};
