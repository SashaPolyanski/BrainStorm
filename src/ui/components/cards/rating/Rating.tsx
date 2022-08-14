import React from 'react';

import { editGradeCars } from '../../../../bll/slices/cardsSlice';
import { useAppDispatch } from '../../../../bll/store';

import s from './Rating.module.scss';

const Rating = ({ grade, id, packID }: GradeType) => {
  const dispatch = useAppDispatch();
  const rateChange = (rate: number) => {
    dispatch(editGradeCars({ grade: rate, _id: id, cardsPack_id: packID }));
  };
  return (
    <div className={s.ratingWrapper}>
      {[...Array(5)].map((star, index) => (
        // eslint-disable-next-line jsx-a11y/no-static-element-interactions
        <div
          key={`${index.toString()} + star`}
          className={index + 1 <= Math.floor(grade) ? s.ratingActive : s.ratingContainer}
          onClick={() => rateChange(index + 1)}
        >
          <svg
            width="12"
            height="11"
            viewBox="0 0 12 11"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 0L7.34708 4.1459H11.7063L8.17963 6.7082L9.52671 10.8541L6 8.2918L2.47329 10.8541L3.82037 6.7082L0.293661 4.1459H4.65292L6 0Z"
              fill="currentColor"
            />
          </svg>
        </div>
      ))}
    </div>
  );
};

export default Rating;

type GradeType = {
  grade: number;
  id: string;
  packID: string;
};
