import React, { useState } from 'react';

import s from './modal.module.scss';

const Modal: React.FC<ModalPropsType> = ({
  callback,
  button,
  children,
  openModal = false,
}) => {
  const [isOpen, setIsOpen] = useState(openModal);

  const onClickHandler = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
    setIsOpen(state => !state);
  };

  const closeModalHandler = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
    // setIsOpen(state => !state);
  };

  return (
    <>
      <div
        role="button"
        tabIndex={0}
        onClick={callback}
        className={s.modalWrapper}
        style={{
          display: openModal ? 'flex' : 'none',
        }}
      >
        <div
          role="button"
          tabIndex={0}
          className={s.modalContant}
          onClick={closeModalHandler}
        >
          {children}
        </div>
      </div>
      <div role="button" onClick={onClickHandler} tabIndex={0}>
        {button}
      </div>
    </>
  );
};
type ModalPropsType = {
  callback?: () => void;
  openModal?: boolean;
  button: any;
  children: React.ReactNode;
};
export default Modal;
