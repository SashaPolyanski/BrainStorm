import React, { useCallback, useEffect, useRef, useState } from 'react';

import { useDispatch } from 'react-redux';

import { setRangeValue } from '../../../bll/slices/packsSlice';
import { useDebounce } from '../../../bll/utils/useDebounce';

import s from './doubleRangeInput.module.scss';

const DoubleRangeInput: React.FC<DoubleRangeInputType> = ({ min, max, onChange }) => {
  const [minVal, setMinVal] = useState<number>(min);
  const [maxVal, setMaxVal] = useState<number>(max);
  const minValRef = useRef(min);
  const maxValRef = useRef(max);
  const range = useRef<any>(null);
  const dispatch = useDispatch();

  // Convert to percentage
  const getPercent = useCallback(
    (value: number) => Math.round(((value - min) / (max - min)) * 100),
    [min, max],
  );

  // Set width of the range to decrease from the left side
  useEffect(() => {
    const minPercent = getPercent(minVal);
    const maxPercent = getPercent(maxValRef.current);

    if (range.current) {
      range.current.style.left = `${minPercent}%`;
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [minVal, getPercent]);

  // Set width of the range to decrease from the right side
  useEffect(() => {
    const minPercent = getPercent(minValRef.current);
    const maxPercent = getPercent(maxVal);

    if (range.current) {
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [maxVal, getPercent]);

  // Get min and max values when their state changes
  useEffect(() => {
    onChange && onChange({ min: minVal, max: maxVal });
  }, [minVal, maxVal, onChange]);

  useEffect(() => {
    onChange && onChange({ min: minVal, max: maxVal });
  }, [minVal, maxVal, onChange]);

  const debouncedRange = useDebounce((min1: number, max1: number) => {
    dispatch(setRangeValue({ min: min1, max: max1 }));
  }, 500);

  useEffect(() => {
    debouncedRange(minVal, maxVal);
  }, [minVal, maxVal]);

  return (
    <div className={s.container}>
      <div className={s.slider}>
        <div className={s.slider__track} />
        <div ref={range} className={s.slider__range} />
        <div className={s.slider__leftValue}>{minVal}</div>
        <div className={s.slider__rightValue}>{maxVal}</div>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        value={minVal}
        onChange={event => {
          const value = Math.min(Number(event.target.value), maxVal - 1);
          setMinVal(value);
          minValRef.current = value;
        }}
        className={`${s.thumb} ${s.thumbLeft}`}
        style={{ zIndex: minVal > max - 100 ? '5' : '' }}
      />
      <input
        type="range"
        min={min}
        max={max}
        value={maxVal}
        onChange={event => {
          const value = Math.max(Number(event.target.value), minVal + 1);
          setMaxVal(value);
          maxValRef.current = value;
        }}
        className={`${s.thumb} ${s.thumbRight}`}
      />
    </div>
  );
};

export type DoubleRangeInputType = {
  min: number;
  max: number;
  onChange?: ({ min: minVal, max: maxVal }: { min: number; max: number }) => void;
};

export default DoubleRangeInput;
