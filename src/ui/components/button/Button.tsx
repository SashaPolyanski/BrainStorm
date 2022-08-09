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
    | 'show_my_pack'
    | 'show_all_pack'
    | 'delete'
    | 'edit_learn'
    | 'pagination'
    | 'hidden';
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
    case 'show_my_pack':
      finalClassName = `${s.show_my_pack} ${finalClassName}`;
      break;
    case 'show_all_pack':
      finalClassName = `${s.show_all_pack} ${finalClassName}`;
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
