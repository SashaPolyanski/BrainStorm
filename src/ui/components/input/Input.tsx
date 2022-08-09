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
  value?: string;
  type?: 'text' | 'password' | 'checkbox';
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
  value,
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
  const finalInputWrapper = `${s.inputWrapper} ${error && s.errorWrapper}`;
  return (
    <div className={finalInputWrapper}>
      <label className={s.label}>{label}</label>
      <input
        value={value}
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
