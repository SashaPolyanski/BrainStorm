import React, { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

import s from './Button.module.scss';

type DefaultButtonPropsType = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

type ButtonPropsType = DefaultButtonPropsType & {
  name?: string;
  variant:
    | 'auth'
    | 'cancel_auth'
    | 'show_certain_packs'
    | 'show_certain_packs_active'
    | 'delete'
    | 'edit_learn'
    | 'pagination'
    | 'hidden'
    | 'pack_list'
    | 'delete_in_modal'
    | 'active_btn';
};

const Button: React.FC<ButtonPropsType> = ({
  name,
  className,
  disabled,
  variant,
  ...restProps
}) => {
  let finalClassName = className || '';
  switch (variant) {
    case 'auth':
      finalClassName = `${s.auth} ${finalClassName}`;
      break;
    case 'cancel_auth':
      finalClassName = `${s.cancel_auth} ${finalClassName}`;
      break;
    case 'show_certain_packs':
      finalClassName = `${s.show_certain_packs} ${
        name === 'My' ? s.leftRounded : s.rightRounded
      } ${finalClassName}`;
      break;
    case 'show_certain_packs_active':
      finalClassName = `${s.show_certain_packs_active} ${
        name === 'My' ? s.leftRounded : s.rightRounded
      } ${finalClassName}`;
      break;
    case 'delete':
      finalClassName = `${s.delete} ${finalClassName}`;
      break;
    case 'edit_learn':
      finalClassName = `${s.edit_learn} ${finalClassName}`;
      break;
    case 'pagination':
      finalClassName = `${s.pagination} ${finalClassName}`;
      break;
    case 'hidden':
      finalClassName = `${s.hidden} ${finalClassName}`;
      break;
    case 'pack_list':
      finalClassName = `${s.pack_list} ${finalClassName}`;
      break;
    case 'active_btn':
      finalClassName = `${s.activeBtn} ${finalClassName}`;
      break;
    case 'delete_in_modal':
      finalClassName = `${s.deleteInModal} ${finalClassName}`;
      break;
  }
  return (
    <div>
      <button
        type="button"
        disabled={!!disabled}
        className={finalClassName}
        {...restProps}
      >
        {name}
      </button>
    </div>
  );
};

export default Button;
