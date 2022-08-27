import React, { useState } from 'react';

import Button from '../../../button/Button';
import s from '../../../Pack/Pack.module.scss';
import Modal from '../../modal/Modal';

const LearnPackModal: React.FC<EditPacksModalPropsType> = ({
  _id,
  updatePackNameHandler,
}) => {
  const [active, setActive] = useState<boolean>(false);
  const [value, setValue] = useState<string>();

  const actionCallback = () => {
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
        actionButton={<Button variant="edit_learn" name="Learn" onClick={openModal} />}
      >
        <div className={s.packLearnModal}>Learn</div>
      </Modal>
    </div>
  );
};

type EditPacksModalPropsType = {
  _id?: string;
  updatePackNameHandler?: (_id: string, value: string) => void;
};

export default LearnPackModal;
