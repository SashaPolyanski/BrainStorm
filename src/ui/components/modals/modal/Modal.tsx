import React from 'react';

import s from './modal.module.scss';

const Modal: React.FC<ModalPropsType> = ({
  setActive,
  actionButton,
  children,
  isOpen,
}) => {
  const offModal = () => {
    setActive(false);
  };
  return (
    <>
      <div
        role="button"
        tabIndex={0}
        onClick={offModal}
        className={s.modalWrapper}
        style={{
          display: isOpen ? 'flex' : 'none',
        }}
      >
        <div
          role="button"
          tabIndex={0}
          className={s.modalContant}
          onClick={e => {
            e.stopPropagation();
          }}
        >
          {children}
        </div>
      </div>
      <div role="button" onClick={setActive} tabIndex={0} className={s.modalButton}>
        {actionButton}
      </div>
    </>
  );
};

type ModalPropsType = {
  setActive: any;
  isOpen?: boolean;
  actionButton: React.ReactNode;
  children: React.ReactNode;
};

export default Modal;
