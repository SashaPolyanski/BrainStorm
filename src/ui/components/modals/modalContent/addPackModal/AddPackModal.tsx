import React, { useState } from 'react';

import Button from '../../../button/Button';
import { Input } from '../../../input/Input';
import s from '../../../Pack/Pack.module.scss';
import Modal from '../../modal/Modal';

const AddPackModal: React.FC<EditPacksModalPropsType> = ({ addPackHandler }) => {
  const [active, setActive] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>();

  const handelEditPack = () => {
    addPackHandler(String(inputValue));
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
        actionButton={<Button variant="auth" name="AddPack" onClick={openModal} />}
      >
        <div className={s.packEditForm}>
          <Input
            type="text"
            placeholder="Enter new pack name"
            value={inputValue}
            onChange={e => setInputValue(e.currentTarget.value)}
          />
          <Button variant="auth" name="Send" onClick={handelEditPack} />
        </div>
      </Modal>
    </div>
  );
};

type EditPacksModalPropsType = {
  addPackHandler: (value: string) => void;
};

export default AddPackModal;
