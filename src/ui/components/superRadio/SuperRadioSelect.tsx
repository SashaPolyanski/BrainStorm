import React, { ChangeEvent, InputHTMLAttributes, DetailedHTMLProps } from 'react';

import s from './superRadio.module.css';

type DefaultRadioPropsType = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

type SuperRadioPropsType = DefaultRadioPropsType & {
  options?: any[];
  onChangeOption?: (option: any) => void;
};

const SuperRadio: React.FC<SuperRadioPropsType> = ({
  type,
  name,
  options,
  value,
  className,
  onChange,
  onChangeOption,
  ...restProps
}) => {
  const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
    // onChange, onChangeOption
    onChange && onChange(e);
    onChangeOption && onChangeOption(e.currentTarget.value);
  };
  const finalSelectClassName = `$ ${className || s.superRadio}`;
  // map options with key
  const mappedOptions: any[] = options
    ? options.map((o, i) => (
        <label key={`${name}-${i + 1}`}>
          <input
            type="radio"
            name={o}
            value={o}
            checked={o === value}
            onChange={onChangeCallback}
            className={finalSelectClassName}
          />
          &nbsp; {o} &nbsp;
        </label>
      ))
    : [];

  return <div>{mappedOptions}</div>;
};

export default SuperRadio;
