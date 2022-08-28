import React, { useState } from 'react';

import Button from '../../../button/Button';
import { Input } from '../../../input/Input';
import s from '../../../Pack/Pack.module.scss';
import Modal from '../../modal/Modal';

const EditPackModal: React.FC<EditPacksModalPropsType> = ({
  name,
  updatePackNameHandler,
}) => {
  const [active, setActive] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>(name);

  const handelEditPack = () => {
    updatePackNameHandler(String(inputValue));
    setActive(false);
  };

  const openModal = () => {
    setActive(true);
  };

  return (
    <div>
      <Modal
        setActive={setActive}
        isOpen={active}
        actionButton={<Button variant="edit_learn" name="Edit" onClick={openModal} />}
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
  name: string;
  updatePackNameHandler: (value: string) => void;
};

export default EditPackModal;
