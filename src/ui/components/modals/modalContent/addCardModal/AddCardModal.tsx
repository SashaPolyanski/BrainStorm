import React, { useState } from 'react';

import Button from '../../../button/Button';
import { Input } from '../../../input/Input';
import s from '../../../Pack/Pack.module.scss';
import Modal from '../../modal/Modal';

const AddCardModal: React.FC<EditPacksModalPropsType> = ({ addCardHandler }) => {
  const [active, setActive] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>();

  const handelEditPack = () => {
    addCardHandler(String(inputValue));
    setActive(false);
    setInputValue('');
  };

  const openModal = () => {
    setActive(true);
  };

  return (
    <div>
      <Modal
        setActive={setActive}
        isOpen={active}
        actionButton={<Button variant="auth" name="AddCard" onClick={openModal} />}
      >
        {/*  ----- Body Modal -----*/}
        <div className={s.packEditForm}>
          <Input
            type="text"
            placeholder="Enter new pack name"
            value={inputValue}
            onChange={e => setInputValue(e.currentTarget.value)}
          />
          <Button variant="auth" name="Send" onClick={handelEditPack} />
        </div>
        {/*  ----- End Body Modal -----*/}
      </Modal>
    </div>
  );
};

type EditPacksModalPropsType = {
  addCardHandler: (value: string) => void;
};

export default AddCardModal;
