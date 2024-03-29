import React, { useState } from 'react';

import Button from '../../../components/button/Button';

import s from './Header.module.scss';
import HeaderImageCart from './headerImage/HeaderImageCart';

const Header = () => {
  const [active, setActive] = useState('1');
  const changeActiveHandler = (num: string) => {
    setActive(num);
  };
  return (
    <div className={s.container}>
      <h2 className={s.title}>BrainStorm</h2>
      <div className={s.buttonContainer}>
        <HeaderImageCart deg />
        <HeaderImageCart deg={false} />
        <Button
          onClick={() => changeActiveHandler('1')}
          variant={active === '1' ? 'active_btn' : 'pack_list'}
          name="Pack list"
        />
        <svg
          className={s.profileImg}
          width="16"
          height="17"
          viewBox="0 0 16 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.5 3.75C4.5 1.95158 5.95451 0.5 7.75501 0.5C9.55646 0.5 11 1.95254 11 3.75C11 5.54746 9.55646 7 7.75501 7C5.95451 7 4.5 5.54842 4.5 3.75ZM3.28337 10.3941C4.7722 9.79836 6.55377 9.5 7.75 9.5C8.94622 9.5 10.7278 9.79836 12.2166 10.3941C12.9612 10.6921 13.6484 11.0706 14.1534 11.5364C14.6607 12.0042 15 12.5762 15 13.25V13.75C15 14.9926 13.9926 16 12.75 16H2.75C1.50736 16 0.5 14.9926 0.5 13.75V13.25C0.5 12.5762 0.83933 12.0042 1.34661 11.5364C1.85162 11.0706 2.53878 10.6921 3.28337 10.3941Z"
            stroke="#2D2E46"
          />
        </svg>

        <Button
          variant={active === '2' ? 'active_btn' : 'pack_list'}
          name="Profile"
          onClick={() => changeActiveHandler('2')}
        />
      </div>
    </div>
  );
};

export default Header;
