import React, { useState } from 'react';

import { NavLink } from 'react-router-dom';

import { deletePack, updatePackName } from '../../../bll/slices/packsSlice';
import { useAppDispatch } from '../../../bll/store';
import { PacksType } from '../../../dal/packs';
import Button from '../button/Button';
import { Input } from '../input/Input';
import Modal from '../modal/Modal';

import s from './Pack.module.scss';

export const Pack = ({ pack }: PackPropsType) => {
  const { name, updated, cardsCount, user_name, _id } = pack;
  const dispatch = useAppDispatch();
  const [editMode, setEditMode] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const deletePackHandler = () => {
    dispatch(deletePack(_id));
  };

  const updatePackNameHandler = () => {
    console.log('send');
    // eslint-disable-next-line no-alert
    // const newName = prompt('Enter new pack name', '');
    // if (newName) {
    //   dispatch(updatePackName({ _id, name: newName }));
    // }
    setOpenModal(!openModal);
  };

  const callback = () => {
    console.log('callback');
    setOpenModal(!openModal);
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
          <Modal
            callback={callback}
            openModal={openModal}
            button={<Button variant="edit_learn" name="Edit" />}
          >
            <div className={s.packEditForm}>
              <Input type="text" placeholder="Enter new pack name" />
              <Button variant="auth" name="Send" onClick={updatePackNameHandler} />
            </div>
          </Modal>
          <Modal button={<Button variant="edit_learn" name="Learn" />}>
            <div>Learn</div>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export type PackPropsType = {
  pack: PacksType;
};
