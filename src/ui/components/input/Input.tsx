import React, { DetailedHTMLProps, InputHTMLAttributes, useState } from 'react';

import s from './Input.module.scss';

type DefaultInputPropsType = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;
type SuperInputTextPropsType = DefaultInputPropsType & {
  name?: 'password' | 'email' | 'confirmPassword' | 'login' | 'rememberMe';
  register?: Function;
  label?: string;
  required?: string | boolean;
  type: 'text' | 'password' | 'checkbox';
  error?: string;
};
export const Input = ({
  type,
  register,
  onKeyPress,
  required,
  className,
  error,
  name,
  label,
  ...rest
}: SuperInputTextPropsType) => {
  const [isShown, setIsShow] = useState<boolean>(true);
  const [isShown2, setIsShow2] = useState(type);
  const togglePassword = () => {
    setIsShow(!isShown);
    setIsShow2((type = 'text'));
    if (isShown2 === 'text') {
      setIsShow2((type = 'password'));
    }
  };
  const finalInputClassName = `${s.input} ${error && s.errorInput}`;
  return (
    <div className={s.inputWrapper}>
      <label className={s.label}>{label}</label>
      <input
        {...(register && register(name, { required }))}
        {...rest}
        type={isShown2}
        className={finalInputClassName}
      />
      {type === 'password' && (
        // eslint-disable-next-line jsx-a11y/control-has-associated-label
        <button
          type="button"
          onClick={togglePassword}
          className={`${s.eye} ${isShown && s.eyeShow}`}
        />
      )}
    </div>
  );
};
