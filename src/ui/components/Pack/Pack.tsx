import React from 'react';

import { NavLink, useNavigate } from 'react-router-dom';

import { deletePack, updatePackName } from '../../../bll/slices/packsSlice';
import { useAppDispatch } from '../../../bll/store';
import { PATH } from '../../../common/constants/constants';
import { PacksType } from '../../../dal/packs';
import Button from '../button/Button';
import DeletePackModal from '../modals/modalContent/deletePackModal/DeletePackModal';
import EditPackModal from '../modals/modalContent/editPackModal/EditPackModal';

import s from './Pack.module.scss';

export const Pack = ({ pack, user_id }: PackPropsType) => {
  const { name, updated, cardsCount, user_name, _id } = pack;
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

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

  const redirectToLearnCard = () => {
    navigate(`${PATH.LEARN}/${_id}`);
  };

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
          {user_id && (
            <DeletePackModal deletePackHandler={deletePackHandler} name={name} />
          )}
          {user_id && (
            <EditPackModal updatePackNameHandler={updatePackNameHandler} name={name} />
          )}
          {/* <LearnPackModal redirectToLearnCard={redirectToLearnCard} _id={_id} /> */}
        </div>
      </div>
    </div>
  );
};

export type PackPropsType = {
  pack: PacksType;
  user_id: string;
};
