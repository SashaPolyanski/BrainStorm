import React, {
  ChangeEvent,
  DetailedHTMLProps,
  InputHTMLAttributes,
  KeyboardEvent,
  useState,
} from 'react';

import s from './Input.module.scss';

type DefaultInputPropsType = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;
type SuperInputTextPropsType = DefaultInputPropsType & {
  onChangeText?: (value: string) => void;
  onEnter?: () => void;
  error?: string;
  className?: string;
};
export const Input = ({
  type,
  onChange,
  onChangeText,
  onKeyPress,
  onEnter,
  error,
  className,
  ...restProps
}: SuperInputTextPropsType) => {
  const [isShown, setIsShow] = useState<boolean>(false);
  const togglePassword = () => setIsShow(!isShown);
  const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
    onChange && onChange(e);

    onChangeText && onChangeText(e.currentTarget.value);
  };
  const finalInputClassName = `${s.input} ${className && s.errorInput}`;
  const onKeyPressCallback = (e: KeyboardEvent<HTMLInputElement>) => {
    onKeyPress && onKeyPress(e);

    onEnter && e.key === 'Enter' && onEnter();
  };
  return (
    <div className={s.inputWrapper}>
      <input
        type={type}
        onChange={onChangeCallback}
        onKeyPress={onKeyPressCallback}
        className={finalInputClassName}
        {...restProps}
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
