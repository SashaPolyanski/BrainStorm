import React, { useState } from 'react';

import Button from '../../../button/Button';
import Modal from '../../modal/Modal';

import s from './deletePackModal.module.scss';

const DeletePackModal: React.FC<EditPacksModalPropsType> = ({
  name,
  deletePackHandler,
}) => {
  const [active, setActive] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>();

  // const handelEditPack = () => {
  //   deletePackHandler
  //   setActive(false);
  //   setInputValue('');
  // };

  const openModal = () => {
    setActive(true);
  };
  const closeModal = () => {
    setActive(false);
  };

  return (
    <div>
      <Modal
        setActive={setActive}
        isOpen={active}
        actionButton={<Button variant="delete" name="Delete" onClick={openModal} />}
      >
        {/*  ----- Body Modal -----*/}
        <div className={s.deletePackWrapper}>
          <div className={s.deletePackTitle}>
            <h3>Delete Pack</h3>
          </div>
          <div className={s.deletePackBody}>
            <p>
              Do you realy whant to delete <b>{name}</b> ?
            </p>
          </div>
          <div className={s.deletePackButtonGroup}>
            <Button variant="cancel_auth" name="Cansel" onClick={closeModal} />
            <Button variant="delete_in_modal" name="Delete" onClick={deletePackHandler} />
          </div>
        </div>
        {/*  ----- End Body Modal -----*/}
      </Modal>
    </div>
  );
};

type EditPacksModalPropsType = {
  name: string;
  deletePackHandler: () => void;
};

export default DeletePackModal;
